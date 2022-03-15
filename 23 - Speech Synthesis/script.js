// get the elements
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


// create the dropdown menu by getting the voices
function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

// function that set the voice we selected from the dropdown menu
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// function that stops the play
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver){
        speechSynthesis.speak(msg);
    }
}

// function for the Rate and Pitch filters
function setOption() {
    msg[this.name] = this.value;
    toggle();
}

// Event listeners for all the functions to run
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
