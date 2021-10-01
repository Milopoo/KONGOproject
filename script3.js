//Galeria detalle gorra
let thumbnails = document.getElementsByClassName('thumbnail')
    
let activeImages = document.getElementsByClassName('active2')

for (var i=0; i < thumbnails.length; i++){

  thumbnails[i].addEventListener('mouseover', function(){
    console.log(activeImages)
    
    if (activeImages.length > 0){
      activeImages[0].classList.remove('active2')
    }
    

    this.classList.add('active2')
    document.getElementById('featured').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider2').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider2').scrollLeft += 180
})