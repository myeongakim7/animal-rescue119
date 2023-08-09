import React from "react";
import { Link } from "react-router-dom";

export default function Items({ animals }) {
  console.log("Items = ", animals);
  return (
    <div className="itemList">
      {animals.map((animal, key) => {
        return (
          <div className="item" key={key}>
            <figure>
              <img src={animal.ty3Picture} alt={animal.ty3Kind} />
            </figure>
            <div className="text">
              <h2>구조정보</h2>
              <p>품종 : {animal.ty3Kind}</p>
              <p>성별 : {animal.ty3Sex}</p>
              <p>구조일 : {animal.ty3Date}</p>
              <p>구조장소 : {animal.ty3Place}</p>
              <p>진행상황 : {animal.ty3Process}</p>
              <Link to={`/detail/${key}`} className="btnDetail">
                자세히 보기
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
