import "./App.css";
import { useState, useEffect } from "react";
import Items from "./components/Items";

function App() {
  // 사이트에 나와 있는 일반 인증키를 아래에 넣는다.
  const API_KEY =
    "9Vvlf08PMcy3Rv%2BNyhHBfRDyrh4ghW9SV2WaM0hNQqnjY7CrDbP7Vicwy2i9OSNA7scEeCblqHdoPvFIY8RNUA%3D%3D";
  // docx 문서의 요청 메시지에서 '인증키' 부분에 일반 인증키 변수를 넣는다. 그리고 json 타입으로 데이터를 받기 위해 마지막에 resultType=json 코드를 추가해 적는다.
  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&resultType=json`;

  const [animals, setAnimals] = useState([]);

  const getAnimalData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.getPetAnimalInfo.body.items.item);
        const items = data.getPetAnimalInfo.body.items.item;
        // 데이터를 state에 저장
        setAnimals(items);
      })
      .catch(() => {
        console.log("데이터 요청 에러");
      });
  };

  useEffect(() => {
    getAnimalData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>부산 119 구조 반려동물 조회</h1>
        </div>
        {/* app.js에 직접 json을 활용할 경우 */}
        {/* <Items
        cn={animals[0].cn}
        img={animals[0].ty3Picture}
        sex={animals[0].ty3Sex}
        kind={animals[0].ty3Kind}
        place={animals[0].ty3Place}
        process={animals[0].ty3Process}
      /> */}
        {/* 데이터가 있으면 표시하고 없으면 로딩중이라 표시하게 한다 */}
        {animals ? <Items animals={animals} /> : <p>"로딩중..."</p>}
        {/* 위의 방식을 쓰고 싶지 않다면 단순하게 아래 코드를 사용해도 된다. */}
        {/* <Items animals={animals} /> */}
      </div>
    </>
  );
}

export default App;
