# Gera icon-192.png e icon-512.png (alambique AromaLabTec) usando System.Drawing
Add-Type -AssemblyName System.Drawing

$dir = "G:\Meu Drive\PROJETOS\Claude\AromaLab\AROMALAB-PWA"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

function New-AromaIcon([int]$size, [string]$path) {
  $bmp = New-Object System.Drawing.Bitmap -ArgumentList $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $s = $size / 512.0

  # fundo gradiente escuro
  $rect = New-Object System.Drawing.Rectangle -ArgumentList 0, 0, $size, $size
  $c1 = [System.Drawing.Color]::FromArgb(26, 20, 16)
  $c2 = [System.Drawing.Color]::FromArgb(11, 8, 6)
  $bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $rect, $c1, $c2, ([single]45)
  $g.FillRectangle($bg, $rect)

  function Pt([double]$x, [double]$y) {
    return New-Object System.Drawing.PointF -ArgumentList ([single]($x * $s)), ([single]($y * $s))
  }

  $standPen = New-Object System.Drawing.Pen -ArgumentList ([System.Drawing.Color]::FromArgb(138, 149, 160)), ([single](13 * $s))
  $standPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $standPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

  # tripe
  $g.DrawLine($standPen, (Pt 256 392), (Pt 130 470))
  $g.DrawLine($standPen, (Pt 256 392), (Pt 382 470))

  # anel de suporte
  $ringPen = New-Object System.Drawing.Pen -ArgumentList ([System.Drawing.Color]::FromArgb(138, 149, 160)), ([single](9 * $s))
  $ringRect = New-Object System.Drawing.RectangleF -ArgumentList ([single]((256-100) * $s)), ([single]((332-10) * $s)), ([single](200 * $s)), ([single](20 * $s))
  $g.DrawEllipse($ringPen, $ringRect)

  # corpo do alambique (gradiente azul-branco)
  $corpoRect = New-Object System.Drawing.Rectangle -ArgumentList ([int]((256-94) * $s)), ([int]((272-94) * $s)), ([int](188 * $s)), ([int](188 * $s))
  $corpoC1 = [System.Drawing.Color]::FromArgb(234, 246, 251)
  $corpoC2 = [System.Drawing.Color]::FromArgb(111, 179, 207)
  $corpoBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $corpoRect, $corpoC1, $corpoC2, ([single]90)
  $bodyPen = New-Object System.Drawing.Pen -ArgumentList ([System.Drawing.Color]::FromArgb(77, 139, 168)), ([single](7 * $s))
  $g.FillEllipse($corpoBrush, $corpoRect)
  $g.DrawEllipse($bodyPen, $corpoRect)

  # gargalo
  $gargaloRect = New-Object System.Drawing.Rectangle -ArgumentList ([int](230 * $s)), ([int](152 * $s)), ([int](52 * $s)), ([int](72 * $s))
  $g.FillRectangle($corpoBrush, $gargaloRect)
  $g.DrawRectangle($bodyPen, $gargaloRect)

  # faixa verde
  $verde = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(127, 174, 90))
  $g.FillRectangle($verde, [single](220 * $s), [single](208 * $s), [single](72 * $s), [single](18 * $s))

  # rolha
  $rolha = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(90, 74, 58))
  $g.FillRectangle($rolha, [single](220 * $s), [single](128 * $s), [single](72 * $s), [single](26 * $s))

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $standPen.Dispose(); $ringPen.Dispose(); $bodyPen.Dispose(); $g.Dispose(); $bmp.Dispose()
}

New-AromaIcon 512 (Join-Path $dir "icon-512.png")
New-AromaIcon 192 (Join-Path $dir "icon-192.png")
Write-Output "Icones gerados em $dir"
