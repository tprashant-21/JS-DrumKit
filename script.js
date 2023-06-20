const keys = document.querySelectorAll('.key');

const audio = document.getElementsByTagName('audio');

window.addEventListener('keydown', function(e) {
    for (key of keys){
        if(key.getAttribute("data-key") == e.keyCode){
            key.classList.add("playing");
            for (sound of audio){
                if (sound.getAttribute("data-key") == e.keyCode){
                    sound.play();
                }
            }
        }
    }
});

window.addEventListener('keyup', function(e) {
    for (key of keys){
        key.classList.remove("playing");  
    }
});

