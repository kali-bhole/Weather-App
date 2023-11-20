const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid=2d9eb30f43995528431c137fd6cf2c98';

    request({url:forecastUrl, json:true}, (error,response) => {
        if(error){
            callback('Unable to connect to the forecast', undefined)
        }else if(response.body.message){
            callback('Please enter a valid location', undefined)
        }else{
            callback(undefined, "The name of the city is " +response.body.name+ ". Currently the temp out there is " + response.body.main.temp + " and the weather out there is " + response.body.weather[0].description + ".");
        }
    })
}

module.exports = forecast
