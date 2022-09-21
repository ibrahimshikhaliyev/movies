const logInBtn=document.querySelector('#log-in');
const signInBtn=document.querySelector('#sign-in');
const podlojaRegister=document.querySelectorAll('.podloja-for-register-cards');
const registerCards=document.querySelectorAll('.register-card')
const visibleIcon=document.querySelectorAll('.eye-visible-icon');
const invisibleIcon=document.querySelectorAll('.eye-invisible-icon');
const passwordIputLogIn=document.querySelector('#password-log-in');
const cancelIcon=document.querySelectorAll('.register-cancel-icon');
const photosCards=document.querySelector('.photos-card');
const hobbieBtns=document.querySelectorAll('.hobbie-btn');
const homeBtn= document.querySelector('#home-btn');
const logoText= document.querySelector('#logo');
// ### open logIn card ###


logInBtn.addEventListener('click' ,e=>{
    podlojaRegister[0].style.display='block';
})
// ############# open sign-in card ##########

signInBtn.addEventListener('click' ,e=>{
  podlojaRegister[1].style.display='block';
})

/*### tooglem the vision on password */ 
visibleIcon.forEach(element=>{
  element.addEventListener("click",e=>{
    visibleToggle(e.target,element.parentNode.id);
  })
})

invisibleIcon.forEach(element=>{
  element.addEventListener("click",e=>{
    visibleToggle(e.target,element.parentNode.id);
  })
})

// this functio toggle the visibility of password in sing in and log in cards
function visibleToggle(element,registerId) {
    if(element.classList.contains("eye-visible-icon")){
        document.getElementById(`${registerId}`).querySelector('.password-register').setAttribute("type","text");
        document.getElementById(`${registerId}`).querySelector('.eye-invisible-icon').style.display="block";
        document.getElementById(`${registerId}`).querySelector('.eye-visible-icon').style.display="none";
    }else if(element.classList.contains("eye-invisible-icon")){
      document.getElementById(`${registerId}`).querySelector('.password-register').setAttribute("type","password");
        document.getElementById(`${registerId}`).querySelector('.eye-invisible-icon').style.display="none";
        document.getElementById(`${registerId}`).querySelector('.eye-visible-icon').style.display="block";
    }
}


//  ####toggle the closing of log in card###
podlojaRegister.forEach(item=>{
  cancelIcon.forEach(element=>{
    document.addEventListener('click',e=>{
      if(e.target == item || e.target == element){
          item.style.display='none';
          item.querySelector('.register-card').querySelector('form').reset();
      }
    })
  })
})


let prev=document.querySelector('.prev');
let next= document.querySelector('.next');

let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  plusSlides(1);
}, 5000);

prev.addEventListener('click',e=>{
    plusSlides(-1);

})
-
next.addEventListener('click',e=>{
    plusSlides(1);
})
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  slides.forEach(e=>{
    e.style.display='none';
  })
  dots.forEach(e=>{
    e.className = e.className.replace(" active", "");
  })
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// #### photos card part ######

hobbieBtns[0].addEventListener('click' ,e=>{
  photosCards.style.display="grid";
})

//  ##### home btn , scroll to the home while clicking on "home " btn

homeBtn.addEventListener('click' ,e=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


// scroll to the top when clicking on the logo "shikhaliyevv" 
logoText.addEventListener('click' ,e=>{
  document.body.scrollTop=0;// for safari
  document.documentElement.scrollTop=0;// for chorome , firefox , opera
})