const buttonWrapperElements = document.querySelectorAll('.slider-actions')

buttonWrapperElements.forEach(buttonWrapper => {
    buttonWrapper.addEventListener('click', (e) => {
        if(!e.target.classList.contains('slider-button')) return
        const currentButton = e.target
        const currentSlider = currentButton.closest('.slider-wrapper').querySelector('.slider-list')
        const offset = currentSlider.querySelector('.slider-item').clientWidth + 18

        if(currentSlider.scrollLeft === 0) {
            currentButton.closest('.slider-actions').querySelector('[data-direction="left"]').style.display = 'none'
        } else {
            currentButton.closest('.slider-actions').querySelector('[data-direction="left"]').style.display = ''
        }

        if(currentSlider.scrollLeft > currentSlider.clientWidth) {
            currentButton.closest('.slider-actions').querySelector('[data-direction="right"]').style.display = 'none'
        } else {
            currentButton.closest('.slider-actions').querySelector('[data-direction="right"]').style.display = ''
        }

        console.log(currentSlider.scrollLeft, offset)

        currentSlider.scrollLeft += currentButton.dataset.direction === 'right' ? offset : -offset
    })
})