import React from 'react'

const WeatherReport = ({ weather }) => {
	if ( ! weather ) {
		return (
			<div></div>
		)
	}

	return (
		<div>
			<p><strong>Temperature</strong> {weather.current.temperature} °C<br />
			<img src={weather.current.weather_icons} width="200px" alt={weather.current.weather_descriptions}/></p>
			<p><strong>Wind</strong> {weather.current.wind_speed} km/h, direction {weather.current.wind_dir}  </p>
		</div>		
	)
}

export default WeatherReport