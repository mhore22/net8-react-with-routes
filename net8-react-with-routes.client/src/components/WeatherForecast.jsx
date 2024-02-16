import { useEffect, useState } from 'react';

function WeatherForecast() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <button onClick={() => postStripe()}>Refresh</button>
        </div>
    );

    async function postStripe() {
        fetch('products/create-checkout-products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // Include the email in the body of the request
            body: JSON.stringify("test@example.com"),
          })
          .then(response => response.text())
          .then(data => alert(data))
          .catch((error) => {
            console.error('Error:', error);
          });
    }
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}

export default WeatherForecast;