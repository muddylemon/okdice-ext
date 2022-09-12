import * as React from 'react';

import './styles.scss';

const Options: React.FC = () => {
  return (
    <div>
      <form>
        <p>
          <label htmlFor="username">Text Buttons</label>
          <br />
          <input
            type="text"
            name="username"
            spellCheck="false"
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="logging">
            <input type="checkbox" name="logging" /> Show the features enabled
            on each page in the console
          </label>

          <p>cool cool cool</p>
        </p>
      </form>
    </div>
  );
};

export default Options;
