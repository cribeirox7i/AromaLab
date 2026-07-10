/* ===========================================================
 *  AromaLab — App.html (JavaScript do cliente)
 * =========================================================== */

/* ===========================================================
 *  MULTI-IDIOMA (pt / en / es)
 * =========================================================== */
const I18N = {
  carregando:        { pt: 'Formulando…', en: 'Formulating…', es: 'Formulando…' },
  brand_sub:         { pt: 'Laboratório de Perfumaria Técnica', en: 'Technical Perfumery Laboratory', es: 'Laboratorio de Perfumería Técnica' },
  fechar:            { pt: 'Fechar', en: 'Close', es: 'Cerrar' },
  cancelar:          { pt: 'Cancelar', en: 'Cancel', es: 'Cancelar' },
  btn_salvar:        { pt: '💾 Salvar', en: '💾 Save', es: '💾 Guardar' },
  sim:               { pt: 'Sim', en: 'Yes', es: 'Sí' },
  nao:               { pt: 'Não', en: 'No', es: 'No' },
  nav_inicio:        { pt: 'Início', en: 'Home', es: 'Inicio' },
  nav_insumos:       { pt: 'Insumos', en: 'Ingredients', es: 'Insumos' },
  nav_formulas:      { pt: 'Fórmulas', en: 'Formulas', es: 'Fórmulas' },
  nav_glossario:     { pt: 'Glossário', en: 'Glossary', es: 'Glosario' },
  nav_perfil:        { pt: 'Perfil', en: 'Profile', es: 'Perfil' },
  nav_producao:      { pt: 'Produção', en: 'Production', es: 'Producción' },
  nav_producao_plu:  { pt: 'Produções', en: 'Productions', es: 'Producciones' },
  nav_fornecedores:  { pt: 'Fornecedores', en: 'Suppliers', es: 'Proveedores' },
  lbl_email:         { pt: 'E-mail', en: 'Email', es: 'Correo electrónico' },
  lbl_senha:         { pt: 'Senha', en: 'Password', es: 'Contraseña' },
  lbl_nome:          { pt: 'Nome *', en: 'Name *', es: 'Nombre *' },
  lbl_email_req:     { pt: 'E-mail *', en: 'Email *', es: 'Correo electrónico *' },
  lbl_senha_req:     { pt: 'Senha * (mín. 6 caracteres)', en: 'Password * (min. 6 characters)', es: 'Contraseña * (mín. 6 caracteres)' },
  btn_entrar:        { pt: 'Entrar', en: 'Sign in', es: 'Entrar' },
  lnk_esqueci:       { pt: 'Esqueci minha senha', en: 'Forgot my password', es: 'Olvidé mi contraseña' },
  sep_novo:          { pt: 'novo por aqui?', en: 'new here?', es: '¿nuevo por aquí?' },
  lnk_criar_conta:   { pt: 'Criar minha conta', en: 'Create my account', es: 'Crear mi cuenta' },
  btn_cadastrar:     { pt: 'Cadastrar e receber código', en: 'Sign up and receive code', es: 'Registrarme y recibir código' },
  lnk_voltar_login:  { pt: '← Voltar ao login', en: '← Back to sign in', es: '← Volver al inicio de sesión' },
  verify_intro:      { pt: 'Enviamos um código de 6 dígitos para', en: 'We sent a 6-digit code to', es: 'Enviamos un código de 6 dígitos a' },
  btn_confirmar:     { pt: 'Confirmar código', en: 'Confirm code', es: 'Confirmar código' },
  lnk_corrigir:      { pt: '← Corrigir dados', en: '← Fix my details', es: '← Corregir datos' },
  forgot_intro:      { pt: 'Informe seu e-mail e enviaremos uma senha temporária.', en: 'Enter your email and we will send a temporary password.', es: 'Indica tu correo y te enviaremos una contraseña temporal.' },
  btn_enviar_temp:   { pt: 'Enviar senha temporária', en: 'Send temporary password', es: 'Enviar contraseña temporal' },
  msg_informe_login: { pt: 'Informe e-mail e senha.', en: 'Enter email and password.', es: 'Indica correo y contraseña.' },
  msg_bemvindo_volta:{ pt: 'Bem-vindo de volta', en: 'Welcome back', es: 'Bienvenido de nuevo' },
  msg_obrigatorios:  { pt: 'Nome, e-mail e senha são obrigatórios.', en: 'Name, email and password are required.', es: 'Nombre, correo y contraseña son obligatorios.' },
  msg_codigo_enviado:{ pt: 'Código enviado para', en: 'Code sent to', es: 'Código enviado a' },
  msg_digite_codigo: { pt: 'Digite o código de 6 dígitos.', en: 'Enter the 6-digit code.', es: 'Introduce el código de 6 dígitos.' },
  msg_conta_criada:  { pt: 'Conta criada com sucesso. Bem-vindo ao AromaLab!', en: 'Account created successfully. Welcome to AromaLab!', es: 'Cuenta creada con éxito. ¡Bienvenido a AromaLab!' },
  msg_informe_email: { pt: 'Informe seu e-mail.', en: 'Enter your email.', es: 'Indica tu correo.' },
  msg_temp_enviada:  { pt: 'Se o e-mail estiver cadastrado, uma senha temporária foi enviada.', en: 'If the email is registered, a temporary password has been sent.', es: 'Si el correo está registrado, se ha enviado una contraseña temporal.' },
  msg_sessao_encerrada:{ pt: 'Sessão encerrada.', en: 'Signed out.', es: 'Sesión cerrada.' },
  msg_sessao_expirada: { pt: 'Sessão expirada. Entre novamente.', en: 'Session expired. Sign in again.', es: 'Sesión expirada. Inicia sesión de nuevo.' },
  saudacao:          { pt: 'Bem-vindo', en: 'Welcome', es: 'Bienvenido' },
  home_sub:          { pt: 'AromaLabTec - Laboratório de Perfumaria Técnica', en: 'AromaLabTec - Technical Perfumery Laboratory', es: 'AromaLabTec - Laboratorio de Perfumería Técnica' },
  at_nova:           { pt: 'Nova fórmula', en: 'New formula', es: 'Nueva fórmula' },
  at_nova_sub:       { pt: 'Criar acorde, essência ou perfume', en: 'Create accord, essence or perfume', es: 'Crear acorde, esencia o perfume' },
  at_minhas:         { pt: 'Minhas fórmulas', en: 'My formulas', es: 'Mis fórmulas' },
  at_minhas_sub:     { pt: 'Listar, editar e compor', en: 'List, edit and compose', es: 'Listar, editar y componer' },
  at_insumos_sub:    { pt: 'Consultar matérias-primas', en: 'Browse raw materials', es: 'Consultar materias primas' },
  at_glos_sub:       { pt: 'Termos da perfumaria técnica', en: 'Technical perfumery terms', es: 'Términos de perfumería técnica' },
  at_forn_sub:       { pt: 'Fabricantes e revendedores', en: 'Manufacturers and resellers', es: 'Fabricantes y revendedores' },
  h_recentes:        { pt: 'Fórmulas recentes', en: 'Recent formulas', es: 'Fórmulas recientes' },
  vazio_recentes:    { pt: 'Crie sua primeira fórmula! 🧪', en: 'Create your first formula! 🧪', es: '¡Crea tu primera fórmula! 🧪' },
  insumos_sub:       { pt: 'Catálogo de matérias-primas (somente consulta)', en: 'Raw materials catalog (read only)', es: 'Catálogo de materias primas (solo consulta)' },
  formulas_sub:      { pt: 'Suas fórmulas e criações aromáticas.', en: 'Your formulas and aromatic creations.', es: 'Tus fórmulas y creaciones aromáticas.' },
  ph_busca_insumo:   { pt: '🔎 Buscar por nome, CAS, tipo…', en: '🔎 Search by name, CAS, type…', es: '🔎 Buscar por nombre, CAS, tipo…' },
  opt_todos_tipos:   { pt: 'Todos os tipos', en: 'All types', es: 'Todos los tipos' },
  th_nome:           { pt: 'Nome', en: 'Name', es: 'Nombre' },
  th_tipo:           { pt: 'Tipo', en: 'Type', es: 'Tipo' },
  th_composicao:     { pt: 'Composição', en: 'Composition', es: 'Composición' },
  th_extrato:        { pt: 'Extrato', en: 'Extract', es: 'Extracto' },
  th_permitido:      { pt: 'Permitido', en: 'Allowed', es: 'Permitido' },
  vazio_insumos:     { pt: 'Nenhum insumo encontrado.', en: 'No ingredients found.', es: 'No se encontraron insumos.' },
  det_nome_tec:      { pt: 'Nome técnico', en: 'Technical name', es: 'Nombre técnico' },
  det_nome_com:      { pt: 'Nome comercial', en: 'Trade name', es: 'Nombre comercial' },
  det_substantividade:{ pt: 'Substantividade', en: 'Substantivity', es: 'Sustantividad' },
  det_extrato_arom:  { pt: 'Extrato aromático', en: 'Aromatic extract', es: 'Extracto aromático' },
  det_limite_perc:   { pt: 'Limite %', en: 'Limit %', es: 'Límite %' },
  det_limite_ppm:    { pt: 'Limite ppm', en: 'Limit ppm', es: 'Límite ppm' },
  det_ref:           { pt: 'Referência (CAS RN)', en: 'Reference (CAS RN)', es: 'Referencia (CAS RN)' },
  det_abrir_ficha:   { pt: 'Abrir ficha do insumo ↗', en: 'Open ingredient datasheet ↗', es: 'Abrir ficha del insumo ↗' },
  btn_nova_formula:  { pt: '＋ Nova fórmula', en: '＋ New formula', es: '＋ Nueva fórmula' },
  ph_busca_formula:  { pt: '🔎 Buscar fórmula…', en: '🔎 Search formula…', es: '🔎 Buscar fórmula…' },
  ph_busca_producao: { pt: '🔎 Buscar produção…', en: '🔎 Search production…', es: '🔎 Buscar producción…' },
  dica_clique:       { pt: '💡 Clique em uma fórmula para abrir seus insumos.', en: '💡 Click a formula to open its ingredients.', es: '💡 Haz clic en una fórmula para abrir sus insumos.' },
  th_perfil:         { pt: 'Perfil', en: 'Profile', es: 'Perfil' },
  th_diluicao:       { pt: 'Diluição %', en: 'Dilution %', es: 'Dilución %' },
  th_volume:         { pt: 'Volume ml', en: 'Volume ml', es: 'Volumen ml' },
  vazio_formulas:    { pt: 'Nenhuma fórmula. Que tal criar a primeira?', en: 'No formulas yet. How about creating the first one?', es: 'Ninguna fórmula. ¿Qué tal crear la primera?' },
  tip_abrir:         { pt: 'Abrir insumos', en: 'Open ingredients', es: 'Abrir insumos' },
  tip_duplicar:      { pt: 'Duplicar fórmula', en: 'Duplicate formula', es: 'Duplicar fórmula' },
  tip_excluir:       { pt: 'Excluir', en: 'Delete', es: 'Eliminar' },
  sufixo_copia:      { pt: '(cópia)', en: '(copy)', es: '(copia)' },
  msg_duplicada:     { pt: 'Fórmula duplicada!', en: 'Formula duplicated!', es: '¡Fórmula duplicada!' },
  dup_titulo:        { pt: 'Duplicar fórmula', en: 'Duplicate formula', es: 'Duplicar fórmula' },
  dup_msg_a:         { pt: 'Deseja criar uma cópia da fórmula', en: 'Do you want to create a copy of the formula', es: '¿Deseas crear una copia de la fórmula' },
  btn_duplicar_conf: { pt: 'Duplicar', en: 'Duplicate', es: 'Duplicar' },
  excluir_titulo:    { pt: 'Excluir fórmula', en: 'Delete formula', es: 'Eliminar fórmula' },
  excluir_msg_a:     { pt: 'Excluir', en: 'Delete', es: 'Eliminar' },
  excluir_msg_b:     { pt: 'e todos os seus insumos?', en: 'and all its ingredients?', es: 'y todos sus insumos?' },
  nao_desfazer:      { pt: 'Esta ação não pode ser desfeita.', en: 'This action cannot be undone.', es: 'Esta acción no se puede deshacer.' },
  btn_excluir:       { pt: 'Excluir', en: 'Delete', es: 'Eliminar' },
  msg_excluida:      { pt: 'Fórmula excluída.', en: 'Formula deleted.', es: 'Fórmula eliminada.' },
  at_nova_titulo:    { pt: 'Nova fórmula', en: 'New formula', es: 'Nueva fórmula' },
  editar_pfx:        { pt: 'Editar: ', en: 'Edit: ', es: 'Editar: ' },
  btn_voltar:        { pt: '← Voltar à lista', en: '← Back to list', es: '← Volver a la lista' },
  lbl_nome_formula:  { pt: 'Nome da fórmula *', en: 'Formula name *', es: 'Nombre de la fórmula *' },
  lbl_tipo:          { pt: 'Tipo', en: 'Type', es: 'Tipo' },
  lbl_desc:          { pt: 'Descrição', en: 'Description', es: 'Descripción' },
  ph_desc:           { pt: 'Notas, inspiração, observações…', en: 'Notes, inspiration, remarks…', es: 'Notas, inspiración, observaciones…' },
  btn_salvar_formula:{ pt: '💾 Salvar fórmula', en: '💾 Save formula', es: '💾 Guardar fórmula' },
  h_insumos_formula: { pt: 'Insumos da fórmula', en: 'Formula ingredients', es: 'Insumos de la fórmula' },
  btn_add_insumo:    { pt: '＋ Adicionar insumo', en: '＋ Add ingredient', es: '＋ Añadir insumo' },
  th_insumo:         { pt: 'Insumo', en: 'Ingredient', es: 'Insumo' },
  th_unid:           { pt: 'Unid.', en: 'Unit', es: 'Unid.' },
  th_qtde:           { pt: 'Qtde', en: 'Qty', es: 'Cant.' },
  th_qtde_ml:        { pt: 'Qtde ml', en: 'Qty ml', es: 'Cant. ml' },
  vazio_itens:       { pt: 'Sem insumos. Adicione o primeiro.', en: 'No ingredients yet. Add the first one.', es: 'Sin insumos. Añade el primero.' },
  alerta_limite:     { pt: '⚠ limite', en: '⚠ limit', es: '⚠ límite' },
  tip_alerta_limite: { pt: 'Acima do limite permitido do insumo', en: 'Above the allowed limit for this ingredient', es: 'Por encima del límite permitido del insumo' },
  modal_add_insumo:  { pt: 'Adicionar insumo à fórmula', en: 'Add ingredient to formula', es: 'Añadir insumo a la fórmula' },
  modal_edit_insumo: { pt: 'Editar insumo da fórmula', en: 'Edit formula ingredient', es: 'Editar insumo de la fórmula' },
  lbl_insumo:        { pt: 'Insumo *', en: 'Ingredient *', es: 'Insumo *' },
  opt_selecione:     { pt: '- selecione -', en: '- select -', es: '- selecciona -' },
  lbl_diluicao_req:  { pt: 'Diluição % *', en: 'Dilution % *', es: 'Dilución % *' },
  lbl_unidade_req:   { pt: 'Unidade *', en: 'Unit *', es: 'Unidad *' },
  lbl_qtde_req:      { pt: 'Quantidade *', en: 'Quantity *', es: 'Cantidad *' },
  lbl_limites:       { pt: 'Limites', en: 'Limits', es: 'Límites' },
  msg_salve_antes:   { pt: 'Salve a fórmula antes de adicionar insumos.', en: 'Save the formula before adding ingredients.', es: 'Guarda la fórmula antes de añadir insumos.' },
  msg_escolha_insumo:{ pt: 'Escolha um insumo.', en: 'Choose an ingredient.', es: 'Elige un insumo.' },
  msg_insumo_salvo:  { pt: 'Insumo salvo. Totais recalculados.', en: 'Ingredient saved. Totals recalculated.', es: 'Insumo guardado. Totales recalculados.' },
  msg_insumo_removido:{ pt: 'Insumo removido.', en: 'Ingredient removed.', es: 'Insumo eliminado.' },
  exc_insumo_titulo: { pt: 'Excluir insumo', en: 'Delete ingredient', es: 'Eliminar insumo' },
  exc_insumo_msg:    { pt: 'Deseja realmente excluir o insumo', en: 'Do you really want to delete the ingredient', es: '¿Realmente deseas eliminar el insumo' },
  lbl_total:         { pt: 'Total', en: 'Total', es: 'Total' },
  msg_nome_obrigatorio:{ pt: 'O nome da fórmula é obrigatório.', en: 'Formula name is required.', es: 'El nombre de la fórmula es obligatorio.' },
  msg_formula_salva: { pt: 'Fórmula salva!', en: 'Formula saved!', es: '¡Fórmula guardada!' },
  glossario_sub:     { pt: 'Termos da perfumaria técnica', en: 'Technical perfumery terms', es: 'Términos de perfumería técnica' },
  ph_busca_termo:    { pt: '🔎 Buscar termo…', en: '🔎 Search term…', es: '🔎 Buscar término…' },
  vazio_termos:      { pt: 'Nenhum termo encontrado.', en: 'No terms found.', es: 'No se encontraron términos.' },
  producao_sub:      { pt: 'Agenda de produção das suas fórmulas', en: 'Production schedule of your formulas', es: 'Agenda de producción de tus fórmulas' },
  btn_nova_producao: { pt: '＋ Nova produção', en: '＋ New production', es: '＋ Nueva producción' },
  th_data:           { pt: 'Data', en: 'Date', es: 'Fecha' },
  th_formula:        { pt: 'Fórmula', en: 'Formula', es: 'Fórmula' },
  th_nota:           { pt: 'Nota', en: 'Rating', es: 'Nota' },
  th_obs:            { pt: 'Observações', en: 'Notes', es: 'Observaciones' },
  th_perc_diluicao:  { pt: '% Dil.', en: 'Dil. %', es: '% Dil.' },
  th_vol_ml:         { pt: 'Vol. ml', en: 'Vol. ml', es: 'Vol. ml' },
  vazio_producao:    { pt: 'Nenhuma produção agendada. Registre a primeira!', en: 'No production scheduled. Log the first one!', es: '¡Ninguna producción agendada. Registra la primera!' },
  modal_add_producao:{ pt: 'Nova produção', en: 'New production', es: 'Nueva producción' },
  modal_edit_producao:{ pt: 'Editar produção', en: 'Edit production', es: 'Editar producción' },
  lbl_formula_req:   { pt: 'Fórmula *', en: 'Formula *', es: 'Fórmula *' },
  lbl_data_req:      { pt: 'Data da produção *', en: 'Production date *', es: 'Fecha de producción *' },
  lbl_nota:          { pt: 'Nota (1 a 5 estrelas)', en: 'Rating (1 to 5 stars)', es: 'Nota (1 a 5 estrellas)' },
  opt_sem_nota:      { pt: '- sem nota -', en: '- no rating -', es: '- sin nota -' },
  lbl_obs:           { pt: 'Observações', en: 'Notes', es: 'Observaciones' },
  ph_obs:            { pt: 'Rendimento, ajustes, percepções…', en: 'Yield, adjustments, impressions…', es: 'Rendimiento, ajustes, percepciones…' },
  msg_escolha_formula:{ pt: 'Escolha uma fórmula.', en: 'Choose a formula.', es: 'Elige una fórmula.' },
  msg_informe_data:  { pt: 'Informe a data da produção.', en: 'Enter the production date.', es: 'Indica la fecha de producción.' },
  msg_producao_salva:{ pt: 'Produção salva!', en: 'Production saved!', es: '¡Producción guardada!' },
  msg_producao_excluida:{ pt: 'Produção excluída.', en: 'Production deleted.', es: 'Producción eliminada.' },
  exc_producao_titulo:{ pt: 'Excluir produção', en: 'Delete production', es: 'Eliminar producción' },
  exc_producao_msg:  { pt: 'Deseja realmente excluir a produção de', en: 'Do you really want to delete the production of', es: '¿Realmente deseas eliminar la producción de' },
  lbl_perc_diluicao: { pt: '% Diluição', en: 'Dilution %', es: '% Dilución' },
  lbl_vol_ml:        { pt: 'Volume produzido (ml)', en: 'Volume produced (ml)', es: 'Volumen producido (ml)' },
  lbl_perfil_calc:   { pt: 'Perfil (calculado)', en: 'Profile (calculated)', es: 'Perfil (calculado)' },
  lbl_diluidor1:     { pt: 'Diluidor 1', en: 'Diluent 1', es: 'Diluyente 1' },
  lbl_diluidor2:     { pt: 'Diluidor 2', en: 'Diluent 2', es: 'Diluyente 2' },
  lbl_diluidor3:     { pt: 'Diluidor 3', en: 'Diluent 3', es: 'Diluyente 3' },
  opt_nenhum:        { pt: '- nenhum -', en: '- none -', es: '- ninguno -' },
  nav_fornecedores:  { pt: 'Fornecedores', en: 'Suppliers', es: 'Proveedores' },
  fornecedores_sub:  { pt: 'Seus fornecedores e fabricantes', en: 'Your suppliers and manufacturers', es: 'Tus proveedores y fabricantes' },
  btn_novo_fornecedor:{ pt: '＋ Novo fornecedor', en: '＋ New supplier', es: '＋ Nuevo proveedor' },
  ph_busca_fornecedor:{ pt: '🔎 Buscar fornecedor…', en: '🔎 Search supplier…', es: '🔎 Buscar proveedor…' },
  th_forn_fabricante:{ pt: 'Fabricante', en: 'Manufacturer', es: 'Fabricante' },
  th_forn_telefone:  { pt: 'Telefone', en: 'Phone', es: 'Teléfono' },
  th_forn_endereco:  { pt: 'Endereço', en: 'Address', es: 'Dirección' },
  th_forn_url:       { pt: 'Site', en: 'Website', es: 'Sitio web' },
  vazio_fornecedores:{ pt: 'Nenhum fornecedor cadastrado.', en: 'No suppliers registered.', es: 'Ningún proveedor registrado.' },
  modal_add_fornecedor:{ pt: 'Novo fornecedor', en: 'New supplier', es: 'Nuevo proveedor' },
  modal_edit_fornecedor:{ pt: 'Editar fornecedor', en: 'Edit supplier', es: 'Editar proveedor' },
  lbl_forn_nome_req: { pt: 'Nome *', en: 'Name *', es: 'Nombre *' },
  lbl_forn_tipo_req: { pt: 'Tipo *', en: 'Type *', es: 'Tipo *' },
  lbl_forn_fabricante:{ pt: 'Fabricante (se revendedor)', en: 'Manufacturer (if reseller)', es: 'Fabricante (si revendedor)' },
  lbl_forn_telefone: { pt: 'Telefone', en: 'Phone', es: 'Teléfono' },
  lbl_forn_endereco: { pt: 'Endereço', en: 'Address', es: 'Dirección' },
  lbl_forn_url:      { pt: 'Site', en: 'Website', es: 'Sitio web' },
  lbl_forn_nota:     { pt: 'Nota (1 a 5)', en: 'Rating (1 to 5)', es: 'Nota (1 a 5)' },
  opt_fabricante:    { pt: 'Fabricante', en: 'Manufacturer', es: 'Fabricante' },
  opt_revendedor:    { pt: 'Revendedor', en: 'Reseller', es: 'Revendedor' },
  msg_fornecedor_salvo:{ pt: 'Fornecedor salvo!', en: 'Supplier saved!', es: '¡Proveedor guardado!' },
  msg_fornecedor_excluido:{ pt: 'Fornecedor excluído.', en: 'Supplier deleted.', es: 'Proveedor eliminado.' },
  exc_fornecedor_titulo:{ pt: 'Excluir fornecedor', en: 'Delete supplier', es: 'Eliminar proveedor' },
  exc_fornecedor_msg:{ pt: 'Deseja realmente excluir', en: 'Do you really want to delete', es: '¿Realmente deseas eliminar' },
  msg_nome_forn_obrigatorio:{ pt: 'O nome do fornecedor é obrigatório.', en: 'Supplier name is required.', es: 'El nombre del proveedor es obligatorio.' },
  msg_tipo_forn_obrigatorio:{ pt: 'Selecione o tipo.', en: 'Select the type.', es: 'Selecciona el tipo.' },
  perfil_titulo:     { pt: 'Meu perfil', en: 'My profile', es: 'Mi perfil' },
  btn_foto:          { pt: '📷 Alterar foto', en: '📷 Change photo', es: '📷 Cambiar foto' },
  h_dados:           { pt: 'Dados pessoais', en: 'Personal details', es: 'Datos personales' },
  h_foto:            { pt: 'Foto de perfil', en: 'Profile photo', es: 'Foto de perfil' },
  lbl_nome_s:        { pt: 'Nome', en: 'Name', es: 'Nombre' },
  lbl_senha_email:   { pt: 'Senha atual (obrigatória para trocar o e-mail)', en: 'Current password (required to change email)', es: 'Contraseña actual (obligatoria para cambiar el correo)' },
  lbl_idioma:        { pt: 'Idioma', en: 'Language', es: 'Idioma' },
  btn_salvar_dados:  { pt: '💾 Salvar dados', en: '💾 Save details', es: '💾 Guardar datos' },
  h_trocar_senha:    { pt: 'Trocar senha', en: 'Change password', es: 'Cambiar contraseña' },
  lbl_senha_atual:   { pt: 'Senha atual', en: 'Current password', es: 'Contraseña actual' },
  lbl_senha_nova:    { pt: 'Nova senha (mín. 6 caracteres)', en: 'New password (min. 6 characters)', es: 'Nueva contraseña (mín. 6 caracteres)' },
  btn_alterar_senha: { pt: '🔒 Alterar senha', en: '🔒 Change password', es: '🔒 Cambiar contraseña' },
  btn_sair:          { pt: '⏻ Sair da conta', en: '⏻ Sign out', es: '⏻ Cerrar sesión' },
  validade_pfx:      { pt: 'Credenciais válidas até ', en: 'Credentials valid until ', es: 'Credenciales válidas hasta ' },
  validade_sfx:      { pt: ' (renovadas a cada troca de senha).', en: ' (renewed on every password change).', es: ' (se renuevan con cada cambio de contraseña).' },
  msg_perfil_ok:     { pt: 'Perfil atualizado!', en: 'Profile updated!', es: '¡Perfil actualizado!' },
  msg_senha_ok:      { pt: 'Senha alterada com sucesso!', en: 'Password changed successfully!', es: '¡Contraseña cambiada con éxito!' },
  msg_preencha_senhas:{ pt: 'Preencha a senha atual e a nova.', en: 'Fill in the current and new password.', es: 'Completa la contraseña actual y la nueva.' },
  msg_foto_grande:   { pt: 'Imagem muito grande.', en: 'Image too large.', es: 'Imagen demasiado grande.' },
  msg_foto_invalida: { pt: 'Não foi possível ler essa imagem.', en: 'Could not read this image.', es: 'No se pudo leer esta imagen.' },
  msg_foto_ok:       { pt: 'Foto atualizada!', en: 'Photo updated!', es: '¡Foto actualizada!' },
  lbl_tema:          { pt: 'Tema de cores', en: 'Color theme', es: 'Tema de colores' },
  tema_1:            { pt: 'Âmbar - Perfumaria', en: 'Amber - Perfumery', es: 'Ámbar - Perfumería' },
  tema_2:            { pt: 'Dark mode', en: 'Dark mode', es: 'Modo oscuro' },
  tema_3:            { pt: 'Light mode', en: 'Light mode', es: 'Modo claro' },
  msg_tema_salvo:    { pt: 'Tema aplicado!', en: 'Theme applied!', es: '¡Tema aplicado!' },
  menu_configuracoes:{ pt: 'Configurações', en: 'Settings', es: 'Configuración' },
  menu_seguranca:    { pt: 'Segurança', en: 'Security', es: 'Seguridad' },
  th_desc:           { pt: 'Descrição', en: 'Description', es: 'Descripción' },
  det_desc:          { pt: 'Descrição aromática', en: 'Aromatic description', es: 'Descripción aromática' },
  hint_senha:        { pt: 'Mín. 8 caracteres, letra maiúscula, minúscula e número.', en: 'Min. 8 characters, uppercase, lowercase and number.', es: 'Mín. 8 caracteres, mayúscula, minúscula y número.' },
  lbl_senha_req:     { pt: 'Senha *', en: 'Password *', es: 'Contraseña *' },
  lbl_senha_nova:    { pt: 'Nova senha', en: 'New password', es: 'Nueva contraseña' },
  pub_hero_sub:      { pt: 'Seu laboratório pessoal de perfumaria técnica', en: 'Your personal technical perfumery lab', es: 'Tu laboratorio personal de perfumería técnica' },
  pub_beneficio_1:   { pt: 'Consulte a biblioteca de materiais, fórmulas e fragrâncias de todo o mundo', en: 'Browse the library of materials, formulas and fragrances from around the world', es: 'Consulta la biblioteca de materiales, fórmulas y fragancias de todo el mundo' },
  pub_beneficio_2:   { pt: 'Crie fórmulas personalizadas, com motor de cálculo detalhado e preciso', en: 'Create custom formulas with a detailed and precise calculation engine', es: 'Crea fórmulas personalizadas, con motor de cálculo detallado y preciso' },
  pub_beneficio_3:   { pt: 'Controle a produção de suas criações', en: 'Track the production of your creations', es: 'Controla la producción de tus creaciones' },
  pub_beneficio_4:   { pt: 'Gerencie fornecedores e seu inventário de produtos', en: 'Manage suppliers and your product inventory', es: 'Gestiona proveedores y tu inventario de productos' },
  pub_comecar:       { pt: 'Começar gratuitamente', en: 'Get started for free', es: 'Empezar gratis' },
  pub_explorar:      { pt: 'Explorar insumos', en: 'Explore ingredients', es: 'Explorar insumos' },
  pub_explorar_formulas: { pt: 'Explorar fórmulas', en: 'Explore formulas', es: 'Explorar fórmulas' },
  pub_catalogo_desc: { pt: 'Explore nossa biblioteca de matérias-primas aromáticas.', en: 'Explore our aromatic raw materials library.', es: 'Explora nuestra biblioteca de materias primas aromáticas.' },
  pub_formulas_desc: { pt: 'Biblioteca de fórmulas públicas -consulte composições prontas.', en: 'Public formula library - browse ready-made compositions.', es: 'Biblioteca de fórmulas públicas -consulta composiciones listas.' },
  pub_hint_hover:    { pt: 'Passe o mouse sobre um insumo para ver os detalhes', en: 'Hover over an ingredient to see details', es: 'Pasa el cursor sobre un insumo para ver detalles' },
  pub_hint_click_formula: { pt: 'Clique em uma fórmula para ver a composição', en: 'Click a formula to see its composition', es: 'Haz clic en una fórmula para ver la composición' },
  pub_ver_material:  { pt: 'VER MATERIAL ↗', en: 'VIEW MATERIAL ↗', es: 'VER MATERIAL ↗' },
  pub_mostrar_mais:  { pt: 'Mostrar mais', en: 'Show more', es: 'Mostrar más' },
  nav_formulas_gerais: { pt: 'Fórmulas gerais', en: 'General formulas', es: 'Fórmulas generales' },
  formulas_gerais_sub: { pt: 'Biblioteca pública de fórmulas -somente consulta', en: 'Public formula library - read only', es: 'Biblioteca pública de fórmulas -solo consulta' }
};

