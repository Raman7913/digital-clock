function getTime(){
    const now = new Date();

    let meridiem;
    let hours = now.getHours();
    meridiem = hours>=12 ? 'PM' : 'AM'
    hours = hours % 12;
    if (hours === 0){
        hours = 12;
    }
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const clockString = document.querySelector('.clock')

    let timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    clockString.innerHTML = timeString;

}
setInterval(getTime ,1000);
