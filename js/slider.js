const sliderListElements = document.querySelectorAll('.slider-list')
const buttonWrapperElements = document.querySelectorAll('.slider-actions')

sliderListElements.forEach(list => {
    list.addEventListener('scroll', (e) => {
        const currentSlider = e.target
        const buttonWrapper = currentSlider.closest('.slider-wrapper').querySelector('.slider-actions')
        if(currentSlider.scrollLeft === 0) {
            buttonWrapper.querySelector('[data-direction="left"]').style.display = 'none'
        } else {
            buttonWrapper.querySelector('[data-direction="left"]').style.display = ''
        }

        if(currentSlider.scrollLeft > currentSlider.clientWidth) {
            buttonWrapper.querySelector('[data-direction="right"]').style.display = 'none'
        } else {
            buttonWrapper.querySelector('[data-direction="right"]').style.display = ''
        }
    })
})

buttonWrapperElements.forEach(buttonWrapper => {
    buttonWrapper.addEventListener('click', (e) => {
        if(!e.target.classList.contains('slider-button')) return
        const currentButton = e.target
        const currentSlider = currentButton.closest('.slider-wrapper').querySelector('.slider-list')
        const offset = currentSlider.querySelector('.slider-item').clientWidth + 18

        console.log(currentSlider.querySelector('.slider-item').clientWidth)
        currentSlider.scrollLeft += currentButton.dataset.direction === 'right' ? offset : -offset
    })
})