const TRAD_ERROS = {
  'Informe seu nome.':                          { en: 'Enter your name.', es: 'Indica tu nombre.' },
  'E-mail inválido.':                           { en: 'Invalid email.', es: 'Correo electrónico inválido.' },
  'A senha deve ter pelo menos 8 caracteres.':  { en: 'Password must be at least 8 characters.', es: 'La contraseña debe tener al menos 8 caracteres.' },
  'A senha deve conter pelo menos uma letra maiúscula.': { en: 'Password must contain at least one uppercase letter.', es: 'La contraseña debe tener al menos una mayúscula.' },
  'A senha deve conter pelo menos uma letra minúscula.': { en: 'Password must contain at least one lowercase letter.', es: 'La contraseña debe tener al menos una minúscula.' },
  'A senha deve conter pelo menos um número.':  { en: 'Password must contain at least one number.', es: 'La contraseña debe contener al menos un número.' },
  'Este e-mail já está cadastrado. Use a tela de login.': { en: 'This email is already registered. Use the sign-in screen.', es: 'Este correo ya está registrado. Usa la pantalla de inicio de sesión.' },
  'Código expirado. Refaça o cadastro.':        { en: 'Code expired. Please sign up again.', es: 'Código caducado. Vuelve a registrarte.' },
  'Código incorreto.':                          { en: 'Incorrect code.', es: 'Código incorrecto.' },
  'Usuário ou senha inválidos.':                { en: 'Invalid user or password.', es: 'Usuario o contraseña inválidos.' },
  'Usuário inativo. Contate o administrador.':  { en: 'Inactive user. Contact the administrator.', es: 'Usuario inactivo. Contacta al administrador.' },
  'Suas credenciais expiraram (90 dias). Use "Esqueci minha senha" para renovar.': { en: 'Your credentials expired (90 days). Use "Forgot my password" to renew.', es: 'Tus credenciales caducaron (90 días). Usa "Olvidé mi contraseña" para renovarlas.' },
  'Senha atual incorreta.':                     { en: 'Current password is incorrect.', es: 'La contraseña actual es incorrecta.' },
  'A nova senha deve ter pelo menos 6 caracteres.': { en: 'New password must be at least 6 characters.', es: 'La nueva contraseña debe tener al menos 6 caracteres.' },
  'Para trocar o e-mail, informe sua senha atual corretamente.': { en: 'To change the email, enter your current password correctly.', es: 'Para cambiar el correo, indica tu contraseña actual correctamente.' },
  'Este e-mail já está em uso.':                { en: 'This email is already in use.', es: 'Este correo ya está en uso.' },
  'Novo e-mail inválido.':                      { en: 'New email is invalid.', es: 'El nuevo correo es inválido.' },
  'Nada para atualizar.':                       { en: 'Nothing to update.', es: 'Nada que actualizar.' },
  'Acesso negado a esta fórmula.':              { en: 'Access denied to this formula.', es: 'Acceso denegado a esta fórmula.' },
  'Fórmula não encontrada.':                    { en: 'Formula not found.', es: 'Fórmula no encontrada.' },
  'Insumo não encontrado.':                     { en: 'Ingredient not found.', es: 'Insumo no encontrado.' },
  'Insumo da fórmula não encontrado.':          { en: 'Formula ingredient not found.', es: 'Insumo de la fórmula no encontrado.' },
  'Informe uma quantidade maior que zero.':     { en: 'Enter a quantity greater than zero.', es: 'Indica una cantidad mayor que cero.' },
  'Diluição deve estar entre 0 e 100%.':        { en: 'Dilution must be between 0 and 100%.', es: 'La dilución debe estar entre 0 y 100%.' },
  'Imagem inválida.':                           { en: 'Invalid image.', es: 'Imagen inválida.' },
  'Produção não encontrada.':                   { en: 'Production not found.', es: 'Producción no encontrada.' },
  'Acesso negado a esta produção.':             { en: 'Access denied to this production.', es: 'Acceso denegado a esta producción.' },
  'Informe a data da produção.':                { en: 'Enter the production date.', es: 'Indica la fecha de producción.' },
  'Fornecedor não encontrado.':                  { en: 'Supplier not found.', es: 'Proveedor no encontrado.' },
  'Acesso negado a este fornecedor.':            { en: 'Access denied to this supplier.', es: 'Acceso denegado a este proveedor.' },
  'O nome do fornecedor é obrigatório.':         { en: 'Supplier name is required.', es: 'El nombre del proveedor es obligatorio.' },
  'Selecione o tipo do fornecedor.':             { en: 'Select the supplier type.', es: 'Selecciona el tipo de proveedor.' }
};

