import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/reset.css";
import "./styles/styles.css";

const appHeight = () => {
    const body = document.querySelector("body");
    body.style.setProperty('height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight();


ReactDOM.render(<App />, document.querySelector(".root"));