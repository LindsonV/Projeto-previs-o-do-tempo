const key ='e887bd9e359f3436e4b46c0bedcb6876'



function dadosDisplay(dados) {
    document.querySelector('.city-search').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.text-temp').innerHTML = dados.weather[0].description
    document.querySelector('.humidity').innerHTML = dados.main.humidity + '%'
    document.querySelector('.img-temp').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json())

    dadosDisplay(dados)
}


function clickButton() {
    const city = document.querySelector('.input-city').value
   
    searchCity(city)
}