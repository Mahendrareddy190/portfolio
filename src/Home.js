import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container-fluid home">
      <div>
        <h5 className="text1">html</h5>
        <h5 className="text2">body</h5>
      </div>
      <div className="text3">
        Hi,<h1 className="highlight">M</h1>ahi
      </div>
      <br/>
      <div className="text4 pt-3">
           FullStack Devloper
      </div>
      <div className="text5">
          Frontend / Database 
      </div>
      <div>
        <h5 className="bttext2"> /body</h5>
        <h5 className="bttext1">/html</h5>
      </div>
    </div>
  );
};
export default Home;
