const TempLode = () =>{
                
    let temperature=document.getElementById('temp');
     temperature.innerHTML='&#xf2cb';
    setTimeout(() => {
    temperature.innerHTML="&#xf2ca";
    temperature.style.color="#f8b627";
    },1000);
    
    setTimeout(() => {
    temperature.innerHTML="&#xf2c9";
    },2000);
    
    setTimeout(() => {
    temperature.innerHTML="&#xf2c8";
    },3000);
    setTimeout(() => {
    temperature.innerHTML="&#xf2c7";
    temperature.style.color="#d63031";
    },4000);
    }
    TempLode();
setInterval(() => {
    TempLode()
}, 5000);