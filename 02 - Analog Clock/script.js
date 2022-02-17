const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hsHand = document.querySelector('.hs-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hsHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
