import axios from "axios";
import "./App.css";
import "./font/font.css";
import { useEffect, useState } from "react";
function App() {
  const [testResult, setTestResult] = useState(null);
  const [error, setError] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKSERVER;
  const [testResult2, setTestResult2] = useState(null);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/`)
      .then((res) => {
        console.log(res.data);
        setTestResult(res.data);
      })
      .catch((err) => {
        console.log(err.data);
        setError("통신불가");
      });
  }, []);

  const test1 = () => {
    axios
      .get(`${BACKEND_URL}/test`)
      .then((res) => {
        console.log(res.data);
        setTestResult2(res.data);
      })
      .catch((err) => {
        console.log(err.data);
        setError2("통신불가");
      });
  };
  return (
    <>
      <h1 style={{ fontFamily: "bold" }}>ESG 프로젝트 </h1>
      <p style={{ fontFamily: "bold" }}>김경호 화이팅(bold)</p>
      <p style={{ fontFamily: "medium" }}>김경호 화이팅(medium)</p>
      <p>김경호 화이팅(기본 light)</p>
      <div>
        <input placeholder="김경호화이팅"></input>
      </div>
      <div>
        <button
          onClick={() => {
            alert("김경호화이팅");
          }}
        >
          색상초기화된버튼
        </button>
      </div>
      <div>
        <textarea placeholder="김경호화이팅"></textarea>
      </div>
      <div>
        <select>
          <option value="">김경호화이팅</option>
          <option value="">김경호화이팅</option>
          <option value="">김경호화이팅</option>
          <option value="">김경호화이팅</option>
        </select>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "var(--bun)",
            borderRadius: "var(--radius-lg)",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "var(--tomato)",
            borderRadius: "var(--radius-md)",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "var(--green)",
            borderRadius: "var(--radius-sm)",
          }}
        ></div>
      </div>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>프론트 - 백엔드 소통 테스트</h2>
        <hr />
        {error && <p style={{ color: "red" }}>{error}</p>}

        {testResult !== null ? (
          <p
            style={{
              color: "var(--green)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            백엔드 통신 성공! 수신된 데이터: {testResult}
          </p>
        ) : (
          !error && <p>서버에 연결하는 중... ⏳</p>
        )}
      </div>

      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>프론트 - 백엔드 -DB 소통 테스트</h2>
        <hr />
        <button onClick={test1}>테스트버튼</button>
        {error2 && <p style={{ color: "red" }}>{error2}</p>}

        {testResult2 !== null ? (
          <p
            style={{
              color: "var(--tomato)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Front-spring boot-DB 통신 성공! 수신된 데이터: {testResult2}
          </p>
        ) : (
          !error2 && (
            <p>
              버튼을 클릭하시면 Front-spring boot-DB 와 통신확인할수 있습니다
            </p>
          )
        )}
      </div>
    </>
  );
}

export default App;
