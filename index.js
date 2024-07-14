function getTime(){
    const now = new Date();

    let hours = now.getHours();
    hours = hours % 12;
    if (hours === 0){
        hours = 12;
    }
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const clockString = document.querySelector('.clock')

    let timeString = `${hours}:${minutes}:${seconds}`;

    clockString.innerHTML = timeString;

}
setInterval(getTime ,1000);
