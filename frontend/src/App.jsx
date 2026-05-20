import "./App.css";
import "./font/font.css";
function App() {
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
    </>
  );
}

export default App;
