# Gera os icones do PWA compondo logo.png (fundo real transparente).
#
# icon-192.png / icon-512.png: fundo TRANSPARENTE (usados no manifest com
# purpose "any" - favicon da aba e icone instalado no Android). Sem fundo
# solido de proposito, a pedido do usuario (2026-07-15) - deixaram de ser
# "maskable" (icone maskable EXIGE fundo opaco pro SO recortar em
# circulo/squircle sem artefato; nao da pra ter os dois ao mesmo tempo no
# mesmo arquivo).
#
# icon-apple-touch.png: fundo OPACO (gradiente escuro do tema), so pro iOS
# (apple-touch-icon) - iOS preenche transparencia com preto solido se nao
# tiver fundo, entao esse aqui continua com fundo por necessidade tecnica,
# nao por escolha de design.
Add-Type -AssemblyName System.Drawing

$dir = "G:\Meu Drive\PROJETOS\Claude\AromaLab\AROMALAB-PWA"
$logoPath = Join-Path $dir "logo.png"

function New-AromaIcon([int]$size, [string]$path, [double]$fracConteudo, [bool]$comFundo) {
  $bmp = New-Object System.Drawing.Bitmap -ArgumentList $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  if ($comFundo) {
    # fundo gradiente escuro (mesmo tom do tema do app)
    $rect = New-Object System.Drawing.Rectangle -ArgumentList 0, 0, $size, $size
    $c1 = [System.Drawing.Color]::FromArgb(26, 20, 16)
    $c2 = [System.Drawing.Color]::FromArgb(11, 8, 6)
    $bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $rect, $c1, $c2, ([single]45)
    $g.FillRectangle($bg, $rect)
  }
  # sem $comFundo, o bitmap novo (Format32bppArgb) ja nasce 100% transparente

  # logo centralizado, ocupando fracConteudo da menor dimensao (safe zone)
  $logo = [System.Drawing.Image]::FromFile($logoPath)
  $maxLado = $size * $fracConteudo
  $escala = [Math]::Min($maxLado / $logo.Width, $maxLado / $logo.Height)
  $w = $logo.Width * $escala
  $h = $logo.Height * $escala
  $x = ($size - $w) / 2
  $y = ($size - $h) / 2
  $g.DrawImage($logo, [single]$x, [single]$y, [single]$w, [single]$h)

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $logo.Dispose(); $g.Dispose(); $bmp.Dispose()
}

# 0.74 = conteudo ocupa 74% do canvas (26% de margem)
New-AromaIcon 512 (Join-Path $dir "icon-512.png") 0.74 $false
New-AromaIcon 192 (Join-Path $dir "icon-192.png") 0.74 $false
New-AromaIcon 180 (Join-Path $dir "icon-apple-touch.png") 0.74 $true
Write-Output "Icones gerados em $dir"
