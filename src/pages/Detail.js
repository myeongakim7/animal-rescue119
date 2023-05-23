import React from "react";
// useParams 추가
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Pre from "../images/icon-pre.svg";

function Detail({ animals }) {
  const params = useParams();
  console.log(params);

  return (
    <div id="detail">
      <div className="App">
        <div className="title">
          <Link to="/search">
            <img src={Pre} className="pre" alt="pre" />
          </Link>
          <h2>상세페이지</h2>
        </div>
        {/*title  */}
        <div className="aInfo">
          <div className="animalPicture"></div>
        </div>
        {/* aInfo */}

        <Nav />
      </div>
      {/* app  */}
    </div>
  );
}

export default Detail;