function t(chave) {
  const e = I18N[chave];
  if (!e) return chave;
  return e[S.lang] || e.pt || chave;
}

function traduzErro(msg) {
  if (S.lang === 'pt') return msg;
  const e = TRAD_ERROS[msg];
  return (e && e[S.lang]) || msg;
}

function aplicarIdioma() {
  document.documentElement.lang = S.lang === 'pt' ? 'pt-BR' : S.lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    el.placeholder = t(el.dataset.i18nPh);
  });
  if (S.user) atualizarAvatar();
}

function definirIdioma(lang) {
  S.lang = ['pt', 'en', 'es'].indexOf(lang) >= 0 ? lang : 'pt';
  localStorage.setItem('aromalab_lang', S.lang);
  const sel = $('selIdiomaTop');
  if (sel) sel.value = S.lang;
  aplicarIdioma();
}

function trocarIdiomaTop(lang) {
  definirIdioma(lang);
  if (S.user) {
    S.user.user_idioma = S.lang;
    api('user.atualizar', { idioma: S.lang }).catch(function () {});
    mostrarView(S.viewAtual || 'viewHome');
  }
}

// ---------- estado global ----------
const S = {
  token: localStorage.getItem('aromalab_token') || '',
  lang: 'pt',
  user: null,
  insumos: [],
  formulas: [],
  glossario: null,
  producao: [],
  fornecedores: [],
  viewAtual: 'viewHome',
  formulaAtual: null,
  itensFormula: [],
  signupEmail: '',
  insPagina: 1,
  formPagina: 1,
  prodPagina: 1,
  fornPagina: 1,
  dashCarregado: false
};

(function () {
  const salvo = localStorage.getItem('aromalab_lang');
  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  S.lang = ['pt', 'en', 'es'].indexOf(salvo) >= 0 ? salvo
         : (['pt', 'en', 'es'].indexOf(nav) >= 0 ? nav : 'pt');
})();

const AVATAR_PADRAO = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
  '<rect width="100" height="100" fill="#2a1c10"/>' +
  '<circle cx="50" cy="38" r="18" fill="#c98e4a"/>' +
  '<ellipse cx="50" cy="82" rx="30" ry="20" fill="#c98e4a"/></svg>');

// ---------- comunicação com o servidor ----------
/* URL /exec da implantação do Apps Script (Implantar → Gerenciar implantações → copiar URL). */
const APP_URL = 'https://script.google.com/macros/s/AKfycbzUttvI6kZXkUyquJM3UGC-Su4Y1dEKWLme7uC6If741hNOzPRbQ8Hjq9fKx7a_Ivg5/exec';

// Nem GET nem POST via fetch()/XHR recebem Access-Control-Allow-Origin do
// Apps Script (testado - as duas formas são bloqueadas por CORS). A saída é
// JSONP: carregar a resposta como uma tag <script src="...">, que não passa
// pelo bloqueio de CORS (mesmo mecanismo de carregar uma lib de outro domínio).
let _jsonpContador = 0;
function api(acao, payload) {
  return new Promise(function (resolve, reject) {
    const dados = encodeURIComponent(JSON.stringify({ acao: acao, payload: payload || {}, token: S.token }));
    const nomeCb = '_aromalabCb' + (_jsonpContador++);
    const script = document.createElement('script');

    function limpar() {
      delete window[nomeCb];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    window[nomeCb] = function (r) {
      limpar();
      if (r && r.ok) return resolve(r.data);
      const msg = (r && r.erro) || 'Erro desconhecido';
      if (msg === 'SESSAO_INVALIDA') { encerrarSessaoLocal(); return reject(new Error(t('msg_sessao_expirada'))); }
      reject(new Error(traduzErro(msg)));
    };
    script.onerror = function () { limpar(); reject(new Error('Falha de conexão com o servidor.')); };
    script.src = APP_URL + '?data=' + dados + '&callback=' + nomeCb;
    document.body.appendChild(script);
  });
}

// ---------- utilitários de UI ----------
function $(id) { return document.getElementById(id); }
function carregando(on) { $('loading').classList.toggle('hidden', !on); }
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function num(v, casas) {
  const n = Number(v);
  if (isNaN(n)) return '-';
  const loc = S.lang === 'pt' ? 'pt-BR' : (S.lang === 'es' ? 'es-ES' : 'en-US');
  return n.toLocaleString(loc, { minimumFractionDigits: 0, maximumFractionDigits: casas == null ? 2 : casas });
}

let toastTimer = null;
function toast(msg, tipo) {
  const el = $('toast');
  el.textContent = msg;
  el.className = 'show ' + (tipo || 'ok');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.className = ''; }, 3800);
}

function abrirModal(html) {
  $('modalConteudo').innerHTML = html;
  $('modalFundo').classList.remove('hidden');
}
function fecharModal() { $('modalFundo').classList.add('hidden'); }

// Padrão lista+detalhe (Insumos e Fórmulas gerais, público e logado):
// no desktop preenche o painel lateral fixo; no mobile abre como modal (não há espaço pro painel).
function exibirDetalheCatalogo(boxId, htmlCorpo) {
  if (window.matchMedia('(max-width:720px)').matches) {
    abrirModal(htmlCorpo + '<div class="modal-acoes"><button class="btn btn-fantasma" onclick="fecharModal()">' + t('fechar') + '</button></div>');
  } else {
    const box = $(boxId);
    if (box) { box.classList.remove('pub-detalhe-vazio'); box.innerHTML = htmlCorpo; }
  }
}

function renderForcaSenha(idInput, idWrap) {
  const s = $(idInput) ? $(idInput).value : '';
  const wrap = $(idWrap);
  if (!wrap) return;
  const itens = [
    s.length >= 8,
    /[A-Z]/.test(s),
    /[a-z]/.test(s),
    /[0-9]/.test(s)
  ];
  const ok = itens.filter(Boolean).length;
  const classes = ['', 'fraca', 'fraca', 'media', 'forte'];
  wrap.innerHTML = itens.map(function (v) {
    return '<div class="forca-barra ' + (v ? classes[ok] : '') + '"></div>';
  }).join('');
}

function validarSenhaCliente(senha) {
  if (senha.length < 8)       return t('hint_senha');
  if (!/[A-Z]/.test(senha))   return t('hint_senha');
  if (!/[a-z]/.test(senha))   return t('hint_senha');
  if (!/[0-9]/.test(senha))   return t('hint_senha');
  return null;
}

function alternarSenha(idInput, btn) {
  const input = $(idInput);
  const visivel = input.type === 'text';
  input.type = visivel ? 'password' : 'text';
  btn.textContent = visivel ? '👁' : '🙈';
}

/* ===========================================================
 *  TEMA DE CORES
 * =========================================================== */
function aplicarTema(n) {
  const tema = [1, 2, 3].indexOf(Number(n)) >= 0 ? Number(n) : 3;
  if (tema === 1) document.body.removeAttribute('data-tema');
  else document.body.dataset.tema = String(tema);
  document.querySelectorAll('.tema-btn').forEach(function (b) { b.classList.remove('ativo'); });
  const btn = $('temaBtn' + tema);
  if (btn) btn.classList.add('ativo');
}

function selecionarTema(n) {
  aplicarTema(n);
  if (!S.user) return;
  S.user.user_cores = n;
  api('user.atualizar', { cores: n })
    .then(function () { toast(t('msg_tema_salvo')); })
    .catch(function (e) { toast(e.message, 'erro'); });
}

