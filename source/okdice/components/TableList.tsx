import React from "react";
import ReactDOM from "react-dom";

export const TableList = () => {
  const [list, setList] = React.useState([]);

  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#SOCRATES SLB">SOCRATES SLB</a>
        </li>
        <li>
          <a href="#NardSausage">NardSausage</a>
        </li>
        <li>
          <a href="#LalitaLani">LalitaLani</a>
        </li>
        <li>
          <a href="#muddylemon">muddylemon</a>
        </li>
      </ul>
    </div>
  );
};

const mountPointID = "gamification-floating-ui-root";
document.body.insertAdjacentHTML("afterend", `<div id="${mountPointID}" />`);
ReactDOM.render(<TableList />, document.querySelector(`#${mountPointID}`));
