const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');


navigator.geolocation.watchPosition((data) =>{
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.choords.heading}deg)`
}, (error) => {
    console.error(error);
    alert('¡¡HEY YOU GOTTA ALLOW THAT TO HAPPEN!!')
})