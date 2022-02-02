fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=travel")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('author').textContent = `By: ${data.user.name}`
    
})
.catch(err => {
     document.body.style.backgroundImage = `url( https://images.unsplash.com/photo-1560251085-d9c1dc542960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE5MDY2Njg&ixlib=rb-1.2.1&q=80&w=1080)`
     document.getElementById("author").textContent = `By: amirali mirhashemian`
   

})

fetch('https://api.coingecko.com/api/v3/coins/ethereum')
 .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
.then(data => {
    document.getElementById('eth-top').innerHTML =`
    <img src=${ data.image.small} alt="">
    <span> ${ data.name}</span>
    `
        
        document.getElementById("eth").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    
    
})
.catch(err => console.error("Something went wrong"))



function getCurrentTime() {
    const date = new Date()
    document.querySelector(".time").textContent = date.toLocaleTimeString("fr-fr", {timeStyle: "medium"})
}

setInterval(getCurrentTime(), 1000)


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            console.log(data.main.temp)
            console.log(data.name)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('weather').innerHTML=`
           <img src=${iconUrl} alt="">
           <p class="weather-temp">${Math.round(data.main.temp)}º</p>
           <p class="weather-city">${data.name}</p>`
        })
        .catch(err => console.error(err))
});



























