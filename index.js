document.addEventListener('DOMContentLoaded', function() {
    let title = document.getElementById('title');
    title.classList.add('animate__animated', 'animate__headShake');
});



 let totalButtons = document.querySelectorAll('.drum').length;

 for(let i = 0 ; i < totalButtons ; i++){

    document.querySelectorAll('p')[i].addEventListener('click',function(){
        let buttonSelected = this.innerHTML;
        makeSound(buttonSelected);
        currentButton(buttonSelected);
        animateTitle();
        
    });
 }
 document.addEventListener('keydown', function(event){
     makeSound(event.key);
     currentButton(event.key);
     animateTitle();
 });

function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio('sounds/KICK1.mp3');
            audio.play();
            audio.preload = 'auto';
            // this.style.color = 'white';
          break;
        case 'e':
            var audio = new Audio('sounds/SNARE 2.mp3');
            audio.play();
            break;
        case 'r':
            var audio = new Audio('sounds/HI HATS 2.mp3');
            audio.play();
            break;
        case 't':
            var audio = new Audio('sounds/RIDE 2.mp3');
            audio.play();
            break;
        case 'y':
            var audio = new Audio('sounds/CHINA 2.mp3');
            audio.play();
            break;
        case 'u':
            var audio = new Audio('sounds/TOM.mp3');
            audio.play();
            break;
        
         case 'i':
            var audio = new Audio('sounds/FLOOR TOM 2.mp3');
            audio.play();
            break;
        default: console.log(buttonSelected);
            
        
    }
}
 function currentButton(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('animate__animated', 'animate__pulse','pressed');

    setTimeout(function(){
        activeButton.classList.remove('animate__animated', 'animate__pulse','pressed'); 
    },300); 
 }
 function animateTitle() {
    let title = document.getElementById('title');
    title.classList.remove('animate__animated', 'animate__headShake'); // Reset the animation
    void title.offsetWidth; // Trigger reflow
    title.classList.add('animate__animated', 'animate__headShake'); // Add the animation back
}
 
//  var audio = new Audio('sounds/snare.mp3');
//         audio.play();
// this.style.color = "white"



