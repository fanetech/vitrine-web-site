import React from "react";
import Monse from "../components/Monse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

function Home(props) {
  return (
    <div>
      <Monse />
      <Navigation />
      <SocialNetwork />
    </div>
  );
}

export default Home;
