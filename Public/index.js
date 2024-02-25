const sticks = document.getElementById('q');
const hiHat = document.getElementById('w');
const crash = document.getElementById('e');
const ride = document.getElementById('a');
const tomLo = document.getElementById('s');
const tomMid = document.getElementById('d');
const tomHi = document.getElementById('z');
const bass = document.getElementById('x');
const snare = document.getElementById('c')

const tracks = [sticks, hiHat, crash, ride, tomLo, tomMid, tomHi, snare, bass]
function playClip(el){
    const audioElement = new Audio(el.src);
    document.addEventListener('click', audioElement.play)
}

