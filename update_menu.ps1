$headerTemplate = @"
  <!-- Spectacular Navigation -->
  <div class="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-screen-2xl z-50 transition-all duration-500">
    <header class="glass-header rounded-2xl border border-red-900/30 w-full px-6 md:px-12 py-4 flex justify-between items-center relative group">
      <!-- Glow effect behind header -->
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <input type="checkbox" id="mobile-menu" class="hidden peer">
      <div class="flex items-center gap-4 relative z-10">
        <label for="mobile-menu" class="md:hidden cursor-pointer hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-red-500 hover:text-red-400 text-3xl">menu</span>
        </label>
        
        <a href="index.html" class="hover:scale-105 transition-transform duration-300">
          <img alt="COR-MAG 3D" class="h-10 object-contain drop-shadow-[0_0_8px_rgba(255,0,0,0.3)]" src="images/cor-mag3d.png"/>
        </a>
      </div>
      
      <nav class="hidden md:flex gap-10 relative z-10">
        <a class="nav-link {INDEX_ACTIVE}" href="index.html">Inicio</a>
        <a class="nav-link {CATALOGO_ACTIVE}" href="catalogo.html">Catálogo</a>
        <a class="nav-link {PINTURA_ACTIVE}" href="pintura.html">Encargos</a>
        <a class="nav-link {CONTACTO_ACTIVE}" href="contacto.html">Información</a>
      </nav>
      
      <!-- Translucent Dropdown Menu -->
      <div class="absolute top-full left-0 right-0 mt-3 bg-black/80 backdrop-blur-xl border border-red-900/30 rounded-2xl pt-2 pb-8 px-4 z-[100] transition-all duration-300 opacity-0 pointer-events-none -translate-y-4 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0 flex flex-col items-center gap-6 md:hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
        <label for="mobile-menu" class="self-end cursor-pointer hover:rotate-90 transition-transform duration-300 px-2 py-1">
          <span class="material-symbols-outlined text-neutral-400 hover:text-red-500 text-3xl">close</span>
        </label>
        <a class="text-xl nav-link {INDEX_ACTIVE}" href="index.html">Inicio</a>
        <a class="text-xl nav-link {CATALOGO_ACTIVE}" href="catalogo.html">Catálogo</a>
        <a class="text-xl nav-link {PINTURA_ACTIVE}" href="pintura.html">Encargos</a>
        <a class="text-xl nav-link {CONTACTO_ACTIVE}" href="contacto.html">Información</a>
      </div>

      <div class="flex items-center gap-6 relative z-10">
        <span class="material-symbols-outlined text-neutral-400 hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] cursor-pointer transition-all hidden sm:block">search</span>
        <span class="material-symbols-outlined text-red-600 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] text-3xl cursor-pointer transition-all hover:scale-110">shopping_cart</span>
      </div>
    </header>
  </div>
"@

Get-ChildItem -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    
    # Active state flags
    $idxAct = "nav-link-inactive"; $catAct = "nav-link-inactive"; $pinAct = "nav-link-inactive"; $conAct = "nav-link-inactive"
    if ($_.Name -eq "index.html") { $idxAct = "nav-link-active" }
    elseif ($_.Name -eq "catalogo.html") { $catAct = "nav-link-active" }
    elseif ($_.Name -eq "pintura.html") { $pinAct = "nav-link-active" }
    elseif ($_.Name -eq "contacto.html") { $conAct = "nav-link-active" }
    
    $newHeader = $headerTemplate.Replace("{INDEX_ACTIVE}", $idxAct).Replace("{CATALOGO_ACTIVE}", $catAct).Replace("{PINTURA_ACTIVE}", $pinAct).Replace("{CONTACTO_ACTIVE}", $conAct)
    
    # regex replace everything from <!-- Spectacular Navigation --> down to </div> right before <main
    $content = $content -replace '(?s)<!-- Spectacular Navigation -->.*?</div>\s*<main', "$newHeader`r`n`r`n  <main"
    
    Set-Content -Path $_.FullName -Value $content -Encoding UTF8
}
echo "Done"
