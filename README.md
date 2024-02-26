# A simple weather forecast application using JS Fetch

This application displays the forecast for the next 24H in Tallinn displaying it on a simple plain text HTML website. It uses the [met.no webAPI](https://api.met.no/weatherapi/locationforecast/2.0/documentation) and [JS Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to read in the data.

## Installation
1. Clone the repository locally.
2. Run the command `node app.js` from the command line inside the main directory.
    - You will need node js to run the aforementioned command. If you do not have node installed run the following command previously to install it via the package manager `winget install OpenJS.NodeJS` *[More information here](https://nodejs.org/en/download/package-manager/#windows-1)*
3. ctrl + left mouseclick on OR copy-paste the URL shown to you in the terminal into your broswer, by default: `http://127.0.0.1:3000/`