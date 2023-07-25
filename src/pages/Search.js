import React from "react";
// import { useState, useEffect } from "react";
import { useRef } from "react";
import Nav from "../components/Nav";
import dog from "../images/icon-dog.svg";
import Items from "../components/Items";

function Search({
  animals,
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
              if (val === "") {
                setSearch(val); // 아무 입력X
              } else {
                setSearch(`&sj=${val}`); // 입력값 있으면
              }
              setPageNo(1); //첫 페이지
            }}
          >
            <input
              className="searchContent"
              type="search"
              name="searchContent"
              placeholder="품종 검색 "
              ref={inputRef}
              onInput={function (e) {
                console.log(e.target.value);
              }}
            />
            <input type="button" className="searchBtn" />
          </form>
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
