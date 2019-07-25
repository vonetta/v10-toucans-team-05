/* Helper functions for app:
Get current location from Geolocation API
Get weather at current location using Openweather API
*/
const API_KEY = '0e8c6a8ba216d2b0fafe868b7bf978c3';

export function getCurrLocation() {
    const geo_error = () => {
        console.log('geolocation not available');
    }

    if (window.navigator.geolocation) {
        console.log('geolocation on');

        return new Promise((resolve, reject) => { 
            let lat, long, apiUrl;
            navigator.geolocation.getCurrentPosition(pos => {  
                resolve(
                    [
                        lat = pos.coords.latitude,
                        long = pos.coords.longitude,
                        apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
                    ]
                )},
                error => { reject(geo_error) }
            );  
        })
    }
    
}

export function callWeatherApi(val) {
 
    const url = val[2];
    return fetch(url).then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            return Promise.reject("Openweathermap data unable to load");
        }
        }).catch(error => console.log('Error: ', error));
    
}
