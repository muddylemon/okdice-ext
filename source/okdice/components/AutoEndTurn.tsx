import React from "react";

type AutoEndTurnProps = {
  autoEndTurn: boolean;
  setAutoEndTurn: (autoEndTurn: boolean) => void;
};

const AutoEndTurn = ({ autoEndTurn, setAutoEndTurn }: AutoEndTurnProps) => {
  return (
    <div className="autoEndTurn">
      <label>
        <input
          type="checkbox"
          checked={autoEndTurn}
          onChange={(e) => setAutoEndTurn(e.target.checked)}
        />
        Auto End Turn
      </label>
    </div>
  );
};

export default AutoEndTurn;
