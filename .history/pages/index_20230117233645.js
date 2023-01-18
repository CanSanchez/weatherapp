import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import sunny from '../public/background/sunny.png'
import rain from '../public/background/rain.png'
import cloudy from '../public/background/cloudy.png'
import snow from '../public/background/snow.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('')
  const [background, setBackground] = useState(sunny.src);

  var apiKey = "99f42d70d7447c0cadd6b0124b3ed194";
  var lang ="en";
  var units ="metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&&appid=${apiKey}&lang=${lang}`

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url)
      .then((response) => {
        console.clear()
        setData(response.data)
        console.log(response.data)
        setWeather(response.data.weather);
        if (response.data.weather[0].main == 'Rain') {
          setBackground(rain.src)
        } else if (response.data.weather[0].main == 'Clouds') {
          setBackground(cloudy.src)
        } else if (response.data.weather[0].main == 'Snow') {
          setBackground(snow.src)
        } 
        setErrorMessage("")
      }).catch(err => {
        console.log(err);
        setErrorMessage("Please enter another location")
        setData({})
        setWeather()
      })
      setLocation('')
      setBackground(sunny.src)
    }
  }

  return (
    <>
      <Head>
        <title>Wazzup</title>
        <meta name="description" content="Weather app created by Can" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/weather-news.png" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap&effect=3d-float" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
      <input
        className={styles.input}
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyDown={searchLocation}
        type="text"
       />
       <button className={styles.button}>Check the weather</button>

      <div className={styles.wrapper}
      style={{backgroundImage: `url(${background})`}}>
      {
        errorMessage &&
        <p>{errorMessage}</p>
      }
       {
        weather && weather.map((w, index) => {
          return (
            // <div key={index}>
            //   <div>{w.description}</div>
            //   <div>{w.main}</div>
            // </div>
            <div className={styles.weathercontent}>
              <h1 className={styles.city}>{data.name}</h1>
              {/* <h3>{data.sys.country}</h3> */}
              <div key={index} className={styles.currentweather}>{w.main}</div>
              <p>Wind: {data.wind.speed}m/s</p>
              <p>Temperature: {data.main.temp}°C</p>
              <p>Feels Like: {data.main.feels_like}°C</p>
            </div>
          ) 
        })
       }
      </div>
      </main>
    </>
  )
}
