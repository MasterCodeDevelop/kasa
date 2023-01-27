import React from 'react';
export default function Carousel({ data }) {
  const maxLength = data.pictures.length - 1,
    previousHash = () => {
      const id = Number(window.location.hash.substring(16)),
        newHash = id < 1 ? maxLength : id > maxLength ? maxLength : id - 1;
      window.location.hash = `#carousel-slide-${newHash}`;
    },
    nextHash = () => {
      const id = Number(window.location.hash.substring(16)),
        newHash = id >= maxLength ? 0 : id < 0 ? 0 : id + 1;
      window.location.hash = `#carousel-slide-${newHash}`;
    };

  return (
    <div className="carousel">
      {maxLength === 0 ? (
        <></>
      ) : (
        <button className="arrow-previous" onClick={previousHash}>
          <span className="arrow"></span>
        </button>
      )}
      <ol className="carousel-container">
        {data.pictures.map((e, index) => (
          <li
            key={index}
            className="carousel-slide"
            tabIndex={0}
            id={'carousel-slide-' + index}
          >
            <img src={e} alt={data.title + ' ' + index} />
          </li>
        ))}
      </ol>
      <span className="counter">
        {Number(window.location.hash.substring(16)) + 1}/{data.pictures.length}
      </span>
      {maxLength === 0 ? (
        <></>
      ) : (
        <button className="arrow-next" onClick={nextHash}>
          <span className="arrow"></span>
        </button>
      )}
    </div>
  );
}
