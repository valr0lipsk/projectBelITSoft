function addHover(elem, className){
    elem.onmouseover = function()
    {
        elem.classList.add(className);
    }
}

function removeHover(elem, className){
    elem.onmouseout = function()
    {
        elem.classList.remove(className)
    }
}

// //Фиксированный хэдер
// window.onscroll = function()
// {
//     let header = document.querySelector('.header');
//     let headerBody = document.querySelector('.header__body')
//     if (window.pageYOffset == 0)
//     {
//         header.classList.remove('fixed');
//         headerBody.style.backgroundColor = 'white';
//     }
//     else
//     {
//         header.classList.add('fixed');
//         headerBody.style.backgroundColor = '#F4EC98';
//     }
// }

//Бургер
let burger = document.querySelector('.header__icon');
burger.onclick = function(){
    document.querySelector('.header__menu').classList.toggle('block');
    if (document.querySelector('.header__icon > img').getAttribute('src') == "./img/burger 1.png")
    {
        document.querySelector('.header__icon > img').setAttribute('src', './img/Close.png')
    }
    else
    {
        document.querySelector('.header__icon > img').setAttribute('src', "./img/burger 1.png")
    }
}

//Кнопки в блоке Slide 
let slideButtons = document.querySelectorAll('.slide__button');
slideButtons.forEach(button =>{
    addHover(button, 'slide__button-hover');
    removeHover(button, 'slide__button-hover')
})


//Ховер в блоке Services
const servicesItems = document.querySelectorAll('.services__item');
servicesItems.forEach(item => {
    item.onmouseover = function(){
        item.classList.add('services__item-hover');
        let img = item.firstElementChild.firstElementChild;
        img.setAttribute('src', './img/smartphone-white 1.png');
    }
    item.onmouseout = function(){
        item.classList.remove('services__item-hover');
        let img = item.firstElementChild.firstElementChild;
        img.setAttribute('src', './img/smartphone-black 1.png');
    }
})

//Показ всех карточек в блоке Services
servicesButton = document.querySelector('.services__button');
servicesButton.onclick = function(){
    if (window.innerWidth <= 767){
        servicesItems.forEach(item => item.classList.toggle('flex'));
        servicesButton.textContent = (!servicesItems[1].classList.contains('flex')) ? 'View all' : 'Hide';
    }
}

//Переключение между карточками в team
let circles = document.querySelectorAll('.slider__cirle');
let members = document.querySelectorAll('.team__member');
circles.forEach(circle =>{
    if(circle.id == 'circle2')
    {
        circle.onclick = function(){
            if (window.innerWidth <= 820)
            {
                circles.forEach(circle => {
                    if (circle != this)
                    {
                        circle.style.backgroundColor = '#00897B'
                    }
                })
                this.style.backgroundColor = '#3949AB';
                members.forEach(member => {
                    if (member.classList.contains('flex'))
                    {
                        member.classList.remove('flex');
                    }
                    member.classList.add('none');
                });
                document.querySelector('#member2').classList.add('flex');
                document.querySelector('#member2').classList.remove('none'); 
            }
        }
    }
    if (circle.id == 'circle1')
    {
        circle.onclick = function(){
            if (window.innerWidth <= 820)
            {
                circles.forEach(circle => {
                    if (circle != this)
                    {
                        circle.style.backgroundColor = '#00897B'
                    }
                })
                this.style.backgroundColor = '#3949AB';
                members.forEach(member => {
                    if (member.classList.contains('flex'))
                    {
                        member.classList.remove('flex');
                    }
                    member.classList.add('none');
                });
                document.querySelector('#member1').classList.add('flex');
                document.querySelector('#member1').classList.remove('none');
            }
        }
    }   
    if (circle.id == 'circle3')
    {
        circle.onclick = function(){
            if (window.innerWidth <= 820)
            {
                circles.forEach(circle => {
                    if (circle != this)
                    {
                        circle.style.backgroundColor = '#00897B'
                    }
                })
                this.style.backgroundColor = '#3949AB';
                members.forEach(member => {
                    if (member.classList.contains('flex'))
                    {
                        member.classList.remove('flex');
                    }
                    member.classList.add('none');
                });
                document.querySelector('#member3').classList.add('flex');
                document.querySelector('#member3').classList.remove('none');
            }
        }
    }
})



//Тень в прайсе
let priceButtons = document.querySelectorAll('.price__button');
let pricings = document.getElementsByClassName('pricing__price');
for (let i = 0; i < pricings.length; i++)
{
    addHover(pricings[i], 'shadow');
    removeHover(pricings[i], 'shadow');
}

//Ховер кнопок в прайсе
priceButtons.forEach(but => {
    addHover(but, 'price__button-hover');
    removeHover(but, 'price__button-hover')
})

//Разворот элементов в прайсе 
document.querySelector('#arrow1').onclick = function(){
    document.querySelector('#body1').classList.toggle('flex');
    if (document.querySelector('#arrow1 > button > img').getAttribute('src') == "./img/arrow white.png")
    {
        document.querySelector('#arrow1 > button > img').setAttribute('src', "./img/arrow-top white.png")
    }
    else
    {
        document.querySelector('#arrow1 > button > img').setAttribute('src', "./img/arrow white.png")
    }
}

