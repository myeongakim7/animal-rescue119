import React from "react";
// useParams 추가
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Pre from "../images/icon-pre.svg";
import styled from "styled-components";

function Detail({ animals }) {
  const { id } = useParams();
  // {id}라는 변수는 url에서 :id 자리에 있던 숫자를 뜻함
  console.log({ id });
  // console.log("detail:", animals);
  console.log({ animals });

  const TableStyle = styled.div`
    // border: 1px solid red;
    border-collapse: collapse;

    tr,
    td {
      padding: 7px;
    }
    table tr > td:first-child {
      background-color: #e2e2e2;
      width: 25%;
      text-align: center;
    }
    table tr > td:nth-child(2) {
      background-color: #f2f2f2;
    }
  `;
  return (
    <div id="detail">
      <div className="App">
        <div className="title">
          <Link to="/search">
            <img src={Pre} className="pre" alt="pre" />
          </Link>
          <h2>상세페이지</h2>
        </div>
        {/* title */}
        <div className="container">
          <div className="detailImg">
            <img src={animals[id].ty3Picture} alt="animals[id].ty3Kind" />
          </div>
          {/* detailImg */}
          <div className="detailBox">
            <TableStyle>
              <table>
                <tr>
                  <td>구조정보</td>
                  <td>{animals[id].sj}</td>
                </tr>
                <tr>
                  <td>구조일시</td>
                  <td>{animals[id].ty3Date}</td>
                </tr>
                <tr>
                  <td>종류</td>
                  <td>{animals[id].ty3Kind}</td>
                </tr>
                <tr>
                  <td>구조장소</td>
                  <td>{animals[id].ty3Place}</td>
                </tr>
                <tr>
                  <td>성별</td>
                  <td>{animals[id].ty3Sex}</td>
                </tr>
                <tr>
                  <td>처리현황</td>
                  <td>{animals[id].ty3Process}</td>
                </tr>
              </table>
            </TableStyle>
          </div>
          {/* detailBox*/}
        </div>
        {/* container */}
        <Nav />
      </div>
      {/* app  */}
    </div>
  );
}

export default Detail;
