import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>FoodFleet</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Banner></Banner>
      </div>
    );
};

export default Home;