document.querySelector('#arrow2').onclick = function(){
    document.querySelector('#body2').classList.toggle('flex');
    if (document.querySelector('#arrow2 > button > img').getAttribute('src') == "./img/arrow white.png")
    {
        document.querySelector('#arrow2 > button > img').setAttribute('src', "./img/arrow-top white.png")
    }
    else
    {
        document.querySelector('#arrow2 > button > img').setAttribute('src', "./img/arrow white.png")
    }
}

document.querySelector('#arrow3').onclick = function(){
    document.querySelector('#body3').classList.toggle('flex');
    if (document.querySelector('#arrow3 > button > img').getAttribute('src') == "./img/arrow white.png")
    {
        document.querySelector('#arrow3 > button > img').setAttribute('src', "./img/arrow-top white.png")
    }
    else
    {
        document.querySelector('#arrow3 > button > img').setAttribute('src', "./img/arrow white.png")
    }
}


//Проверка полей
let formSubmit = document.querySelector('.form__button');
formSubmit.disabled = true;
document.querySelector('[name="name"]').onchange = function()
{
    if (document.querySelector('[name="email"]').value != '' && document.querySelector('[name="phone"]').value != '')
    {
        formSubmit.disabled = false;
    }
}
document.querySelector('[name="phone"]').onchange = function()
{
    if (document.querySelector('[name="name"]').value != '' && document.querySelector('[name="email"]').value != '')
    {
        formSubmit.disabled = false;
    }
}
document.querySelector('[name="email"]').onchange = function()
{
    if (document.querySelector('[name="name"]').value != '' && document.querySelector('[name="phone"]').value != '')
    {
        formSubmit.disabled = false;
    }
}


//Разворот элементов
document.querySelector('.about__arrow').onclick = function()
{
    let block = document.querySelector('.about__block');
    block.classList.toggle('flex');
    if (document.querySelector('.about__arrow  > button > img').getAttribute('src') == "./img/arrow black.png")
    {
        document.querySelector('.about__arrow > button > img').setAttribute('src', "./img/arrow-top black.png")
    }
    else
    {
        document.querySelector('.about__arrow > button > img').setAttribute('src', "./img/arrow black.png")
    }
}

document.querySelector('.services__arrow').onclick = function()
{
    let block = document.querySelector('.services__block');
    let button = document.querySelector('.services__button');
    block.classList.toggle('flex');
    button.classList.toggle('block');
    if (document.querySelector('.services__arrow  > button > img').getAttribute('src') == "./img/arrow black.png")
    {
        document.querySelector('.services__arrow > button > img').setAttribute('src', "./img/arrow-top black.png")
    }
    else
    {
        document.querySelector('.services__arrow > button > img').setAttribute('src', "./img/arrow black.png")
    }
}

document.querySelector('.pricing__arrow').onclick = function()
{
    let block = document.querySelector('.pricing__block');
    block.classList.toggle('flex');
    if (document.querySelector('.pricing__arrow  > button > img').getAttribute('src') == "./img/arrow black.png")
    {
        document.querySelector('.pricing__arrow > button > img').setAttribute('src', "./img/arrow-top black.png")
    }
    else
    {
        document.querySelector('.pricing__arrow > button > img').setAttribute('src', "./img/arrow black.png")
    }
}

document.querySelector('.team__arrow').onclick = function()
{
    let block = document.querySelector('.team__block');
    let slider = document.querySelector('.team__slider');
    block.classList.toggle('flex');
    slider.classList.toggle('flex');
    if (document.querySelector('.team__arrow  > button > img').getAttribute('src') == "./img/arrow black.png")
    {
        document.querySelector('.team__arrow > button > img').setAttribute('src', "./img/arrow-top black.png")
    }
    else
    {
        document.querySelector('.team__arrow > button > img').setAttribute('src', "./img/arrow black.png")
    }
}

document.querySelector('.blog__arrow').onclick = function()
{
    let block = document.querySelector('.blog__block');
    let button = document.querySelector('.blog__button');
    block.classList.toggle('flex');
    button.classList.toggle('block');
    if (document.querySelector('.blog__arrow  > button > img').getAttribute('src') == "./img/arrow black.png")
    {
        document.querySelector('.blog__arrow > button > img').setAttribute('src', "./img/arrow-top black.png")
    }
    else
    {
        document.querySelector('.blog__arrow > button > img').setAttribute('src', "./img/arrow black.png")
    }
}

document.querySelector('.contact__arrow').onclick = function()
{
    let block = document.querySelector('.contact__block');
    let form = document.querySelector('.contact__form');
    block.classList.toggle('flex');
    form.classList.toggle('flex');
    if (document.querySelector('.contact__arrow  > button > img').getAttribute('src') == "./img/arrow 1.png")
    {
        document.querySelector('.contact__arrow > button > img').setAttribute('src', "./img/arrow-top white.png")
    }
    else
    {
        document.querySelector('.contact__arrow > button > img').setAttribute('src', "./img/arrow 1.png")
    }

}



