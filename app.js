var container=document.querySelector('.container');
var leftPage=document.getElementById('leftPage')
var rightPage=document.getElementById('rightPage')

leftPage.addEventListener('mouseenter' , (e)=>{
    container.classList.add('hover-left');

})
leftPage.addEventListener('mouseleave' , (e)=>{
    container.classList.remove('hover-left');

})

rightPage.addEventListener('mouseenter' , (e)=>{
    container.classList.add('hover-right');

})
rightPage.addEventListener('mouseleave' , (e)=>{
    container.classList.remove('hover-right');

})


