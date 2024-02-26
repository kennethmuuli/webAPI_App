const http = require('node:http');
const fetch = require('node-fetch');

const hostname = '127.0.0.1';
const port = 3000;

let long = 59.4716889;
let lat = 24.7382388;
let URL = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  try {
    const forecastMessages = await logForecast();
    let htmlResponse = '<!DOCTYPE html>';
    htmlResponse += '<html>';
    htmlResponse += '<head>';
    htmlResponse += '<title>Weather Forecast</title>';
    htmlResponse += '</head>';
    htmlResponse += '<body>';
    htmlResponse += '<h1>Weather Forecast for Tallinn for the Next 24 Hours</h1>';
    htmlResponse += '<ul>';
    forecastMessages.forEach(message => {
      htmlResponse += `<li>${message}</li>`;
    });
    htmlResponse += '</ul>';
    htmlResponse += '</body>';
    htmlResponse += '</html>';
    res.end(htmlResponse);
  } catch (error) {
    console.error('Error handling request:', error);
    res.end('<h1>Error</h1><p>Sorry, something went wrong.</p>');
  }
});

async function logForecast() {
  const response = await fetch(URL);
  const forecast = await response.json();

  const forecastMessages = [];

  for (let i = 0; i < 24; i++) {
    const message = `${forecast.properties.timeseries[i].time}: ${forecast.properties.timeseries[i].data.instant.details.air_temperature} Celsius`;
    forecastMessages.push(message);
  }

  return forecastMessages;
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