// ---------- navegação ----------
function mostrarAuth(viewId) {
  ['viewLogin', 'viewSignup', 'viewVerify', 'viewForgot'].forEach(function (v) {
    $(v).classList.toggle('hidden', v !== viewId);
  });
}

function mostrarView(viewId) {
  S.viewAtual = viewId;
  document.querySelectorAll('main .view').forEach(function (v) { v.classList.add('hidden'); });
  $(viewId).classList.remove('hidden');
  document.querySelectorAll('nav button').forEach(function (b) {
    b.classList.toggle('ativo', b.dataset.view === viewId);
  });
  window.scrollTo(0, 0);
  if (viewId === 'viewHome')          carregarDashboard();
  if (viewId === 'viewInsumos')       carregarInsumos();
  if (viewId === 'viewFormulas')      carregarFormulas();
  if (viewId === 'viewFormulasGerais') _carregarFormulasGeral(FORM_GERAL, 1);
  if (viewId === 'viewGlossario')     carregarGlossario();
  if (viewId === 'viewProducao')      carregarProducao();
  if (viewId === 'viewFornecedores')  carregarFornecedores();
  if (viewId === 'viewConfiguracoes') preencherPerfil();
  if (viewId === 'viewSeguranca')     preencherSeguranca();
}

function entrarNoApp() {
  if (S.user && S.user.user_idioma) definirIdioma(S.user.user_idioma);
  else aplicarIdioma();
  aplicarTema(S.user ? (S.user.user_cores || 3) : 3);
  $('authShell').classList.add('hidden');
  $('appShell').classList.remove('hidden');
  atualizarAvatar();
  mostrarView('viewHome');
}

function encerrarSessaoLocal() {
  S.token = ''; S.user = null;
  S.formulas = []; S.producao = []; S.fornecedores = []; S.dashCarregado = false;
  localStorage.removeItem('aromalab_token');
  aplicarTema(3);
  $('appShell').classList.add('hidden');
  $('authOverlay').classList.add('hidden');
  $('publicShell').classList.remove('hidden');
  mostrarPublico('publicHome');
  carregando(false);
}

function atualizarAvatar() {
  const url = (S.user && S.user.user_img_url) || AVATAR_PADRAO;
  $('avatarTop').src = url;
  const ag = $('avatarGrande'); if (ag) ag.src = url;
  $('saudacao').textContent = t('saudacao') + (S.user ? ', ' + S.user.user_nome.split(' ')[0] : '') + ' ✦';
}

function toggleMenuAvatar() {
  const m = $('menuAvatar');
  m.classList.toggle('hidden');
}
function fecharMenuAvatar() {
  $('menuAvatar').classList.add('hidden');
}
// fechar menu ao clicar fora
document.addEventListener('click', function (e) {
  const wrap = $('avatarWrap');
  if (wrap && !wrap.contains(e.target)) fecharMenuAvatar();
});

// ---------- inicialização ----------
window.addEventListener('load', function () {
  aplicarTema(3);
  aplicarIdioma();
  $('avatarTop').onerror = function () { this.src = AVATAR_PADRAO; };
  $('avatarGrande').onerror = function () { this.src = AVATAR_PADRAO; };

  // detectar idioma por IP em background
  detectarIdiomaIP();

  if (!S.token) {
    carregando(false);
    $('publicShell').classList.remove('hidden');
    mostrarPublico('publicHome');
    iniciarCarrossel();
    return;
  }
  api('auth.sessao')
    .then(function (user) { S.user = user; carregando(false); entrarNoApp(); })
    .catch(function () { encerrarSessaoLocal(); });
});

/* ===========================================================
 *  AUTENTICAÇÃO
 * =========================================================== */
