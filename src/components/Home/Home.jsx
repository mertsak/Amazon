import React from "react";

import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home__container">
      <Banner></Banner>
      <div className="home__content">
        <div>
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
