import React from "react";
// import { useState, useEffect } from "react";
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
}) {
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
          <inputs
            className="searchContent"
            type="text"
            name="searchContent"
            placeholder="품종 검색 "
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
