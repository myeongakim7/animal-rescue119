import React from "react";

export default function Items({ animals }) {
  //   console.log(animals);

  return (
    <>
      {animals.map((animals, key) => {
        return (
          <>
            <h2>구조정보</h2>
            {animals.cn}
            <img src={animals.ty3Picture} alt="img" />
            <p>성별 : {animals.ty3Sex}</p>
            <p>품종 : {animals.ty3Kind}</p>
            <p>포획장소 : {animals.ty3Place}</p>
            <p>상태 : {animals.ty3Process}</p>
          </>
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
