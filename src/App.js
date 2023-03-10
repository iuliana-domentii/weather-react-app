import "./App.css";
import CurrTemp from "./component/curr-temp/CurrTemp";
import Header from "./component/header/Header";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header city="Bern" />
        <div className="row">
          <div className="col-3"></div>
          <CurrTemp temp="6" />
          <div className="col-3"></div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
        </div>
      </div>
      <footer>Iuliana Domentii</footer>
    </div>
  );
}
