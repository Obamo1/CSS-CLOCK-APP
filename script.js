function setClock() { 
    const hourHand = document.querySelector('.hours'); 
    const minHand = document.querySelector('.minutes'); 
    const secondHand = document.querySelector('.seconds'); 
    const now = new Date(); 
 
    // Offset the initial 90 degrees 
    const hoursDegrees = getHoursDegrees(now); 
    const minDegrees = getMinDegrees(now); 
    const secondsDegrees = getSecondsDegrees(now); 
 
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
    minHand.style.transform = `rotate(${minDegrees}deg)`; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
 
    function getHoursDegrees(date) { 
      return (((date.getHours() / 12) * 360) + 90 + (getMinDegrees(date) / 12)); 
    } 
 
    function getMinDegrees(date) { 
      return (((date.getMinutes() / 60) * 360) + 90 + (getSecondsDegrees(date) / 60)); 
    } 
 
    function getSecondsDegrees(date) { 
      return (((date.getSeconds() / 60) * 360) + 90); 
    } 
  } 
 
  setInterval(setClock, 1000);