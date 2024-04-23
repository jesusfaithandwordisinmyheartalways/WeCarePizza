



/*---------Career.js-----------*/


export const careerContent = () => {
    let accordionTen = document.getElementsByClassName('accordion-content')
    for(let t = 0; t < accordionTen.length; t++) {
        accordionTen[t].addEventListener('click', function() {
            this.classList.toggle('activeSupport')
            let panelTen = this.nextElementSibling;
            if(panelTen.style.display === 'block') {
                panelTen.style.display = 'none'
            } else {
                panelTen.style.display = 'block'
            }
        })
    }
}



export const careerContentTwo = () => {
    let accordionEleven = document.getElementsByClassName('accordion-content-two')
    for(let q = 0; q < accordionEleven.length; q++) {
        accordionEleven[q].addEventListener('click', function() {
            this.classList.toggle('activeSupportTwo')
            let panelEleven = this.nextElementSibling;
            if(panelEleven.style.display === 'block') {
                panelEleven.style.display = 'none'
            } else {
                panelEleven.style.display = 'block'
            }
        })
    }
}


export const careerContentThree = () => {
    let accordionTwelve = document.getElementsByClassName('accordion-content-three')
    for(let s = 0; s < accordionTwelve.length; s++) {
        accordionTwelve[s].addEventListener('click', function() {
            this.classList.toggle('activeSupportThree')
            let panelTwelve = this.nextElementSibling;
            if(panelTwelve.style.display ===  'block') {
                panelTwelve.style.display = 'none'
            } else {
                panelTwelve.style.display = 'block'
            }
        })
    }
}


export const careerContentFour = () => {
    let accordionGroupContent = document.getElementsByClassName('accordion-content-four')
     for(let n = 0 ; n < accordionGroupContent.length; n ++) {
        accordionGroupContent[n].addEventListener('click', function() {
            this.classList.toggle('activeSupportFour')
            let panelAccordionContent = this.nextElementSibling;
            if(panelAccordionContent.style.display === 'block') {
                panelAccordionContent.style.display = 'none'
            } else {
                panelAccordionContent.style.display = 'block'
            }
        })
     }

}
