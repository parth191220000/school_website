var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var flag_continue=1;
var id;
showSlides();
function showSlides() {
  var i;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className=dots[i].className.replace("active","");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+=" active";
  id=setTimeout(showSlides, 2000);
    
}
function plusSlides(a){
  var i;
  clearTimeout(id);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className=dots[i].className.replace("active","");
  }
  if(a==1){
    slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
    slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+=" active";
  }
  else{
    slideIndex--;
    if(slideIndex==0){
      slideIndex=slides.length;
    }
    slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+=" active";
  }
  flag_continue=0;
  id=setTimeout(showSlides, 2000);
  
}
function currentSlide(c){
  
  clearTimeout(id);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className=dots[i].className.replace("active","");
  }
  
  slides[c-1].style.display = "block";
  dots[c-1].className+=" active";
  id=setTimeout(showSlides, 2000);
}