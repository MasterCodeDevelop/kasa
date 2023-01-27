import React from 'react';

export default function Dropdown({ data }) {
  return data.map(({ title, content }, index) => (
    <div className="dropdown" key={index}>
      <input type="checkbox" id={'dropdown-' + index}></input>
      <label htmlFor={'dropdown-' + index}>{title}</label>
      <p>
        {!Array.isArray(content)
          ? content
          : content.map((e, index) => (
              <span key={index}>
                {e}
                <br />
              </span>
            ))}
      </p>
    </div>
  ));
}
