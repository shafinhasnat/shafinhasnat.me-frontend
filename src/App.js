import styles from "./icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialicons } from "./SocialIcon";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#34495e",
        height: "100vh",
        textAlign: "center",
        color: "white",
        fontWeight: "bolder",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>

      <div>
        <h1 style={{ fontSize: "3.5rem" }}>Shafin Hasnat</h1>
        <h4 style={{ fontSize: "1.5rem" }}>Software Engineer</h4>
      </div>
      <div className="socialContainer">
        {socialicons.map((value) => (
          <a href={value.link} target="_blank" className="social">
            <FontAwesomeIcon icon={value.icon} className="icon" />
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
