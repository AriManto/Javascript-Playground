let cards = document.querySelectorAll('.card');
let c2 = document.querySelector('#c2');
//
//offsetTop

window.addEventListener('scroll', function(e){
    let SCROLL = e.srcElement.scrollingElement;
    console.log("Top: "+SCROLL.scrollTop);
    cards.forEach(card => {
        if(card.classList.contains('hiddenLeft') || card.classList.contains('hiddenRight')){
            if(SCROLL.scrollTop + 400>=card.offsetTop){
                card.classList.remove('hiddenLeft');
                card.classList.remove('hiddenRight');
                card.classList.add('shown');
            };
        };
    });
});