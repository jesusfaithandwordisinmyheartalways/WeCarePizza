





export function display() {

    let accordion = document.getElementsByClassName('accordion')
    for(let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('active')
            let panel = this.nextElementSibling;
            if(panel.style.display === 'block') {
                panel.style.display = 'none'
            } else {
                panel.style.display = 'block'
            }
        })
    }

}

export function displayTwo() {
    let accordionTwo = document.getElementsByClassName('accordion-two')
    for(let a = 0; a < accordionTwo.length; a++) {
        accordionTwo[a].addEventListener('click', function() {
            this.classList.toggle('activeTwo')
            let panelTwo = this.nextElementSibling;
            if(panelTwo.style.display === 'block') {
                panelTwo.style.display = 'none'
            } else {
                panelTwo.style.display = 'block'
            }
        })
    }
}


export function displayThree() {
    let accordionThree = document.getElementsByClassName('accordion-three')
    for(let b = 0; b < accordionThree.length; b++) {
        accordionThree[b].addEventListener('click', function() {
            this.classList.toggle('activeThree')
            let panelThree = this.nextElementSibling;
            if(panelThree.style.display === 'block') {
                panelThree.style.display = 'none'
            } else {
                panelThree.style.display = 'block'
            }
            
        })  
    }
}


export function displayFour() {
    let accordionFour = document.getElementsByClassName('accordion-four')
    for(let c = 0; c < accordionFour.length; c++) {
        accordionFour[c].addEventListener('click', function() {
            this.classList.toggle('activeFour')
            let panelFour = this.nextElementSibling;
            if(panelFour.style.display === 'block') {
                panelFour.style.display = 'none'
            } else {
                panelFour.style.display = 'block'
            }
        })
    }
}


export function displayFive() {
    let accordionFive = document.getElementsByClassName('accordion-five')
    for(let f = 0; f < accordionFive.length; f++) {
        accordionFive[f].addEventListener('click', function() {
            this.classList.toggle('activeFive')
            let panelFive = this.nextElementSibling;
            if(panelFive.style.display === 'block') {
                panelFive.style.display = 'none'
            } else {
                panelFive.style.display = 'block'
            }
        })
    }
}














