import Head from "next/head";
import SearchBox from "../components/SearchBox";
import Link from "next/link"



export async function getServerSideProps() {
  
  const locRes =await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY_IP}`);
  const locData = await locRes.json();

  const city=locData.location.city;
  const cityID=locData.location.geonameId;
  return { props: {
    city: city,
    cityID:cityID,
  }};
}
export default function Home({city,cityID}) {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div className="home">
        <div className="container">
      
          <SearchBox placeholder="Search for a city..." />
          <Link href={`/location/${city}-${cityID}`}>
            <a className="back-link">Current Location</a>
          </Link>
        </div>
      </div>
    </div>
  );
}