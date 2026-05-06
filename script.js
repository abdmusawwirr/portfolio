//Select the button 
const hireBtn = document.querySelector('#about a');
//Select the Navbar
const navbar = document.querySelector('header');
// 1. Alert when hire me is clicked
hireBtn.addEventListener('click',
    function(){
        alert('Thank you for your interest! Scrolling to contact...');});
//2. change navbar color when scrolling
window.addEventListener('scroll',
    function(){
        if (window.scrollY> 50){
            navbar.style.backgroundColor ='#f4a261';
        } else{
            navbar.style.backgroundColor ='#1a1a2e';
        }
    }
);
//3. Animate skills on load 
const skills = document.querySelectorAll('#skills li');
skills.forEach(function(skill, index){
    skill.style.opacity ='0';
    skill.style.transform ='translateY(20px)';
    skill.style.transition ='all 0.5s ease';
    setTimeout(function(){
        skill.style.opacity ='1';
        skill.style.transform ='translateY(0)';
    }, index *200);
});

const nameEl = document.querySelector('#about h1');
const fullName='Hi, I\'m ABDUL SAMEER';
nameEl.textContent='';

let i=0;
function typeWriter(){
    if(i<fullName.length){
        nameEl.textContent += fullName[i];
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();