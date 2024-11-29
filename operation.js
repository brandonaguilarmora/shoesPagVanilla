const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const h3 = card.querySelector('#cont'); 
  const addButton = card.querySelector('#add'); 
  const restButton = card.querySelector('#rest'); 
  
    addButton.addEventListener('click', () => {
        h3.textContent = parseInt(h3.textContent) + 1;
    });

  
    restButton.addEventListener('click', () => {
        if (!parseInt(h3.textContent)==0) {
            h3.textContent = parseInt(h3.textContent) - 1;
        }
    }); 
  
});


