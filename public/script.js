let weather = {
    apiKey: "59e701bfbc70cf0bbad35cbeb248130b",
    fetchWeather: function () {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=59e701bfbc70cf0bbad35cbeb248130b"
        ).then((response) => response.json())
        .then
    },
}