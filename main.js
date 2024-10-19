const accordian = document.querySelectorAll('.accordian')

accordianBtns.forEach(btn => {
    btn.addEventListener('click', function (){
        this.classList.toggle('active')
        const panel = this.nextElementSibling
        const plusIcon = this.querySelectorAll('.plus-icon')
        const minusIcon = this.querySelectorAll('.minus-icon')

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }

    })
})