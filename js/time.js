function getTime () {
    const currentTime = new Date()

    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    }

    const myTime = currentTime.toLocaleTimeString('en-US', options)

    return myTime
}

function displayTime () {
    const timeElement = document.getElementById("my-time")
    timeElement.textContent = getTime()
}

setInterval(displayTime, 1000);

console.log(getTime ())