function acaoLogin() {
  const email = $('loginEmail').value.trim();
  const senha = $('loginSenha').value;
  if (!email || !senha) return toast(t('msg_informe_login'), 'erro');
  carregando(true);
  api('auth.login', { email: email, senha: senha })
    .then(function (r) {
      S.token = r.token; S.user = r.user;
      localStorage.setItem('aromalab_token', r.token);
      carregando(false); entrarNoApp();
      toast(t('msg_bemvindo_volta') + ', ' + r.user.user_nome.split(' ')[0] + '!');
    })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function acaoSignup() {
  const nome = $('suNome').value.trim();
  const email = $('suEmail').value.trim();
  const senha = $('suSenha').value;
  if (!nome || !email || !senha) return toast(t('msg_obrigatorios'), 'erro');
  const erroSenha = validarSenhaCliente(senha);
  if (erroSenha) return toast(erroSenha, 'erro');
  carregando(true);
  api('auth.signup', { nome: nome, email: email, senha: senha, idioma: S.lang })
    .then(function () {
      carregando(false);
      S.signupEmail = email;
      $('verifyEmailLabel').textContent = email;
      mostrarAuth('viewVerify');
      toast(t('msg_codigo_enviado') + ' ' + email);
    })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function acaoVerificar() {
  const token = $('verifyToken').value.trim();
  if (token.length !== 6) return toast(t('msg_digite_codigo'), 'erro');
  carregando(true);
  api('auth.verificar', { email: S.signupEmail, token: token })
    .then(function (r) {
      S.token = r.token; S.user = r.user;
      localStorage.setItem('aromalab_token', r.token);
      carregando(false); entrarNoApp();
      toast(t('msg_conta_criada'));
    })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function acaoEsqueci() {
  const email = $('forgotEmail').value.trim();
  if (!email) return toast(t('msg_informe_email'), 'erro');
  carregando(true);
  api('auth.esqueci', { email: email })
    .then(function () { carregando(false); mostrarAuth('viewLogin'); toast(t('msg_temp_enviada')); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function acaoLogout() {
  carregando(true);
  api('auth.logout').catch(function () {}).then(function () { encerrarSessaoLocal(); toast(t('msg_sessao_encerrada')); });
}

/* ===========================================================
 *  DASHBOARD
 * =========================================================== */
function carregarDashboard() {
  if (S.dashCarregado) return;
  api('dash.stats').then(function (d) {
    S.dashCarregado = true;
    $('qtdFormulas').textContent = d.totalFormulas;
    $('qtdInsumos').textContent = d.totalInsumos;
    $('qtdFornecedores').textContent = d.totalFornecedores;

    $('listaRecentes').innerHTML = d.recentes.length === 0
      ? '<p class="vazio">' + t('vazio_recentes') + '</p>'
      : '<div class="tabela-wrap"><table><tbody>' + d.recentes.map(function (f) {
          return '<tr class="clicavel" onclick="abrirEditorFormula(' + f.form_id + ')"><td>' + esc(f.form_nome) +
                 '</td><td><span class="chip">' + esc(f.form_tip || '-') + '</span></td></tr>';
        }).join('') + '</tbody></table></div>';
  }).catch(function (e) { toast(e.message, 'erro'); });
}

/* ===========================================================
 *  GLOSSÁRIO (consulta)
 * =========================================================== */
function carregarGlossario() {
  if (S.glossario) { renderGlossario(); return; }
  carregando(true);
  api('glossario.listar').then(function (g) {
    if (g.campos.length) {
      const k = g.campos[0].key;
      g.termos.sort(function (a, b) {
        return String(a[k] || '').localeCompare(String(b[k] || ''), 'pt-BR');
      });
    }
    S.glossario = g;
    carregando(false);
    renderGlossario();
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function rotuloGlossario(rotulo) {
  const limpo = String(rotulo).replace(/^glos[_ ]?/i, '').replace(/_/g, ' ').trim().toLowerCase();
  return limpo.charAt(0).toUpperCase() + limpo.slice(1);
}

function renderGlossario() {
  const g = S.glossario;
  if (!g) return;
  const busca = ($('buscaGlossario').value || '').toLowerCase();
  const campos = g.campos;
  const mostrarRotulos = campos.length > 2;
  const termos = g.termos.filter(function (te) {
    if (!busca) return true;
    return campos.map(function (c) { return te[c.key]; }).join(' ').toLowerCase().indexOf(busca) >= 0;
  });
  $('listaGlossario').innerHTML = (campos.length === 0 || termos.length === 0)
    ? '<p class="vazio" style="grid-column:1/-1"><span class="ico">📖</span>' + t('vazio_termos') + '</p>'
    : termos.map(function (te) {
        const titulo = te[campos[0].key];
        const corpo = campos.slice(1)
          .filter(function (c) { return te[c.key] !== '' && te[c.key] != null; })
          .map(function (c) {
            return '<div class="glos-campo">' +
                   (mostrarRotulos ? '<div class="r">' + esc(rotuloGlossario(c.rotulo)) + '</div>' : '') +
                   '<div class="v">' + esc(te[c.key]) + '</div></div>';
          }).join('');
        return '<div class="glos-card"><h4>' + esc(titulo) + '</h4>' + corpo + '</div>';
      }).join('');
}

/* ===========================================================
 *  INSUMOS (catálogo, consulta)
 * =========================================================== */
function carregarInsumos() {
  if (S.insumos.length) { renderInsumos(); return; }
  carregando(true);
  api('insumos.listar').then(function (lista) {
    S.insumos = lista; carregando(false); renderInsumos();
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function fmtPerc(v) {
  return (v === '' || v == null || isNaN(Number(v))) ? '-' : num(v) + '%';
}

function renderInsumos() {
  const busca = ($('buscaInsumo') && $('buscaInsumo').value || '').toLowerCase();
  const tipo  = $('filtroTipoInsumo') ? $('filtroTipoInsumo').value : '';
  const porPag = parseInt(($('insPorPagina') && $('insPorPagina').value) || '15', 10);

  const linhas = S.insumos.filter(function (i) {
    if (tipo && i.ins_tip !== tipo) return false;
    if (!busca) return true;
    return [i.ins_nome, i.ins_nome_tec, i.ins_nome_com, i.ins_cas, i.ins_tip, i.ins_composicao, i.ins_desc]
      .join(' ').toLowerCase().indexOf(busca) >= 0;
  });

  const totalPags = Math.ceil(linhas.length / porPag) || 1;
  if (S.insPagina > totalPags) S.insPagina = 1;
  const inicio = (S.insPagina - 1) * porPag;
  const pagina = linhas.slice(inicio, inicio + porPag);

  $('listaInsumos').innerHTML = pagina.length === 0
    ? '<p class="vazio"><span class="ico">🌿</span>' + t('vazio_insumos') + '</p>'
    : pagina.map(function (i) {
        var tipoTxt = i.ins_tip || '';
        return '<div class="pub-ins-item" onmouseenter="detalheInsumo(' + i.ins_id + ')" onclick="detalheInsumo(' + i.ins_id + ')">' +
          (i.ins_img_url
            ? '<img class="pub-ins-thumb" src="' + esc(i.ins_img_url) + '" alt="" onerror="this.outerHTML=\'<div class=&quot;pub-ins-thumb-placeholder&quot;>🌿</div>\'">'
            : '<div class="pub-ins-thumb-placeholder">🌿</div>') +
          '<div class="pub-ins-info">' +
            '<div class="pub-ins-linha-topo">' +
              '<div class="pub-ins-nome">' + esc(i.ins_nome) + '</div>' +
              (tipoTxt ? '<span class="pub-ins-flag">' + esc(tipoTxt) + '</span>' : '') +
            '</div>' +
            '<div class="pub-ins-sub">' + esc(i.ins_cas || '') + '</div>' +
            '<div class="pub-ins-desc">' + esc((i.ins_desc || i.ins_composicao || '').slice(0, 100)) + '</div>' +
          '</div>' +
        '</div>';
      }).join('');

  renderPaginacaoInterna('insPaginacao', S.insPagina, totalPags, linhas.length, t('nav_insumos').toLowerCase(), 'mudarPagIns');
}

function mudarPagIns(p) { S.insPagina = p; renderInsumos(); }

// ---------- paginação interna genérica (insumos, fórmulas, produção, fornecedores) ----------
function renderPaginacaoInterna(containerId, pagina, totalPags, totalItens, labelUnidade, mudarFn, labelUnidadeSing) {
  const pag = $(containerId);
  if (!pag) return;
  var h = '';
  var ini = Math.max(1, pagina - 2), fim = Math.min(totalPags, ini + 4);
  if (totalPags > 1) {
    h += '<button onclick="' + mudarFn + '(1)" ' + (pagina<=1?'disabled':'') + '>&laquo;</button>';
    h += '<button onclick="' + mudarFn + '(' + (pagina-1) + ')" ' + (pagina<=1?'disabled':'') + '>&lsaquo;</button>';
    for (var p = ini; p <= fim; p++) {
      h += '<button class="' + (p===pagina?'ativo':'') + '" onclick="' + mudarFn + '(' + p + ')">' + p + '</button>';
    }
    h += '<button onclick="' + mudarFn + '(' + (pagina+1) + ')" ' + (pagina>=totalPags?'disabled':'') + '>&rsaquo;</button>';
    h += '<button onclick="' + mudarFn + '(' + totalPags + ')" ' + (pagina>=totalPags?'disabled':'') + '>&raquo;</button>';
  }
  var label = (totalItens === 1 && labelUnidadeSing) ? labelUnidadeSing : labelUnidade;
  h += '<span class="pag-info">' + totalItens + ' ' + label + '</span>';
  pag.innerHTML = h;
}

function chipSimNao(v) {
  const sim = String(v || '').toUpperCase().indexOf('S') === 0;
  return '<span class="chip ' + (sim ? 'ok' : 'nao') + '">' + (sim ? t('sim') : t('nao')) + '</span>';
}

function detalheInsumo(insId) {
  const i = S.insumos.filter(function (x) { return String(x.ins_id) === String(insId); })[0];
  if (!i) return;

  document.querySelectorAll('#listaInsumos .pub-ins-item').forEach(function (el) { el.classList.remove('selecionado'); });
  document.querySelectorAll('#listaInsumos .pub-ins-item').forEach(function (el) {
    if (el.getAttribute('onclick') && el.getAttribute('onclick').indexOf('(' + insId + ')') >= 0) el.classList.add('selecionado');
  });

  var urlRef = i.ins_url || (i.ins_cas ? 'https://pubchem.ncbi.nlm.nih.gov/#query=' + encodeURIComponent(i.ins_cas) : '');
  var html =
    '<div class="pub-detalhe-corpo">' +
      '<div class="d-nome">' + esc(i.ins_nome) + '</div>' +
      '<div class="pub-detalhe-topo">' +
        (i.ins_img_url
          ? '<img class="pub-detalhe-img-sq" src="' + esc(i.ins_img_url) + '" onerror="this.style.display=\'none\'">'
          : '') +
        '<div class="pub-detalhe-meta">' +
          (i.ins_cas ? '<div><div class="d-rotulo">CAS</div><div class="d-valor">' + esc(i.ins_cas) + '</div></div>' : '') +
          '<div><div class="d-rotulo">' + t('th_tipo') + '</div><div class="d-valor">' + esc(i.ins_tip || '-') + '</div></div>' +
          (urlRef ? '<div><div class="d-rotulo">' + t('det_ref') + '</div><div class="d-valor"><a href="' + esc(urlRef) + '" target="_blank" rel="noopener">' + t('det_abrir_ficha') + '</a></div></div>' : '') +
        '</div>' +
      '</div>' +
      (i.ins_desc ? '<div class="pub-detalhe-desc-bloco"><div class="d-rotulo">' + t('det_desc') + '</div><div class="pub-detalhe-desc-txt">' + esc(i.ins_desc) + '</div></div>' : '') +
      '<div class="d-grid">' +
        '<div><div class="d-rotulo">' + t('th_composicao') + '</div><div class="d-valor">' + esc(i.ins_composicao || '-') + '</div></div>' +
        '<div><div class="d-rotulo">' + t('det_substantividade') + '</div><div class="d-valor">' + esc(i.ins_substantividade || '-') + '</div></div>' +
        '<div><div class="d-rotulo">' + t('det_extrato_arom') + '</div><div class="d-valor">' + (String(i.ins_extrato || '').toUpperCase().indexOf('S') === 0 ? t('sim') : t('nao')) + '</div></div>' +
        '<div><div class="d-rotulo">' + t('th_permitido') + '</div><div class="d-valor">' + (String(i.ins_permitido || '').toUpperCase().indexOf('S') === 0 ? t('sim') : t('nao')) + '</div></div>' +
        '<div><div class="d-rotulo">' + t('det_limite_perc') + '</div><div class="d-valor">' + fmtPerc(i.ins_limite_perc) + '</div></div>' +
        '<div><div class="d-rotulo">' + t('det_limite_ppm') + '</div><div class="d-valor">' + num(i.ins_limite_ppm) + '</div></div>' +
      '</div>' +
    '</div>';
  exibirDetalheCatalogo('insDetalheConteudo', html);
}

function det(rotulo, valor) {
  return '<div class="detalhe-item"><div class="r">' + esc(rotulo) + '</div><div class="v">' + esc(valor || '-') + '</div></div>';
}

/* ===========================================================
 *  FÓRMULAS — listagem
 * =========================================================== */
function carregarFormulas() {
  if (S.formulas.length) { renderFormulas(); return; }
  carregando(true);
  api('formulas.listar').then(function (lista) {
    S.formulas = lista; carregando(false); renderFormulas();
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function renderFormulas() {
  const busca = ($('buscaFormula').value || '').toLowerCase();
  const tipo = $('filtroTipoFormula').value;
  const porPag = parseInt(($('formPorPagina') && $('formPorPagina').value) || '15', 10);
  const linhas = S.formulas.filter(function (f) {
    if (tipo && f.form_tip !== tipo) return false;
    if (!busca) return true;
    return [f.form_nome, f.form_desc].join(' ').toLowerCase().indexOf(busca) >= 0;
  });

  const totalPags = Math.ceil(linhas.length / porPag) || 1;
  if (S.formPagina > totalPags) S.formPagina = 1;
  const inicio = (S.formPagina - 1) * porPag;
  const pagina = linhas.slice(inicio, inicio + porPag);

  $('tbodyFormulas').innerHTML = pagina.length === 0
    ? '<tr><td colspan="4" class="vazio"><span class="ico">🧪</span>' + t('vazio_formulas') + '</td></tr>'
    : pagina.map(function (f) {
        return '<tr class="clicavel" onclick="abrirEditorFormula(' + f.form_id + ')">' +
          '<td><b>' + esc(f.form_nome) + '</b></td>' +
          '<td><span class="chip">' + esc(f.form_tip || '-') + '</span></td>' +
          '<td>' + esc(String(f.form_desc || '-').slice(0, 90)) + '</td>' +
          '<td style="text-align:right;white-space:nowrap">' +
          '<button class="btn btn-fantasma btn-mini" title="' + t('tip_abrir') + '" onclick="event.stopPropagation();abrirEditorFormula(' + f.form_id + ')">🌿</button> ' +
          '<button class="btn btn-fantasma btn-mini" title="' + t('tip_duplicar') + '" onclick="event.stopPropagation();duplicarFormula(' + f.form_id + ')">📄</button> ' +
          '<button class="btn btn-perigo btn-mini" title="' + t('tip_excluir') + '" onclick="event.stopPropagation();confirmarExclusaoFormula(' + f.form_id + ')">🗑</button></td></tr>';
      }).join('');

  renderPaginacaoInterna('formPaginacao', S.formPagina, totalPags, linhas.length, t('nav_formulas').toLowerCase(), 'mudarPagForm');
}

function mudarPagForm(p) { S.formPagina = p; renderFormulas(); }

function duplicarFormula(formId) {
  const f = S.formulas.filter(function (x) { return String(x.form_id) === String(formId); })[0];
  abrirModal(
    '<h3>' + t('dup_titulo') + '</h3>' +
    '<p>' + t('dup_msg_a') + ' <b style="color:var(--gold)">' + esc(f ? f.form_nome : '') + '</b>?</p>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-acao" onclick="executarDuplicacao(' + formId + ')">' + t('btn_duplicar_conf') + '</button></div>'
  );
}

function executarDuplicacao(formId) {
  fecharModal(); carregando(true);
  api('formulas.duplicar', { form_id: formId, sufixo: t('sufixo_copia') })
    .then(function () { carregando(false); toast(t('msg_duplicada')); S.formulas = []; S.dashCarregado = false; carregarFormulas(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function confirmarExclusaoFormula(formId) {
  const f = S.formulas.filter(function (x) { return String(x.form_id) === String(formId); })[0];
  abrirModal(
    '<h3>' + t('excluir_titulo') + '</h3>' +
    '<p>' + t('excluir_msg_a') + ' <b style="color:var(--gold)">' + esc(f ? f.form_nome : '') + '</b> ' + t('excluir_msg_b') + '<br>' +
    '<span class="nota">' + t('nao_desfazer') + '</span></p>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-perigo" onclick="excluirFormula(' + formId + ')">' + t('btn_excluir') + '</button></div>'
  );
}

function excluirFormula(formId) {
  fecharModal(); carregando(true);
  api('formulas.excluir', { form_id: formId })
    .then(function () { carregando(false); toast(t('msg_excluida')); S.formulas = []; S.dashCarregado = false; carregarFormulas(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

/* ===========================================================
 *  EDITOR DE FÓRMULA (mestre-detalhe)
 * =========================================================== */
function abrirNovaFormula() {
  S.formulaAtual = null; S.itensFormula = [];
  $('tituloFormulaEdit').textContent = t('at_nova_titulo');
  $('feNome').value = ''; $('feTip').value = ''; $('feDesc').value = '';
  $('painelItensFormula').classList.add('hidden');
  mostrarView('viewFormulaEdit');
}

function abrirEditorFormula(formId) {
  const carregar = S.formulas.length ? Promise.resolve(S.formulas) : api('formulas.listar');
  carregando(true);
  carregar.then(function (lista) {
    S.formulas = lista;
    const f = lista.filter(function (x) { return String(x.form_id) === String(formId); })[0];
    if (!f) { carregando(false); return toast(traduzErro('Fórmula não encontrada.'), 'erro'); }
    S.formulaAtual = f;
    $('tituloFormulaEdit').textContent = t('editar_pfx') + f.form_nome;
    $('feNome').value = f.form_nome || '';
    $('feTip').value = f.form_tip || '';
    $('feDesc').value = f.form_desc || '';
    $('painelItensFormula').classList.remove('hidden');
    mostrarView('viewFormulaEdit');
    return carregarItensDaFormula(f.form_id);
  }).then(function () { carregando(false); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function salvarFormula() {
  const nome = $('feNome').value.trim();
  if (!nome) return toast(t('msg_nome_obrigatorio'), 'erro');
  carregando(true);
  const payload = {
    form_id: S.formulaAtual ? S.formulaAtual.form_id : null,
    form_nome: nome, form_tip: $('feTip').value, form_desc: $('feDesc').value
  };
  api('formulas.salvar', payload).then(function (r) {
    carregando(false);
    toast(t('msg_formula_salva'));
    if (!S.formulaAtual) {
      S.formulaAtual = { form_id: r.form_id, form_nome: nome, form_tip: payload.form_tip, form_desc: payload.form_desc };
      $('tituloFormulaEdit').textContent = t('editar_pfx') + nome;
      $('painelItensFormula').classList.remove('hidden');
      renderItensFormula();
    } else {
      S.formulaAtual.form_nome = nome;
    }
    S.formulas = [];
    S.dashCarregado = false;
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function carregarItensDaFormula(formId) {
  return api('itens.listar', { form_id: formId }).then(function (itens) {
    S.itensFormula = itens; renderItensFormula();
  });
}

function renderItensFormula() {
  montarLinhasItens(S.itensFormula, 'tbodyItensFormula', 'tfootItensFormula', true);
}

/** Monta tbody+tfoot da composição de uma fórmula. comAcoes=false omite editar/excluir (uso público, somente consulta). */
function montarLinhasItens(itens, tbodyId, tfootId, comAcoes) {
  const tb = $(tbodyId);
  const tf = $(tfootId);
  const colspanVazio = comAcoes ? 11 : 10;
  if (!itens.length) {
    tb.innerHTML = '<tr><td colspan="' + colspanVazio + '" class="vazio"><span class="ico">🌿</span>' + t('vazio_itens') + '</td></tr>';
    tf.innerHTML = '';
    return;
  }
  const mapaIns = {};
  S.insumos.forEach(function (i) { mapaIns[String(i.ins_id)] = i; });

  let somaQtde = 0, somaMl = 0, somaPct = 0, somaPpm = 0;
  const unidades = {};

  tb.innerHTML = itens.map(function (it) {
    const pctExib = Number(it.item_percent) * 100;
    somaQtde += Number(it.item_qtde) || 0;
    somaMl   += Number(it.item_qtde_ml) || 0;
    somaPct  += pctExib;
    somaPpm  += Number(it.item_ppm) || 0;
    unidades[String(it.item_unidade)] = true;

    const ins = mapaIns[String(it.ins_id)];
    let alerta = '';
    if (ins) {
      const limP = Number(ins.ins_limite_perc), limM = Number(ins.ins_limite_ppm);
      if ((limP > 0 && pctExib > limP) || (limM > 0 && Number(it.item_ppm) > limM)) {
        alerta = ' <span class="chip warn" title="' + t('tip_alerta_limite') + '">' + t('alerta_limite') + '</span>';
      }
    }
    return '<tr>' +
      '<td><b>' + esc(it.ins_nome) + '</b>' + alerta + '</td>' +
      '<td>' + esc(it.ins_tip || '-') + '</td>' +
      '<td>' + esc(it.ins_composicao || '-') + '</td>' +
      '<td>' + chipSimNao(it.ins_extrato) + '</td>' +
      '<td class="num">' + num(it.item_diluicao, 1) + '</td>' +
      '<td>' + esc(it.item_unidade) + '</td>' +
      '<td class="num">' + num(it.item_qtde, 2) + '</td>' +
      '<td class="num">' + num(it.item_qtde_ml, 4) + '</td>' +
      '<td class="num">' + num(pctExib, 2) + '%</td>' +
      '<td class="num">' + num(it.item_ppm, 1) + '</td>' +
      (comAcoes ? '<td style="white-space:nowrap;text-align:right">' +
        '<button class="btn btn-fantasma btn-mini" onclick="abrirModalItem(' + it.item_id + ')">✏️</button> ' +
        '<button class="btn btn-perigo btn-mini" onclick="confirmarExclusaoItem(' + it.item_id + ')">🗑</button></td>' : '') +
      '</tr>';
  }).join('');

  const umaUnidade = Object.keys(unidades).length === 1;
  tf.innerHTML = '<tr>' +
    '<td colspan="6">' + t('lbl_total') + '</td>' +
    '<td class="num">' + (umaUnidade ? num(somaQtde, 2) : '-') + '</td>' +
    '<td class="num">' + num(somaMl, 4) + '</td>' +
    '<td class="num">' + num(somaPct, 2) + '%</td>' +
    '<td class="num">' + num(somaPpm, 1) + '</td>' +
    (comAcoes ? '<td></td>' : '') + '</tr>';
}

function confirmarExclusaoItem(itemId) {
  const it = S.itensFormula.filter(function (x) { return String(x.item_id) === String(itemId); })[0];
  abrirModal(
    '<h3>' + t('exc_insumo_titulo') + '</h3>' +
    '<p>' + t('exc_insumo_msg') + ' <b style="color:var(--gold)">' + esc(it ? it.ins_nome : '') + '</b>?<br>' +
    '<span class="nota">' + t('nao_desfazer') + '</span></p>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-perigo" onclick="fecharModal();excluirItem(' + itemId + ')">' + t('btn_excluir') + '</button></div>'
  );
}

function abrirModalItem(itemId) {
  if (!S.formulaAtual) return toast(t('msg_salve_antes'), 'erro');
  const garantirInsumos = S.insumos.length ? Promise.resolve() :
    api('insumos.listar').then(function (l) { S.insumos = l; });

  garantirInsumos.then(function () {
    const it = itemId ? S.itensFormula.filter(function (x) { return String(x.item_id) === String(itemId); })[0] : null;
    const opcoes = S.insumos.map(function (i) {
      const sel = it && String(it.ins_id) === String(i.ins_id) ? ' selected' : '';
      return '<option value="' + i.ins_id + '"' + sel + '>' + esc(i.ins_nome) + ' - ' + esc(i.ins_tip || '') + '</option>';
    }).join('');

    abrirModal(
      '<h3>' + (it ? t('modal_edit_insumo') : t('modal_add_insumo')) + '</h3>' +
      '<div class="campo"><label>' + t('lbl_insumo') + '</label>' +
      '<select id="miIns" onchange="previewInsumoModal()"><option value="">' + t('opt_selecione') + '</option>' + opcoes + '</select></div>' +
      '<div id="miInfo" class="detalhe-grid" style="margin-bottom:14px"></div>' +
      '<div class="grade-form">' +
      '<div class="campo"><label>' + t('lbl_diluicao_req') + '</label><input type="number" id="miDiluicao" min="0.01" max="100" step="0.01" value="' + (it ? it.item_diluicao : 100) + '"></div>' +
      '<div class="campo"><label>' + t('lbl_unidade_req') + '</label><select id="miUnidade">' +
      ['Gotas', 'Ml', 'Mg'].map(function (u) {
        return '<option' + (it && it.item_unidade === u ? ' selected' : '') + '>' + u + '</option>';
      }).join('') + '</select></div>' +
      '<div class="campo"><label>' + t('lbl_qtde_req') + '</label><input type="number" id="miQtde" min="0.001" step="0.001" value="' + (it ? it.item_qtde : '') + '"></div>' +
      '</div>' +
      '<div class="modal-acoes">' +
      '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
      '<button class="btn btn-acao" onclick="salvarItem(' + (it ? it.item_id : 'null') + ')">' + t('btn_salvar') + '</button></div>'
    );
    previewInsumoModal();
  });
}

function previewInsumoModal() {
  const insId = $('miIns') ? $('miIns').value : '';
  const alvo = $('miInfo');
  if (!alvo) return;
  const i = S.insumos.filter(function (x) { return String(x.ins_id) === String(insId); })[0];
  alvo.innerHTML = !i ? '' :
    det(t('th_tipo'), i.ins_tip) + det(t('th_composicao'), i.ins_composicao) +
    det(t('th_extrato'), String(i.ins_extrato || '').toUpperCase().indexOf('S') === 0 ? t('sim') : t('nao')) +
    det(t('lbl_limites'), fmtPerc(i.ins_limite_perc) + ' / ' + num(i.ins_limite_ppm) + ' ppm');
}

function salvarItem(itemId) {
  const insId = $('miIns').value;
  if (!insId) return toast(t('msg_escolha_insumo'), 'erro');
  const payload = {
    item_id: itemId,
    form_id: S.formulaAtual.form_id,
    ins_id: insId,
    item_diluicao: Number($('miDiluicao').value),
    item_unidade: $('miUnidade').value,
    item_qtde: Number($('miQtde').value)
  };
  fecharModal(); carregando(true);
  api('itens.salvar', payload).then(function () {
    return carregarItensDaFormula(S.formulaAtual.form_id);
  }).then(function () { carregando(false); toast(t('msg_insumo_salvo')); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function excluirItem(itemId) {
  carregando(true);
  api('itens.excluir', { item_id: itemId }).then(function () {
    return carregarItensDaFormula(S.formulaAtual.form_id);
  }).then(function () { carregando(false); toast(t('msg_insumo_removido')); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

/* ===========================================================
 *  PRODUÇÃO (agenda de produção de fórmulas)
 * =========================================================== */
function estrelasHtml(nota) {
  const n = Math.round((Number(nota) || 0) * 2) / 2;
  if (n <= 0) return '<span style="color:var(--muted)">-</span>';
  const cheias = Math.floor(n);
  const meia = (n - cheias) >= 0.5;
  const vazias = 5 - cheias - (meia ? 1 : 0);
  return '<span class="estrelas">' + '★'.repeat(cheias) + (meia ? '½' : '') +
         '<span class="estrela-vazia">' + '★'.repeat(vazias) + '</span></span>';
}

function estrelasTexto(nota) {
  const cheias = Math.floor(nota);
  const meia = (nota - cheias) >= 0.5;
  return '★'.repeat(cheias) + (meia ? '½' : '');
}

function dataCurta(iso) {
  const s = String(iso || '').slice(0, 10);
  const p = s.split('-');
  if (p.length !== 3) return s;
  return S.lang === 'en' ? p[1] + '/' + p[2] + '/' + p[0] : p[2] + '/' + p[1] + '/' + p[0];
}

/** Insumos elegíveis como diluidores: ins_composicao = ESTRUTURA */
function diluidoresDisponiveis() {
  return S.insumos.filter(function (i) { return String(i.ins_composicao || '').toUpperCase() === 'ESTRUTURA'; });
}

function carregarProducao() {
  if (S.producao.length) { renderProducao(); return; }
  carregando(true);
  const garantirFormulas = S.formulas.length ? Promise.resolve() :
    api('formulas.listar').then(function (l) { S.formulas = l; });
  const garantirInsumos = S.insumos.length ? Promise.resolve() :
    api('insumos.listar').then(function (l) { S.insumos = l; });
  Promise.all([garantirFormulas, garantirInsumos])
    .then(function () { return api('producao.listar'); })
    .then(function (lista) {
      lista.sort(function (a, b) { return String(b.prod_dat).localeCompare(String(a.prod_dat)); });
      S.producao = lista;
      carregando(false);
      renderProducao();
    })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function renderProducao() {
  const busca = ($('buscaProducao') && $('buscaProducao').value || '').toLowerCase();
  const porPag = parseInt(($('prodPorPagina') && $('prodPorPagina').value) || '15', 10);
  const linhas = S.producao.filter(function (p) {
    if (!busca) return true;
    return [p.form_nome, p.prod_perfil, p.prod_obs].join(' ').toLowerCase().indexOf(busca) >= 0;
  });

  const totalPags = Math.ceil(linhas.length / porPag) || 1;
  if (S.prodPagina > totalPags) S.prodPagina = 1;
  const inicio = (S.prodPagina - 1) * porPag;
  const pagina = linhas.slice(inicio, inicio + porPag);

  $('tbodyProducao').innerHTML = pagina.length === 0
    ? '<tr><td colspan="7" class="vazio"><span class="ico">📅</span>' + t('vazio_producao') + '</td></tr>'
    : pagina.map(function (p) {
        return '<tr class="clicavel" onclick="abrirModalProducao(' + p.prod_id + ')">' +
          '<td style="white-space:nowrap">' + dataCurta(p.prod_dat) + '</td>' +
          '<td><b>' + esc(p.form_nome) + '</b></td>' +
          '<td class="num">' + fmtPerc(p.prod_perc_diluicao) + '</td>' +
          '<td class="num">' + num(p.prod_vol_ml, 0) + '</td>' +
          '<td>' + esc(p.prod_perfil || '-') + '</td>' +
          '<td>' + estrelasHtml(p.prod_nota) + '</td>' +
          '<td style="text-align:right;white-space:nowrap">' +
          '<button class="btn btn-fantasma btn-mini" onclick="event.stopPropagation();abrirModalProducao(' + p.prod_id + ')">✏️</button> ' +
          '<button class="btn btn-perigo btn-mini" onclick="event.stopPropagation();confirmarExclusaoProducao(' + p.prod_id + ')">🗑</button></td></tr>';
      }).join('');

  renderPaginacaoInterna('prodPaginacao', S.prodPagina, totalPags, linhas.length, t('nav_producao_plu').toLowerCase(), 'mudarPagProd', t('nav_producao').toLowerCase());
}

function mudarPagProd(p) { S.prodPagina = p; renderProducao(); }

function selectDiluidor(id, valorAtual) {
  const opcoes = diluidoresDisponiveis().map(function (i) {
    const sel = String(valorAtual) === String(i.ins_id) ? ' selected' : '';
    return '<option value="' + i.ins_id + '"' + sel + '>' + esc(i.ins_nome) + '</option>';
  }).join('');
  return '<select id="' + id + '"><option value="">' + t('opt_nenhum') + '</option>' + opcoes + '</select>';
}

function abrirModalProducao(prodId) {
  const garantirFormulas = S.formulas.length ? Promise.resolve() :
    api('formulas.listar').then(function (l) { S.formulas = l; });
  const garantirInsumos = S.insumos.length ? Promise.resolve() :
    api('insumos.listar').then(function (l) { S.insumos = l; });

  Promise.all([garantirFormulas, garantirInsumos]).then(function () {
    const p = prodId ? S.producao.filter(function (x) { return String(x.prod_id) === String(prodId); })[0] : null;
    const opcoesForm = S.formulas.map(function (f) {
      const sel = p && String(p.form_id) === String(f.form_id) ? ' selected' : '';
      return '<option value="' + f.form_id + '"' + sel + '>' + esc(f.form_nome) + '</option>';
    }).join('');

    let opcoesNota = '<option value="0">' + t('opt_sem_nota') + '</option>';
    for (let nVal = 1; nVal <= 5; nVal += 0.5) {
      const sel = p && Number(p.prod_nota) === nVal ? ' selected' : '';
      opcoesNota += '<option value="' + nVal + '"' + sel + '>' + estrelasTexto(nVal) + ' (' + nVal + ')</option>';
    }

    const dataAtual = p ? String(p.prod_dat).slice(0, 10) : '';

    abrirModal(
      '<h3>' + (p ? t('modal_edit_producao') : t('modal_add_producao')) + '</h3>' +
      '<div class="campo"><label>' + t('lbl_formula_req') + '</label>' +
      '<select id="mpForm"><option value="">' + t('opt_selecione') + '</option>' + opcoesForm + '</select></div>' +
      '<div class="grade-form">' +
      '<div class="campo"><label>' + t('lbl_data_req') + '</label><input type="date" id="mpData" value="' + dataAtual + '"></div>' +
      '<div class="campo"><label>' + t('lbl_nota') + '</label><select id="mpNota">' + opcoesNota + '</select></div>' +
      '<div class="campo"><label>' + t('lbl_perc_diluicao') + '</label><input type="number" id="mpPercDiluicao" min="0" max="100" step="0.01" value="' + (p ? p.prod_perc_diluicao : '') + '"></div>' +
      '<div class="campo"><label>' + t('lbl_vol_ml') + '</label><input type="number" id="mpVolMl" min="0" step="1" value="' + (p ? p.prod_vol_ml : '') + '"></div>' +
      '</div>' +
      '<div class="grade-form">' +
      '<div class="campo"><label>' + t('lbl_diluidor1') + '</label>' + selectDiluidor('mpDiluidor1', p ? p.prod_diluidor_1 : '') + '</div>' +
      '<div class="campo"><label>' + t('lbl_diluidor2') + '</label>' + selectDiluidor('mpDiluidor2', p ? p.prod_diluidor_2 : '') + '</div>' +
      '<div class="campo"><label>' + t('lbl_diluidor3') + '</label>' + selectDiluidor('mpDiluidor3', p ? p.prod_diluidor_3 : '') + '</div>' +
      '</div>' +
      (p && p.prod_perfil ? '<div class="campo"><label>' + t('lbl_perfil_calc') + '</label><input type="text" value="' + esc(p.prod_perfil) + '" readonly></div>' : '') +
      '<div class="campo"><label>' + t('lbl_obs') + '</label>' +
      '<textarea id="mpObs" placeholder="' + t('ph_obs') + '">' + esc(p ? p.prod_obs : '') + '</textarea></div>' +
      '<div class="modal-acoes">' +
      '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
      '<button class="btn btn-acao" onclick="salvarProducao(' + (p ? p.prod_id : 'null') + ')">' + t('btn_salvar') + '</button></div>'
    );
  });
}

function salvarProducao(prodId) {
  const formId = $('mpForm').value;
  const data = $('mpData').value;
  if (!formId) return toast(t('msg_escolha_formula'), 'erro');
  if (!data) return toast(t('msg_informe_data'), 'erro');
  const payload = {
    prod_id: prodId,
    form_id: formId,
    prod_dat: data,
    prod_nota: Number($('mpNota').value),
    prod_obs: $('mpObs').value,
    prod_perc_diluicao: Number($('mpPercDiluicao').value) || 0,
    prod_vol_ml: Number($('mpVolMl').value) || 0,
    prod_diluidor_1: $('mpDiluidor1').value,
    prod_diluidor_2: $('mpDiluidor2').value,
    prod_diluidor_3: $('mpDiluidor3').value
  };
  fecharModal(); carregando(true);
  api('producao.salvar', payload)
    .then(function () { carregando(false); toast(t('msg_producao_salva')); S.producao = []; carregarProducao(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function confirmarExclusaoProducao(prodId) {
  const p = S.producao.filter(function (x) { return String(x.prod_id) === String(prodId); })[0];
  abrirModal(
    '<h3>' + t('exc_producao_titulo') + '</h3>' +
    '<p>' + t('exc_producao_msg') + ' <b style="color:var(--gold)">' + esc(p ? p.form_nome : '') + '</b> (' +
    dataCurta(p ? p.prod_dat : '') + ')?<br>' +
    '<span class="nota">' + t('nao_desfazer') + '</span></p>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-perigo" onclick="excluirProducao(' + prodId + ')">' + t('btn_excluir') + '</button></div>'
  );
}

function excluirProducao(prodId) {
  fecharModal(); carregando(true);
  api('producao.excluir', { prod_id: prodId })
    .then(function () { carregando(false); toast(t('msg_producao_excluida')); S.producao = []; carregarProducao(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

/* ===========================================================
 *  FORNECEDORES
 * =========================================================== */
function carregarFornecedores() {
  if (S.fornecedores.length) { renderFornecedores(); return; }
  carregando(true);
  api('fornecedores.listar').then(function (lista) {
    S.fornecedores = lista; carregando(false); renderFornecedores();
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function renderFornecedores() {
  const busca = ($('buscaFornecedor').value || '').toLowerCase();
  const porPag = parseInt(($('fornPorPagina') && $('fornPorPagina').value) || '15', 10);
  const linhas = S.fornecedores.filter(function (f) {
    if (!busca) return true;
    return [f.forn_nome, f.forn_tipo, f.forn_fabricante].join(' ').toLowerCase().indexOf(busca) >= 0;
  });

  const totalPags = Math.ceil(linhas.length / porPag) || 1;
  if (S.fornPagina > totalPags) S.fornPagina = 1;
  const inicio = (S.fornPagina - 1) * porPag;
  const pagina = linhas.slice(inicio, inicio + porPag);

  $('tbodyFornecedores').innerHTML = pagina.length === 0
    ? '<tr><td colspan="7" class="vazio"><span class="ico">🏭</span>' + t('vazio_fornecedores') + '</td></tr>'
    : pagina.map(function (f) {
        return '<tr class="clicavel" onclick="abrirModalFornecedor(' + f.forn_id + ')">' +
          '<td><b>' + esc(f.forn_nome) + '</b></td>' +
          '<td><span class="chip">' + esc(f.forn_tipo || '-') + '</span></td>' +
          '<td>' + esc(f.forn_fabricante || '-') + '</td>' +
          '<td>' + esc(f.forn_telefone || '-') + '</td>' +
          '<td>' + (f.forn_url ? '<a href="' + esc(f.forn_url) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">↗</a>' : '-') + '</td>' +
          '<td>' + estrelasHtml(f.forn_nota) + '</td>' +
          '<td style="text-align:right;white-space:nowrap">' +
          '<button class="btn btn-fantasma btn-mini" onclick="event.stopPropagation();abrirModalFornecedor(' + f.forn_id + ')">✏️</button> ' +
          '<button class="btn btn-perigo btn-mini" onclick="event.stopPropagation();confirmarExclusaoFornecedor(' + f.forn_id + ')">🗑</button></td></tr>';
      }).join('');

  renderPaginacaoInterna('fornPaginacao', S.fornPagina, totalPags, linhas.length, t('nav_fornecedores').toLowerCase(), 'mudarPagForn');
}

function mudarPagForn(p) { S.fornPagina = p; renderFornecedores(); }

function toggleFabricante() {
  const tipo = $('mfTipo').value;
  const campo = $('mfFabricante');
  if (tipo === 'Fabricante') { campo.value = ''; campo.disabled = true; }
  else { campo.disabled = false; }
}

function abrirModalFornecedor(fornId) {
  const f = fornId ? S.fornecedores.filter(function (x) { return String(x.forn_id) === String(fornId); })[0] : null;

  let opcoesNota = '<option value="0">' + t('opt_sem_nota') + '</option>';
  for (let nVal = 1; nVal <= 5; nVal += 0.5) {
    const sel = f && Number(f.forn_nota) === nVal ? ' selected' : '';
    opcoesNota += '<option value="' + nVal + '"' + sel + '>' + estrelasTexto(nVal) + ' (' + nVal + ')</option>';
  }

  abrirModal(
    '<h3>' + (f ? t('modal_edit_fornecedor') : t('modal_add_fornecedor')) + '</h3>' +
    '<div class="campo"><label>' + t('lbl_forn_nome_req') + '</label><input type="text" id="mfNome" value="' + esc(f ? f.forn_nome : '') + '"></div>' +
    '<div class="grade-form">' +
    '<div class="campo"><label>' + t('lbl_forn_tipo_req') + '</label><select id="mfTipo" onchange="toggleFabricante()">' +
    '<option value="">' + t('opt_selecione') + '</option>' +
    '<option value="Fabricante"' + (f && f.forn_tipo === 'Fabricante' ? ' selected' : '') + '>' + t('opt_fabricante') + '</option>' +
    '<option value="Revendedor"' + (f && f.forn_tipo === 'Revendedor' ? ' selected' : '') + '>' + t('opt_revendedor') + '</option>' +
    '</select></div>' +
    '<div class="campo"><label>' + t('lbl_forn_fabricante') + '</label><input type="text" id="mfFabricante" value="' + esc(f ? f.forn_fabricante : '') + '"' + (f && f.forn_tipo === 'Fabricante' ? ' disabled' : '') + '></div>' +
    '</div>' +
    '<div class="grade-form">' +
    '<div class="campo"><label>' + t('lbl_forn_telefone') + '</label><input type="text" id="mfTelefone" value="' + esc(f ? f.forn_telefone : '') + '"></div>' +
    '<div class="campo"><label>' + t('lbl_forn_nota') + '</label><select id="mfNota">' + opcoesNota + '</select></div>' +
    '</div>' +
    '<div class="campo"><label>' + t('lbl_forn_endereco') + '</label><input type="text" id="mfEndereco" value="' + esc(f ? f.forn_endereco : '') + '"></div>' +
    '<div class="campo"><label>' + t('lbl_forn_url') + '</label><input type="text" id="mfUrl" placeholder="https://" value="' + esc(f ? f.forn_url : '') + '"></div>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-acao" onclick="salvarFornecedor(' + (f ? f.forn_id : 'null') + ')">' + t('btn_salvar') + '</button></div>'
  );
}

function salvarFornecedor(fornId) {
  const nome = $('mfNome').value.trim();
  if (!nome) return toast(t('msg_nome_forn_obrigatorio'), 'erro');
  const tipo = $('mfTipo').value;
  if (!tipo) return toast(t('msg_tipo_forn_obrigatorio'), 'erro');
  const payload = {
    forn_id: fornId,
    forn_nome: nome,
    forn_tipo: tipo,
    forn_fabricante: $('mfFabricante').value,
    forn_telefone: $('mfTelefone').value,
    forn_endereco: $('mfEndereco').value,
    forn_url: $('mfUrl').value,
    forn_nota: Number($('mfNota').value)
  };
  fecharModal(); carregando(true);
  api('fornecedores.salvar', payload)
    .then(function () { carregando(false); toast(t('msg_fornecedor_salvo')); S.fornecedores = []; S.dashCarregado = false; carregarFornecedores(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function confirmarExclusaoFornecedor(fornId) {
  const f = S.fornecedores.filter(function (x) { return String(x.forn_id) === String(fornId); })[0];
  abrirModal(
    '<h3>' + t('exc_fornecedor_titulo') + '</h3>' +
    '<p>' + t('exc_fornecedor_msg') + ' <b style="color:var(--gold)">' + esc(f ? f.forn_nome : '') + '</b>?<br>' +
    '<span class="nota">' + t('nao_desfazer') + '</span></p>' +
    '<div class="modal-acoes">' +
    '<button class="btn btn-fantasma" onclick="fecharModal()">' + t('cancelar') + '</button>' +
    '<button class="btn btn-perigo" onclick="excluirFornecedor(' + fornId + ')">' + t('btn_excluir') + '</button></div>'
  );
}

function excluirFornecedor(fornId) {
  fecharModal(); carregando(true);
  api('fornecedores.excluir', { forn_id: fornId })
    .then(function () { carregando(false); toast(t('msg_fornecedor_excluido')); S.fornecedores = []; S.dashCarregado = false; carregarFornecedores(); })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

/* ===========================================================
 *  PERFIL
 * =========================================================== */
function preencherPerfil() {
  if (!S.user) return;
  $('pfNome').value = S.user.user_nome || '';
  $('pfEmail').value = S.user.user_mail || '';
  $('pfSenhaAtualEmail').value = '';
  aplicarTema(S.user.user_cores || 3);
}

function preencherSeguranca() {
  if (!S.user) return;
  $('pfSenhaAtual').value = ''; $('pfSenhaNova').value = '';
  var fc = $('forcaPfSenha'); if (fc) fc.innerHTML = '';
  if (S.user.user_dat_valid) {
    const d = new Date(S.user.user_dat_valid);
    const loc = S.lang === 'pt' ? 'pt-BR' : (S.lang === 'es' ? 'es-ES' : 'en-US');
    $('notaValidade').textContent = t('validade_pfx') + d.toLocaleDateString(loc) + t('validade_sfx');
  }
}

function salvarPerfil() {
  const payload = {
    nome: $('pfNome').value.trim(),
    email: $('pfEmail').value.trim(),
    senhaAtual: $('pfSenhaAtualEmail').value
  };
  carregando(true);
  api('user.atualizar', payload).then(function (user) {
    S.user = user; carregando(false);
    atualizarAvatar(); preencherPerfil();
    toast(t('msg_perfil_ok'));
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

function trocarSenha() {
  const atual = $('pfSenhaAtual').value, nova = $('pfSenhaNova').value;
  if (!atual || !nova) return toast(t('msg_preencha_senhas'), 'erro');
  const erroSenha = validarSenhaCliente(nova);
  if (erroSenha) return toast(erroSenha, 'erro');
  carregando(true);
  api('user.trocarSenha', { atual: atual, nova: nova }).then(function () {
    carregando(false); preencherPerfil(); toast(t('msg_senha_ok'));
  }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

/* ===========================================================
 *  LANDING PAGE PÚBLICA
 * =========================================================== */

// Estado do catálogo público
const PUB = {
  pagina: 1,
  total: 0,
  paginas: 1,
  insumos: [],
  carrosselIdx: 0,
  carrosselTimer: null,
  insumosCarrossel: []
};

function mostrarPublico(secao) {
  ['publicHome', 'publicInsumos', 'publicFormulas'].forEach(function (id) {
    var el = $(id);
    if (el) el.classList.toggle('hidden', id !== secao);
  });
  // atualizar nav
  var navIns = $('pubNavInsumos');
  if (navIns) navIns.classList.toggle('ativo', secao === 'publicInsumos');
  var navForm = $('pubNavFormulas');
  if (navForm) navForm.classList.toggle('ativo', secao === 'publicFormulas');
  if (secao === 'publicInsumos') {
    carregarCatalogoPublico(1);
  }
  if (secao === 'publicFormulas') {
    _carregarFormulasGeral(PUB_FORM, 1);
  }
}

function abrirAuth(view) {
  $('authOverlay').classList.remove('hidden');
  mostrarAuth(view || 'viewLogin');
  // sincronizar seletor de idioma
  var sel = $('selIdiomaTop');
  if (sel) sel.value = S.lang;
}

function fecharAuthOverlay() {
  $('authOverlay').classList.add('hidden');
}

function trocarIdiomaPublico(lang) {
  definirIdioma(lang);
  var sel = $('selIdiomaPublico');
  if (sel) sel.value = S.lang;
  // re-aplicar i18n na landing
  aplicarIdioma();
}

// Detecção de idioma por IP (fallback para navigator.language)
function detectarIdiomaIP() {
  if (localStorage.getItem('aromalab_lang')) return; // já tem preferência salva
  var PAISES_PT = ['BR','PT','AO','MZ','CV','GW','ST','TL'];
  var PAISES_ES = ['AR','BO','CL','CO','CR','CU','DO','EC','SV','GT','HN','MX','NI','PA','PY','PE','PR','UY','VE','ES'];
  try {
    fetch('https://ipapi.co/json/')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var cc = String(d.country_code || '').toUpperCase();
        var lang = PAISES_PT.indexOf(cc) >= 0 ? 'pt'
                 : PAISES_ES.indexOf(cc) >= 0 ? 'es' : 'en';
        definirIdioma(lang);
        var sel = $('selIdiomaPublico');
        if (sel) sel.value = lang;
        var selTop = $('selIdiomaTop');
        if (selTop) selTop.value = lang;
      })
      .catch(function () {});
  } catch (e) {}
}

// Entrar no app após login (a partir do overlay)
var _entrarNoAppOriginal = entrarNoApp;
entrarNoApp = function () {
  $('authOverlay').classList.add('hidden');
  $('publicShell').classList.add('hidden');
  _entrarNoAppOriginal();
};

/* --- Carrossel --- */
function iniciarCarrossel() {
  api('carrossel.publico', {})
    .then(function (res) {
      PUB.insumosCarrossel = res;
      renderCarrossel();
    })
    .catch(function () {});
}

function renderCarrossel() {
  var trilho = $('carrosselTrilho');
  var dots = $('carrosselDots');
  if (!trilho || !PUB.insumosCarrossel.length) return;

  trilho.innerHTML = PUB.insumosCarrossel.map(function (i) {
    var perfil = i.ins_composicao || i.ins_tip || '';
    return '<div class="carrossel-card">' +
      (i.ins_img_url
        ? '<img src="' + esc(i.ins_img_url) + '" alt="' + esc(i.ins_nome) + '" onerror="this.style.display=\'none\'">'
        : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#f0e8e0,#e0d4c4);display:flex;align-items:center;justify-content:center;font-size:60px">🌿</div>') +
      '<div class="carrossel-label">' +
      '<div class="c-nome">' + esc(i.ins_nome) + '</div>' +
      (perfil ? '<div class="c-perfil">' + esc(perfil) + '</div>' : '') +
      (i.ins_desc ? '<div class="c-desc">' + esc(i.ins_desc.slice(0, 80)) + '</div>' : '') +
      '</div></div>';
  }).join('');

  dots.innerHTML = PUB.insumosCarrossel.map(function (_, idx) {
    return '<span class="' + (idx === 0 ? 'ativo' : '') + '" onclick="irCarrossel(' + idx + ')"></span>';
  }).join('');

  iniciarAutoplay();
}

function irCarrossel(idx) {
  PUB.carrosselIdx = idx;
  var trilho = $('carrosselTrilho');
  if (trilho) trilho.style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('.carrossel-dots span').forEach(function (d, i) {
    d.classList.toggle('ativo', i === idx);
  });
}

function iniciarAutoplay() {
  clearInterval(PUB.carrosselTimer);
  PUB.carrosselTimer = setInterval(function () {
    var total = PUB.insumosCarrossel.length;
    if (!total) return;
    irCarrossel((PUB.carrosselIdx + 1) % total);
  }, 4000);
}

/* --- Catálogo público paginado --- */
function carregarCatalogoPublico(pagina) {
  PUB.pagina = pagina || 1;
  var busca = ($('pubBuscaInsumo') && $('pubBuscaInsumo').value) || '';
  var tipo  = ($('pubFiltroTipo') && $('pubFiltroTipo').value) || '';
  var lista = $('pubListaInsumos');
  if (lista) lista.innerHTML = '<div class="loading-inline"><svg class="icone-svg" viewBox="0 0 512 512"><use href="#sym-frasco"/></svg><p data-i18n="carregando">Formulando...</p></div>';

  api('insumos.publico', { pagina: PUB.pagina, busca: busca, tipo: tipo })
    .then(function (res) {
      PUB.insumos  = res.insumos;
      PUB.total    = res.total;
      PUB.paginas  = res.paginas;
      renderCatalogoPublico();
      renderPaginacaoPublica();
    })
    .catch(function (e) {
      var lista2 = $('pubListaInsumos');
      if (lista2) lista2.innerHTML = '<p class="vazio" style="padding:40px;color:#c45b4d">' + esc(e.message) + '</p>';
    });
}

var _buscarDebounce = null;
function buscarInsumosPublicos() {
  clearTimeout(_buscarDebounce);
  _buscarDebounce = setTimeout(function () { carregarCatalogoPublico(1); }, 350);
}

function renderCatalogoPublico() {
  var lista = $('pubListaInsumos');
  if (!lista) return;
  if (!PUB.insumos.length) {
    lista.innerHTML = '<p class="vazio" style="padding:40px"><span class="ico">🌿</span>' + t('vazio_insumos') + '</p>';
    return;
  }
  lista.innerHTML = PUB.insumos.map(function (i) {
    var tipo = i.ins_tip || '';
    return '<div class="pub-ins-item" onmouseenter="mostrarDetalhePublico(' + i.ins_id + ')" onclick="mostrarDetalhePublico(' + i.ins_id + ')">' +
      (i.ins_img_url
        ? '<img class="pub-ins-thumb" src="' + esc(i.ins_img_url) + '" alt="" onerror="this.outerHTML=\'<div class=&quot;pub-ins-thumb-placeholder&quot;>🌿</div>\'">'
        : '<div class="pub-ins-thumb-placeholder">🌿</div>') +
      '<div class="pub-ins-info">' +
        '<div class="pub-ins-linha-topo">' +
          '<div class="pub-ins-nome">' + esc(i.ins_nome) + '</div>' +
          (tipo ? '<span class="pub-ins-flag">' + esc(tipo) + '</span>' : '') +
        '</div>' +
        '<div class="pub-ins-sub">' + esc(i.ins_cas || '') + '</div>' +
        '<div class="pub-ins-desc">' + esc((i.ins_desc || i.ins_composicao || '').slice(0, 100)) + '</div>' +
      '</div>' +
      '</div>';
  }).join('');
}

function mostrarDetalhePublico(insId) {
  var i = PUB.insumos.filter(function (x) { return String(x.ins_id) === String(insId); })[0];
  if (!i) return;

  // marcar item selecionado
  document.querySelectorAll('.pub-ins-item').forEach(function (el) { el.classList.remove('selecionado'); });
  document.querySelectorAll('.pub-ins-item').forEach(function (el) {
    if (el.getAttribute('onmouseenter') && el.getAttribute('onmouseenter').indexOf(String(i.ins_id)) >= 0) {
      el.classList.add('selecionado');
    }
  });

  var html =
    '<div class="pub-detalhe-corpo">' +
      '<div class="d-nome">' + esc(i.ins_nome) + '</div>' +
      '<div class="pub-detalhe-topo">' +
        (i.ins_img_url ? '<img class="pub-detalhe-img-sq" src="' + esc(i.ins_img_url) + '" alt="' + esc(i.ins_nome) + '" onerror="this.style.display=\'none\'">' : '') +
        '<div class="pub-detalhe-meta">' +
          (i.ins_cas ? '<div><div class="d-rotulo">CAS</div><div class="d-valor">' + esc(i.ins_cas) + '</div></div>' : '') +
          '<div><div class="d-rotulo">' + t('th_tipo') + '</div><div class="d-valor">' + esc(i.ins_tip || '-') + '</div></div>' +
        '</div>' +
      '</div>' +
      (i.ins_desc ? '<div class="pub-detalhe-desc-bloco"><div class="d-rotulo">' + t('det_desc') + '</div><div class="pub-detalhe-desc-txt">' + esc(i.ins_desc) + '</div></div>' : '') +
      '<div class="d-grid">' +
        '<div><div class="d-rotulo">' + t('th_composicao') + '</div><div class="d-valor">' + esc(i.ins_composicao || '-') + '</div></div>' +
        '<div><div class="d-rotulo">' + t('th_permitido') + '</div><div class="d-valor">' + (String(i.ins_permitido || '').toUpperCase().indexOf('S') === 0 ? t('sim') : t('nao')) + '</div></div>' +
      '</div>' +
    '</div>';
  exibirDetalheCatalogo('pubDetalheConteudo', html);
}

function renderPaginacaoPublica() {
  var pag = $('pubPaginacao');
  if (!pag) return;

  var html = '';
  if (PUB.paginas > 1) {
    html += '<button onclick="carregarCatalogoPublico(1)" ' + (PUB.pagina <= 1 ? 'disabled' : '') + '>&laquo;</button>';
    html += '<button onclick="carregarCatalogoPublico(' + (PUB.pagina - 1) + ')" ' + (PUB.pagina <= 1 ? 'disabled' : '') + '>&lsaquo;</button>';

    var inicio = Math.max(1, PUB.pagina - 2);
    var fim    = Math.min(PUB.paginas, inicio + 4);
    for (var p = inicio; p <= fim; p++) {
      html += '<button class="' + (p === PUB.pagina ? 'ativo' : '') + '" onclick="carregarCatalogoPublico(' + p + ')">' + p + '</button>';
    }

    html += '<button onclick="carregarCatalogoPublico(' + (PUB.pagina + 1) + ')" ' + (PUB.pagina >= PUB.paginas ? 'disabled' : '') + '>&rsaquo;</button>';
    html += '<button onclick="carregarCatalogoPublico(' + PUB.paginas + ')" ' + (PUB.pagina >= PUB.paginas ? 'disabled' : '') + '>&raquo;</button>';
  }
  html += '<span class="pag-info">' + PUB.total + ' insumos</span>';
  pag.innerHTML = html;
}

/* --- Fórmulas gerais / biblioteca pública (user_id = 0) ----------------
 * Padrão lista+detalhe (mesmo de Insumos), compartilhado entre a tela
 * pública (deslogada) e a tela "Fórmulas gerais" da área logada. --------- */
const PUB_FORM = {
  pagina: 1, total: 0, paginas: 1, formulas: [],
  ids: { lista: 'pubListaFormulas', paginacao: 'pubFormulasPaginacao', busca: 'pubBuscaFormula', filtro: 'pubFiltroTipoFormula', detalheBox: 'pubFormulaDetalheConteudo' },
  fnAbrir: 'abrirDetalheFormulaPublica', fnPagina: 'irPagFormulasPublicas'
};
const FORM_GERAL = {
  pagina: 1, total: 0, paginas: 1, formulas: [],
  ids: { lista: 'listaFormulasGerais', paginacao: 'formGeraisPaginacao', busca: 'buscaFormulaGeral', filtro: 'filtroTipoFormulaGeral', detalheBox: 'formGeralDetalheConteudo' },
  fnAbrir: 'abrirDetalheFormulaGeralLog', fnPagina: 'irPagFormulasGerais'
};

function _carregarFormulasGeral(ctx, pagina) {
  ctx.pagina = pagina || 1;
  var busca = ($(ctx.ids.busca) && $(ctx.ids.busca).value) || '';
  var tipo  = ($(ctx.ids.filtro) && $(ctx.ids.filtro).value) || '';
  var lista = $(ctx.ids.lista);
  if (lista) lista.innerHTML = '<p class="vazio">' + t('carregando') + '</p>';
  var box = $(ctx.ids.detalheBox);
  if (box) { box.classList.add('pub-detalhe-vazio'); box.innerHTML = '<span class="pub-detalhe-hint">' + t('pub_hint_click_formula') + '</span>'; }

  api('formulas.publico', { pagina: ctx.pagina, busca: busca, tipo: tipo })
    .then(function (res) {
      ctx.formulas = res.formulas; ctx.total = res.total; ctx.paginas = res.paginas;
      _renderListaFormulasGeral(ctx);
      _renderPaginacaoFormulasGeral(ctx);
    })
    .catch(function (e) {
      var l = $(ctx.ids.lista);
      if (l) l.innerHTML = '<p class="vazio" style="color:var(--danger)">' + esc(e.message) + '</p>';
    });
}

function _renderListaFormulasGeral(ctx) {
  var lista = $(ctx.ids.lista);
  if (!lista) return;
  if (!ctx.formulas.length) {
    lista.innerHTML = '<p class="vazio"><span class="ico">🧪</span>' + t('vazio_formulas') + '</p>';
    return;
  }
  lista.innerHTML = ctx.formulas.map(function (f) {
    return '<div class="pub-ins-item" onclick="' + ctx.fnAbrir + '(' + f.form_id + ')">' +
      '<div class="pub-ins-thumb-placeholder">🧪</div>' +
      '<div class="pub-ins-info">' +
        '<div class="pub-ins-linha-topo">' +
          '<div class="pub-ins-nome">' + esc(f.form_nome) + '</div>' +
          (f.form_tip ? '<span class="pub-ins-flag">' + esc(f.form_tip) + '</span>' : '') +
        '</div>' +
        '<div class="pub-ins-desc">' + esc(String(f.form_desc || '').slice(0, 100)) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function _renderPaginacaoFormulasGeral(ctx) {
  var pag = $(ctx.ids.paginacao);
  if (!pag) return;
  var html = '';
  if (ctx.paginas > 1) {
    html += '<button onclick="' + ctx.fnPagina + '(1)" ' + (ctx.pagina <= 1 ? 'disabled' : '') + '>&laquo;</button>';
    html += '<button onclick="' + ctx.fnPagina + '(' + (ctx.pagina - 1) + ')" ' + (ctx.pagina <= 1 ? 'disabled' : '') + '>&lsaquo;</button>';
    var inicio = Math.max(1, ctx.pagina - 2), fim = Math.min(ctx.paginas, inicio + 4);
    for (var p = inicio; p <= fim; p++) {
      html += '<button class="' + (p === ctx.pagina ? 'ativo' : '') + '" onclick="' + ctx.fnPagina + '(' + p + ')">' + p + '</button>';
    }
    html += '<button onclick="' + ctx.fnPagina + '(' + (ctx.pagina + 1) + ')" ' + (ctx.pagina >= ctx.paginas ? 'disabled' : '') + '>&rsaquo;</button>';
    html += '<button onclick="' + ctx.fnPagina + '(' + ctx.paginas + ')" ' + (ctx.pagina >= ctx.paginas ? 'disabled' : '') + '>&raquo;</button>';
  }
  html += '<span class="pag-info">' + ctx.total + ' ' + t('nav_formulas').toLowerCase() + '</span>';
  pag.innerHTML = html;
}

function _htmlTabelaItensFormula(tbodyId, tfootId) {
  return '<div class="tabela-wrap"><table>' +
    '<thead><tr>' +
      '<th>' + t('th_insumo') + '</th><th>' + t('th_tipo') + '</th>' +
      '<th>' + t('th_composicao') + '</th><th>' + t('th_extrato') + '</th>' +
      '<th class="num">' + t('th_diluicao') + '</th><th>' + t('th_unid') + '</th>' +
      '<th class="num">' + t('th_qtde') + '</th><th class="num">' + t('th_qtde_ml') + '</th>' +
      '<th class="num">%</th><th class="num">ppm</th>' +
    '</tr></thead>' +
    '<tbody id="' + tbodyId + '"></tbody>' +
    '<tfoot id="' + tfootId + '"></tfoot>' +
  '</table></div>';
}

function _abrirDetalheFormulaGeral(ctx, formId) {
  const f = ctx.formulas.filter(function (x) { return String(x.form_id) === String(formId); })[0];
  if (!f) return;
  carregando(true);
  api('itens.publico', { form_id: formId })
    .then(function (itens) {
      carregando(false);

      document.querySelectorAll('#' + ctx.ids.lista + ' .pub-ins-item').forEach(function (el) { el.classList.remove('selecionado'); });
      document.querySelectorAll('#' + ctx.ids.lista + ' .pub-ins-item').forEach(function (el) {
        if (el.getAttribute('onclick') && el.getAttribute('onclick').indexOf('(' + formId + ')') >= 0) el.classList.add('selecionado');
      });

      var tbodyId = ctx.ids.detalheBox + '_tbody', tfootId = ctx.ids.detalheBox + '_tfoot';
      var html = '<div class="pub-detalhe-corpo">' +
        '<div class="d-nome">' + esc(f.form_nome) + '</div>' +
        (f.form_tip ? '<div style="margin-bottom:10px"><div class="d-rotulo">' + t('th_tipo') + '</div><div class="d-valor">' + esc(f.form_tip) + '</div></div>' : '') +
        (f.form_desc ? '<div class="pub-detalhe-desc-bloco"><div class="d-rotulo">' + t('det_desc') + '</div><div class="pub-detalhe-desc-txt">' + esc(f.form_desc) + '</div></div>' : '') +
        _htmlTabelaItensFormula(tbodyId, tfootId) +
      '</div>';
      exibirDetalheCatalogo(ctx.ids.detalheBox, html);
      montarLinhasItens(itens, tbodyId, tfootId, false);
    })
    .catch(function (e) { carregando(false); toast(e.message, 'erro'); });
}

var _buscarFormPublicaDebounce = null;
function buscarFormulasPublicas() {
  clearTimeout(_buscarFormPublicaDebounce);
  _buscarFormPublicaDebounce = setTimeout(function () { _carregarFormulasGeral(PUB_FORM, 1); }, 350);
}
function irPagFormulasPublicas(p) { _carregarFormulasGeral(PUB_FORM, p); }
function abrirDetalheFormulaPublica(formId) { _abrirDetalheFormulaGeral(PUB_FORM, formId); }

var _buscarFormGeralDebounce = null;
function buscarFormulasGerais() {
  clearTimeout(_buscarFormGeralDebounce);
  _buscarFormGeralDebounce = setTimeout(function () { _carregarFormulasGeral(FORM_GERAL, 1); }, 350);
}
function irPagFormulasGerais(p) { _carregarFormulasGeral(FORM_GERAL, p); }
function abrirDetalheFormulaGeralLog(formId) { _abrirDetalheFormulaGeral(FORM_GERAL, formId); }

// Tamanho final do avatar (quadrado). A API do frontend estático vai por GET
// (dados na URL, ver api() acima), então a foto precisa ser pequena - por
// isso ela é redimensionada/comprimida no navegador antes de enviar,
// independente do tamanho do arquivo original.
const FOTO_LADO_PX = 256;
const FOTO_QUALIDADE_JPEG = 0.82;

function enviarFoto(input) {
  const arquivo = input.files && input.files[0];
  input.value = '';
  if (!arquivo) return;
  if (!arquivo.type || arquivo.type.indexOf('image/') !== 0) return toast(t('msg_foto_invalida'), 'erro');
  if (arquivo.size > 20 * 1024 * 1024) return toast(t('msg_foto_grande'), 'erro');

  const url = URL.createObjectURL(arquivo);
  const img = new Image();
  img.onload = function () {
    URL.revokeObjectURL(url);
    const lado = Math.min(img.naturalWidth, img.naturalHeight);
    const sx = (img.naturalWidth - lado) / 2;
    const sy = (img.naturalHeight - lado) / 2;
    const canvas = document.createElement('canvas');
    canvas.width = FOTO_LADO_PX;
    canvas.height = FOTO_LADO_PX;
    canvas.getContext('2d').drawImage(img, sx, sy, lado, lado, 0, 0, FOTO_LADO_PX, FOTO_LADO_PX);
    const base64 = canvas.toDataURL('image/jpeg', FOTO_QUALIDADE_JPEG).split(',')[1];

    carregando(true);
    api('user.foto', { base64: base64, mime: 'image/jpeg' }).then(function (r) {
      S.user.user_img_url = r.user_img_url;
      carregando(false); atualizarAvatar();
      toast(t('msg_foto_ok'));
    }).catch(function (e) { carregando(false); toast(e.message, 'erro'); });
  };
  img.onerror = function () { URL.revokeObjectURL(url); toast(t('msg_foto_invalida'), 'erro'); };
  img.src = url;
}
