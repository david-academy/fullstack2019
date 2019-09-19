  
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherReport from './WeatherReport'

const Weather = ({ city }) => {
	const [ weather, setWeather ] = useState('')

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=`+process.env.REACT_APP_API_KEY+ `&query=${city}`)
			.then(response => {
				setWeather(response.data)
			})
	}, [])

	return (
		<>
		<h2>Weather</h2>
		<WeatherReport weather={weather} />
		</>
	)
}

export default Weather