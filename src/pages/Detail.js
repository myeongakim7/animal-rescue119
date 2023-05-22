import React from "react";
// useParams 추가
import { useParams } from "react-router-dom";

function Detail({ animals }) {
  const params = useParams();
  console.log(params);

  // 동물 데이터에서 빼 써야 됨
  console.log("detail: ", animals);

  return (
    <div>
      <h2>상세페이지</h2>
      {/* <p>{params.id}</p> */}
    </div>
  );
}

export default Detail;
