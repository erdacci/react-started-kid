import { Title } from "./components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import "./Tailwind.css";


function Styles() {
  return function App() {
    return (
      <div className="app">
        <Title>{process.env.NODE_ENV}</Title>
        <Title theme="dark">{process.env.NODE_ENV}</Title>
        <Bootstrap></Bootstrap>
        <Tailwind></Tailwind>
        <p>{process.env.REACT_APP_API_URL}</p>
        {process.env.NODE_ENV === "production" && (
          <>
            <img src="/logo192.png" alt="" />
          </>
        )}
      </div>
    );
  };
}

export default Styles;
