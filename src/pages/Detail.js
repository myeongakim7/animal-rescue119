import React from "react";
// useParams 추가
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Pre from "../images/icon-pre.svg";

function Detail({ animals }) {
  const { id } = useParams();
  // {id}라는 변수는 url에서 :id 자리에 있던 숫자를 뜻함
  console.log({ id });
  // console.log("detail:", animals);
  console.log(animals);
  return (
    <div id="detail">
      <div className="App">
        <div className="title">
          <Link to="/search">
            <img src={Pre} className="pre" alt="pre" />
          </Link>
          <h2>상세페이지</h2>
        </div>
        <p>{animals[id].ty3Kind}</p>
        {/* <p>{params.id}</p> */}

        {/* <img src={} alt="" /> */}
        {/* <div className="detailBox">
          <p>포획일시:{animals[params.id].ty3Date}</p>
          <p>포획장소:{animals[params.id].ty3Place}</p>
          <p>종류:{animals[params.id].ty3Kind}</p>
          <p>성별:{animals[params.id].ty3Sex}</p>
          <p>처리현황:{animals[params.id].ty3Process}</p>
        </div> */}
        {/* detailBox*/}
        <Nav />
      </div>
      {/* app  */}
    </div>
  );
}

export default Detail;
