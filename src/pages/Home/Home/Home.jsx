import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../../Services/Services";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>FoodFleet</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Banner></Banner>
        <Services></Services>
      </div>
    );
};

export default Home;