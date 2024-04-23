



/*----------FUNCTIONS FOR ABOUT.JS------------*/

export const healthContent = () => {
    let accordionSix = document.getElementsByClassName('accordion-six');
    for(let k = 0; k < accordionSix.length; k++) {
        accordionSix[k].addEventListener('click', function() {
            this.classList.toggle('activeSix')
            let panelSix = this.nextElementSibling;
            if(panelSix.style.display === 'block') {
                panelSix.style.display = 'none'
            } else {
                panelSix.style.display = 'block'
            }
        })
    }
}





export const contentAccordionThree = () => {
    let accordionSeven = document.getElementsByClassName('accordion-seven')
    for(let j = 0; j < accordionSeven.length; j++) {
        accordionSeven[j].addEventListener('click', function() {
            this.classList.toggle('activeSeven')
            let panelSeven = this.nextElementSibling;
            if(panelSeven.style.display === 'block') {
                panelSeven.style.display = 'none'
            } else {
                panelSeven.style.display = 'block'
            }
        })
    }
}

export const contentAccordionFour = () => {
    let accordionEight = document.getElementsByClassName('accordion-eight')
    for(let l = 0; l < accordionEight.length; l++) {
        accordionEight[l].addEventListener('click', function() {
            this.classList.toggle('activeEight')
            let panelEight = this.nextElementSibling;
            if(panelEight.style.display === 'block') {
                panelEight.style.display = 'none'
            } else {
                panelEight.style.display = 'block'
            }
        })
    }
}


export const contentAccordionFive = () => {
    let accordionNine = document.getElementsByClassName('accordion-nine');
     for(let s = 0; s < accordionNine.length; s++) {
        accordionNine[s].addEventListener('click', function() {
            this.classList.toggle('activeNine')
            let panelNine = this.nextElementSibling;
            if(panelNine.style.display === 'block') {
                panelNine.style.display = 'none'
            } else {
                panelNine.style.display = 'block'
            }
        })
     }
    }









