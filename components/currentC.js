import React from "react";
import Link from "next/link";
import Router from "next/router";


export default function currentC(props) {
  const [lat, setLat] = React.useState("");
  const [lng, setLng] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const {latitude,longitude,city}=props;

  
  const onClick = (e) => {

    const fetchData = async () => {
      const  res  =  await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY_IP}`);
      const data = await res.json();
      return data;
  };
      fetchData();
       
        if(fetchData()){
      setLat(fetchData().location.lat);
      setLng(fetchData().location.lng);
      setCityName(fetchData().location.city);

        }

  };

  return (
    <div className="findLocation">
        <button type="submit" onClick={onClick}>
        <Link href={`pages/${cityName}`}/>
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
       <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
       <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
       </svg></button>
    </div>
  );
}


// <Link href={`/location/${current.slug}`}>
// </Link>
