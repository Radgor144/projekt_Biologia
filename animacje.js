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