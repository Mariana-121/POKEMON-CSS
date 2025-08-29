function updatePokemonLayout(pokemonData, nameKey) {
  const nombreElement = document.getElementById('nombrePokemon');
  const imagenElement = document.getElementById('imagenPokemon');
  const descripcionElement = document.getElementById('descripcionPokemon');
  const curiosidadesElement = document.getElementById('curiosidadesPokemon');
  const body = document.body;
  const nav = document.querySelector('nav');
  const titulo = document.querySelector('nav h1');

  const estilosPorPokemon = {
    goomy: {
      fondo: '#f0e6ff',
      nav: '#966fd6',
      textoNav: 'white'
    },
    lucario: {
      fondo: '#e6e6f0',
      nav: '#293e59',
      textoNav: '#e6d7a7'
    },
    ledyba: {
      fondo: '#fff8e6',
      nav: '#b92222ff',
      textoNav: 'white'
    }
  };

  const estilos = estilosPorPokemon[nameKey];
  if (estilos) {
    body.style.backgroundColor = estilos.fondo;
    nav.style.backgroundColor = estilos.nav;
    titulo.style.color = estilos.textoNav;
  }

  nombreElement.textContent = pokemonData.forms[0].name.toUpperCase();
  imagenElement.src = pokemonData.sprites.other['official-artwork'].front_default;
  imagenElement.alt = pokemonData.name;
  descripcionElement.textContent = descripciones[nameKey] || "Descripción no disponible.";
  
  curiosidadesElement.innerHTML = '';
  (curiosidades[nameKey] || []).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    curiosidadesElement.appendChild(li);
  });
}

