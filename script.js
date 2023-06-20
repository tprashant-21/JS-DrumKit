var cat = document.getElementById("cat");

function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // always a good thing to remove uncessary steps, if it ain't in the list of divs, don't proceed.
    if(!key) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    cat.classList.add('shake');
    //make a habit of thinking edge cases, here we want to play the sound everytime, we don't want to wait for the play sound to finish
    audio.currentTime = 0;
    audio.play();
}

function removeStyle(e){
    //there are many transition, we want the longest one in the button element that is transform.
    if(e.propertyName !== "transform") return;
    e.target.classList.remove('playing');
    cat.classList.remove('shake');
}

const letters = document.getElementsByClassName("key");

// added EventListener when the transitions end on CSS for the element
Array.from(letters).forEach(key =>
    key.addEventListener("transitionend", removeStyle)
);

// added EventListener whenever a keyboard is pressed
window.addEventListener('keydown', playSound);
