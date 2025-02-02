import React from "react";

import styles from "../css/card.module.css";
// import themeStyle from "../../css/custom-theme.module.css";

function MainCard({ title, children }) {
  return (
    <div className={`card text-start ${styles.card}`}>
      <h5 className="title">{title}</h5>
      <div className="card-body">
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}

export default MainCard;
