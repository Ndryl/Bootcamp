document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.drum').forEach(function(element) {
        element.addEventListener('click', function() {
            var key = this.getAttribute('data-key');
            playSound(key);
        });
    });

    document.addEventListener("keydown", function(event){
        var key = event.key.toUpperCase();
        playSound(key);
    });

    function playSound(key) {
        var audio;
        switch (key) {
            case "1":
            case "W":
                audio = new Audio('./sounds/crash.mp3');
                break;
            case "2":
            case "A":
                audio = new Audio('./sounds/kick-bass.mp3');
                break;
            case "3":
            case "S":
                audio = new Audio('./sounds/snare.mp3');
                break;
            case "4":
            case "D":
                audio = new Audio('./sounds/tom-1.mp3');
                break;
            case "5":
            case "J":
                audio = new Audio('./sounds/tom-2.mp3');
                break;
            case "6":
            case "K":
                audio = new Audio('./sounds/tom-3.mp3');
                break;
            case "7":
            case "L":
                audio = new Audio('./sounds/tom-4.mp3');
                break;
            
            default:
                return;
        }
        audio.play();
    }
});
