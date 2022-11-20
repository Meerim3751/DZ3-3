const tabItems = document.querySelectorAll('.tabheader__item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabMain = document.querySelector('.tabheader__items')


const hideContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabItems[i].classList.add('tabheader__item_active')
}
hideContent()
showContent()

tabMain.addEventListener('click', (event) => {
    const target = event.target
    if(!target.classList.contains('tabheader__item_active')) {
     tabItems.forEach((tab,idx) => {
         if (target === tab) {
             hideContent()
             showContent(idx)
         }
     })
    }

})

//Задание3

const modal = document.querySelector('.modal')
const btnOpen= document.querySelector('.btn_white')

function openModal(){
    modal.classList.add('show')
    document.body.style.overflow ='hidden'
}
btnOpen.addEventListener('click',openModal)
function  closeModal(){
    modal.classList.remove('show')
    document.body.style.overflow ='auto'
}
modal.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.classList.contains('modal__close') || e.target.classList.contains('modal')){
        closeModal()
    }

})
