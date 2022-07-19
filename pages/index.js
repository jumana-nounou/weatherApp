import Head from "next/head";
import SearchBox from "../components/SearchBox";
import currentC from "../components/currentC";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />
        </div>
      </div>
    </div>
  );
}
