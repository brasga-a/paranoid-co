const categoriasLink = document.getElementById('categorias');
const categoriasDiv = document.getElementById('categorias-expanded');

  categoriasLink.addEventListener('mouseover', () => {
    console.log('entrou');
  });

  categoriasDiv.addEventListener('mouseover', () => {
    console.log('entrou');
  });

  categoriasDiv.addEventListener('mouseout', () => {
    console.log('saiu');
  });

  categoriasLink.addEventListener('mouseout', (event) => {
    if (!categoriasDiv.contains(event.relatedTarget)) {
      categoriasDiv.style.display = 'none'; 
      console.log('saiu');
    }
  });
