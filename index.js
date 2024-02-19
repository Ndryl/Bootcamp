document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("keydown", function(event){
        if(event.key === "w" || event.key === "W"){
            var audio = new Audio('./sounds/crash.mp3');

        }
        else if(event.key === "a" || event.key === "A"){
            var audio = new Audio('./sounds/kick-bass.mp3');

        }
        else if(event.key === "s" || event.key === "S"){
            var audio = new Audio('./sounds/snare.mp3');

        }
        else if(event.key === "d" || event.key === "D"){
            var audio = new Audio('./sounds/tom-1.mp3');

        }
        else if(event.key === "j" || event.key === "J"){
            var audio = new Audio('./sounds/tom-2.mp3');

        }
        else if(event.key === "k" || event.key === "K"){
            var audio = new Audio('./sounds/tom-3.mp3');

        }
        else if(event.key === "l" || event.key === "L"){
            var audio = new Audio('./sounds/tom-4.mp3');

        }
        audio.play();
    });
});
