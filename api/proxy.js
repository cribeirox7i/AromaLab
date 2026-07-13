/**
 * Proxy servidor-a-servidor entre o frontend estático e o Apps Script.
 *
 * Por que isso existe: o navegador do usuário nunca fala direto com o
 * script.google.com (isso já foi tentado de várias formas - iframe, fetch
 * POST/GET, JSONP - e todas esbarraram em bloqueios do próprio navegador:
 * X-Frame-Options, CORS sem Access-Control-Allow-Origin, proteção de
 * rastreamento). Rodando aqui, do lado do servidor da Vercel, nenhuma
 * dessas regras se aplica - é só uma chamada HTTP comum de servidor pra
 * servidor. O navegador do usuário só conversa com "/api/proxy", no mesmo
 * domínio do site (nunca aparece o aviso do Google, nunca cai em CORS).
 *
 * Configuração necessária na Vercel: Project Settings → Environment
 * Variables → adicionar APP_URL com a URL /exec da implantação do Apps
 * Script (Implantar → Gerenciar implantações → copiar a URL terminada
 * em /exec).
 */
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, erro: 'Método não permitido.' });
    return;
  }

  const APP_URL = process.env.APP_URL;
  if (!APP_URL) {
    res.status(500).json({ ok: false, erro: 'APP_URL não configurada no servidor.' });
    return;
  }

  try {
    const upstream = await fetch(APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {})
    });
    const texto = await upstream.text();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(texto);
  } catch (err) {
    res.status(502).json({ ok: false, erro: 'Falha ao conectar com o servidor.' });
  }
};
