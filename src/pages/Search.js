import React from "react";
// import { useState, useEffect } from "react";
import { useRef } from "react";
import Nav from "../components/Nav";
import dog from "../images/icon-dog.svg";
import Items from "../components/Items";
import searchBtn from "../images/icon-search-click.svg";

function Search({
  animals,
  setAnimals,
  totalCount,
  pageNo,
  maxPages,
  rows,
  setPageNo,
  prevPage,
  nextPage,
  search,
  setSearch, // 검색어 입력
}) {
  const inputRef = useRef();
  // 검색창 요소의 위치 참조
  console.log(rows, search);

  // let num = 0;
  // console.log(animals[num].ty3Kind);

  //   function func(animal, index){
  //   for (let i = 0; i < animals.length; i++) {
  //     console.log(animals[i].ty3Kind);
  //   }
  // }
  // animals.map((animal, index) => {
  //   console.log(animal, index);
  //   return animal.ty3Kind;
  // });

  // console.log(<Items />);
  // setAnimal 문제임 map이 작동이 안된다는데 알아서해봐...

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
          <form
            onSubmit={function (e) {
              e.preventDefault();
              let val = inputRef.current.value; // input
              console.log("val=", val);
              // if (val === "") {
              //   setSearch(val); // 아무 입력X
              // } else {
              //   setSearch(val); // 입력값 있으면
              // }

              // animals.map((animal, index) => {
              //   console.log(animal, index);
              //   let animalList = () => {
              //     if (val === animal) {
              //       animal.style.display = "block";
              //     } else {
              //       animal.style.display = "none";
              //     }
              //   };
              //   return <div>{animalList}</div>;
              // });

              // 이 안에 함수를 넣기

              setSearch(val);
              // setAnimals();
              setPageNo(1); //첫 페이지
            }}
          >
            <input
              onInput={function (e) {
                console.log(e.target.value);
              }}
              className="searchContent"
              type="search"
              name="searchContent"
              placeholder="품종 검색 "
              ref={inputRef}
            />
            <button className="searchBtn" type="submit">
              <img src={searchBtn} alt="searchBtn" />
            </button>
          </form>
        </div>
        {/* search-box */}
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
