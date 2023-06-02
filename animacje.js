const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
console.log(hiddenElements);

/*

.show{
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
    }

    .hidden{
    opacity: 0;
    filter:blur(5px);
    transform: translateX(-100%);
    transition:  all 3s;
    }

*/


let hamburger = document.querySelector('.hamburger');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let menu = document.querySelector('.menu');

let clicked = false;

hamburger.addEventListener("click", () => {
    if(clicked == false){
        line1.classList.remove('aline1out');
        line2.classList.remove('aline2out');
        line3.classList.remove('aline3out');

        line1.classList.add('aline1in');
        line2.classList.add('aline2in');
        line3.classList.add('aline3in');

        menu.classList.remove('amenuout');
        menu.classList.add('amenuin');

        clicked = true;
    }
    else{
        line1.classList.remove('aline1in');
        line2.classList.remove('aline2in');
        line3.classList.remove('aline3in');

        line1.classList.add('aline1out');
        line2.classList.add('aline2out');
        line3.classList.add('aline3out');

        menu.classList.remove('amenuin');
        menu.classList.add('amenuout');



        clicked = false;
    }
    
});


let zaloguj = document.querySelector('.zalogujswap');
let zarejestruj = document.querySelector('.zarejestrujswap');
let box3 = document.querySelector('.box3');


zaloguj.addEventListener("click", () => {
    box3.classList.remove('right');
    box3.classList.add('left');

})

zarejestruj.addEventListener("click", () => {
    box3.classList.remove('left');
    box3.classList.add('right');
})