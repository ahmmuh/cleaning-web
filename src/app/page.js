import UnitPage from "./units/page";
import themeStyle from "../css/custom-theme.module.css";

export default function Home() {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-4">
          <ul className="list-group">
            <li
              className={`list-group-item bg-primary text-white ${themeStyle.bgPrimary}`}>
              Useful links
            </li>
            <li className="list-group-item text-primary">Enhet 1</li>
            <li className="list-group-item text-primary">Enhet 2</li>
            <li className="list-group-item text-primary">Enhet 3</li>
            <li className="list-group-item text-primary">Enhet 4</li>
            <li className="list-group-item text-primary">Enhet 5</li>
          </ul>
        </div>
        <div className="col-lg-8">
          <UnitPage />
        </div>
      </div>
    </div>
  );
}
