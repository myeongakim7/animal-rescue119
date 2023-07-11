import "./App.css";
// router 관련 모듈 추가
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 연결할 페이지들
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
// AOS 추가
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // AOS 초기화
  useEffect(() => {
    Aos.init();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
