const buttonOpen = document.getElementById('button-open-catalog');
const dialog = document.getElementById('shoppingCart-dialog');
const dialogText= document.getElementById('shoppingCart-dialog-text');
const buttonClose = document.getElementById('button-close-catalog')

buttonOpen.addEventListener('click', () => {
    const opacityValue = window.getComputedStyle(dialog).getPropertyValue('opacity');
    
    if (opacityValue == 0) {
        dialogText.innerHTML = '';
        const cardData = Array.from(cards).map(card => {
            const shoeName = card.querySelector('.shoe-name').textContent;
            const quantity = card.querySelector('.cont-card-number').textContent;
            if(quantity>0){

                const cardInfoDiv = document.createElement('div');
                cardInfoDiv.classList.add('card-info');
        
                // Crear el nombre del zapato
                const shoeNameDiv = document.createElement('div');
                shoeNameDiv.classList.add('shoe-name');
                shoeNameDiv.textContent = shoeName;
        
                // Crear la cantidad
                const quantityDiv = document.createElement('div');
                quantityDiv.classList.add('shoe-name');
                quantityDiv.textContent = `${quantity}`;
        
                // Agregar los divs al cardInfoDiv
                cardInfoDiv.appendChild(shoeNameDiv);
                cardInfoDiv.appendChild(quantityDiv);
        
                // Insertar el cardInfoDiv en el contenedor shoppingCartDialog
                dialogText.appendChild(cardInfoDiv);
            }
    
    
        });
        
        dialog.style.opacity = 1;
        dialog.style.pointerEvents = 'auto';
    } else {
        dialog.style.opacity = 0;
        dialog.style.pointerEvents = 'auto';
    }

});

buttonClose.addEventListener('click', () => {
    dialog.style.opacity = 0;
    dialog.style.pointerEvents = 'auto';
});