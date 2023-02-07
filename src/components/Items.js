import React from "react";

export default function Items({ animals }) {
  //   console.log(animals);

  return (
    <>
      {animals.map((animals, key) => {
        return (
          <div className="text-box" key={key}>
            {/* {animals.cn} - 구조정보*/}
            <div className="img-box">
              <img className="animal-img" src={animals.ty3Picture} alt="img" />
            </div>
            <div className="info">
              <p>품종 : {animals.ty3Kind}</p>
              <p>성별 : {animals.ty3Sex}</p>
              <p>구조일: {animals.ty3Date}</p>
              <p>구조장소 : {animals.ty3Place}</p>
              {/* <p>상태 : {animals.ty3Process}</p> */}
            </div>
            {/* info */}
          </div>
        );
      })}
      {/* 배열 중 하나만 선택할 경우 */}
      {/* <h2>구조정보</h2>
      {animals[0].cn}
      <img src={animals[0].ty3Picture} alt="img" />
      <p>성별 : {animals[0].ty3Sex}</p>
      <p>품종 : {animals[0].ty3Kind}</p>
      <p>포획장소 : {animals[0].ty3Place}</p>
      <p>상태 : {animals[0].ty3Process}</p> */}
    </>
  );
}
