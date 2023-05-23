import React from "react";
// Link 모듈 추가
import { useState, useEffect } from "react";
import Items from "../components/Items";
import Nav from "../components/Nav";
import dog from "../images/icon-dog.svg";

function Search() {
  const [animals, setAnimals] = useState([]); // 동물 데이터
  const [totalCount, setTotalCount] = useState(0); // 총 글수
  const [pageNo, setPageNo] = useState(1); // 페이지번호
  const [maxPages, setMaxPages] = useState(0); // 마지막 페이지
  const [rows, setRows] = useState(10); // 화면당 글 수

  const getAnimalData = () => {
    const API_KEY =
      "9Vvlf08PMcy3Rv%2BNyhHBfRDyrh4ghW9SV2WaM0hNQqnjY7CrDbP7Vicwy2i9OSNA7scEeCblqHdoPvFIY8RNUA%3D%3D";
    // docx 문서의 요청 메시지에서 '인증키' 부분에 일반 인증키 변수를 넣는다. 그리고 json 타입으로 데이터를 받기 위해 마지막에 resultType=json 코드를 추가해 적는다.
    const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&numOfRows=${rows}&pageNo=1${pageNo}&resultType=json`;

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.getPetAnimalInfo.body);
        const items = data.getPetAnimalInfo.body.items.item;
        // 데이터를 state에 저장
        setAnimals(items);
        // 전체글
        setTotalCount(data.getPetAnimalInfo.body.totalCount);
        // 마지막 페이지(총게시물 / 행수)
        setMaxPages(Math.ceil(totalCount / rows));
      })
      .catch(() => {
        console.log("데이터 요청 에러");
      });
  };

  // 이전 페이지
  const nextPage = () => {
    if (pageNo < maxPages) setPageNo(pageNo + 1);
  };

  // 다음 페이지
  const prevPage = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  useEffect(() => {
    getAnimalData();
  }, [pageNo, totalCount]);

  console.log("animals = ", animals);
  console.log("totalCount = ", totalCount);
  console.log("maxPages = ", maxPages);

  return (
    <div>
      <div className="App">
        <div className="title">
          <div className="iconDog">
            <img src={dog} alt="dog" />
          </div>
          <p>구조 반려동물 조회</p>
        </div>
        {/* title */}
        <div className="searchBox">
          <form action="" method="get"></form>
          <input
            className="searchContent"
            type="text"
            name="searchContent"
            placeholder="구조장소 검색"
          />
          <input type="button" name="searchBtn" className="searchBtn" />
        </div>

        <div className="upperText">
          <p>Total: {totalCount}건</p>
          <p>
            Page: {pageNo} / {maxPages}
          </p>
        </div>
        {/* 페이징 */}

        {animals.length > 0 ? (
          <Items animals={animals} />
        ) : (
          <div className="loading">Loading...</div>
        )}
        {/* 페이징 */}
        <div className="btnBox">
          <button id="btn" onClick={prevPage}>
            Pre
          </button>
          <button id="btn" onClick={nextPage}>
            Next
          </button>
        </div>
        {/*btn-box */}
      </div>
      <Nav />
    </div>
  );
}

export default Search;
