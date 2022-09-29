import React from "react";

export const TextButtons = () => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText(text)}>Copy</button>
    </div>
  );
};
