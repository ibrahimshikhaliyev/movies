
//slider of movie cards functioning the navigation buttons

const rightBtn=document.querySelector('#arrow-right');
const leftBtn=document.querySelector('#arrow-left');
const slides=document.querySelectorAll('.slides');
const indicatorDots=document.querySelectorAll('.dots');
let slideIndex=0;

for(let i=0;i<indicatorDots.length;i++){
    indicatorDots[i].addEventListener('click' ,e=>{
        showSlide(i);
        dotActivate(i);
    })
}

rightBtn.addEventListener('click' ,e=>{
    nextSlide();
})
leftBtn.addEventListener('click' ,e=>{
    previousSlide();
})
function nextSlide(){
    slideIndex++;
    if(slideIndex<0){
        slideIndex=2;
    }else if(slideIndex>2){
        slideIndex=0;
    }
    console.log(slideIndex)
    dotActivate(slideIndex);
    showSlide(slideIndex);
    
}
function previousSlide(){
    slideIndex--;
    if(slideIndex<0){
        slideIndex=2;
    }else if(slideIndex>2){
        slideIndex=0;
    }
    console.log(slideIndex)
    dotActivate(slideIndex);
    showSlide(slideIndex);
}

function showSlide(slideIn){
    slides.forEach(e => {
        e.style.display='none';
    })
    slides[slideIn].style.display='flex';
}

function dotActivate(dotIndex){
    indicatorDots.forEach(item=>{
        item.classList.remove('active');
        item.classList.add('passive');
    })
    indicatorDots[dotIndex].classList.add('active');
    indicatorDots[dotIndex].classList.remove('passive');
}