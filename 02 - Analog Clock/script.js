const secondsHand = document.querySelector('#seconds')
const minutesHand = document.querySelector('#minutes');
const hoursHand = document.querySelector('#hours');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360;

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
