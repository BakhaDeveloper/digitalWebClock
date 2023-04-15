function displayClock() {
    const time = document.querySelector('.screen');
    const currentDate = document.querySelector('.current--date');

    const months = [
        'January','February','March','April','May','June','July','August','September','October','November',
        'Decebmer',
    ]
    
    const weekDays = [
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
    ]

    const dates = new Date()
    const today = dates.getDate() < 10 ? '0' + dates.getDate() : dates.getDate()
    const year =  dates.getFullYear()
    const month1 = dates.getMonth();
    const weekdays = dates.getDay() - 1
    const hour = dates.getHours() < 10 ? '0' + dates.getHours() : dates.getHours()
    const minute = dates.getMinutes() < 10 ? '0' + dates.getMinutes(): dates.getMinutes()
    const second = dates.getSeconds() < 10 ? '0' + dates.getSeconds(): dates.getSeconds()
    
    
    const fullTime = `${hour}:${minute}:${second}`

    currentDate.innerHTML = `${weekDays[weekdays]}, ${today} ${months[month1]}, ${year}`
    time.innerHTML = fullTime;


}

setInterval(displayClock, 10)