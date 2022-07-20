// import React from "react";
// //import TodaysWeather from "../../components/TodaysWeather";
// //import HourlyWeather from "../../components/HourlyWeather";
// //import WeeklyWeather from "../../components/WeeklyWeather";
// import Head from "next/head";
// //import SearchBox from "../../components/SearchBox";
// import moment from "moment-timezone";
// import Link from "next/link"

// export async function getServerSideProps() {
  
//     const locRes =await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY_IP}`);
//     const locData = await locRes.json();
    
//     const city=locData.location.city
//     const cityLat = locData.lat;
//     const cityLng= locData.lon;

//   const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLng}&appid=${process.env.API_KEY}&exclude=minutely&units=metric`);

//   const weatherData = await weatherRes.json();

  
//   const hourlyWeather = getHourlyWeather(weatherData.hourly, weatherData.timezone);

//   const weeklyWeather = weatherData.daily;
//   return {
//     props: {
//       city:cityName ,
//       timezone: weatherData.timezone,
//       currentWeather: weatherData.current,
//       hourlyWeather: hourlyWeather,
//       weeklyWeather: weeklyWeather,
//     }, // will be passed to the page component as props
//   };
// }


// const getHourlyWeather = (hourlyData, timezone) => {
//   const endOfDay = moment().tz(timezone).endOf("day").valueOf();
//   const eodTimeStamp = Math.floor(endOfDay / 1000);

//   const todaysData = hourlyData.filter((weatherData) => weatherData.dt < eodTimeStamp);

//   return todaysData;
// };

// export default function current({
//   city,
//   weather,
//   currentWeather,
//   hourlyWeather,
//   weeklyWeather,
//   timezone,
// }) {


//   return (
//     <div>
//       <Head>
//         <title>Weather App</title>
//       </Head>
//       <div key={city}className="home">
//       <div className="container">
//       <Link href="/">
//             <a className="back-link">&larr; Home</a>
//           </Link>
          
//     </div>

//         </div>

//       </div>
    
//   );
// }



// // const [locRes, weatherRes] = await Promise.all([
// //     fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY_IP}`), 
// //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLng}&appid=${process.env.API_KEY}&exclude=minutely&units=metric`)
// //   ]);
// //   const [locData, weatherData] = await Promise.all([
// //     locRes.json(), 
// //     weatherRes.json()
// //   ]);



// // const getCityId = (param) => {
// //   const cityParam = param.trim();
// //   // get the id of the city
// //   const splitCity = cityParam.split("-");
// //   const id = splitCity[splitCity.length - 1];

// //   if (!id) {
// //     return null;
// //   }

// //   const city = cities.find((city) => city.id.toString() == id);

// //   if (city) {
// //     return city;
// //   } else {
// //     return null;
// //   }
// // };
