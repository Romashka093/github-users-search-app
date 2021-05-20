import React from 'react';
// import css from './ResultCard.scss';

function ResultCard({ item }) {
  const { language, name, description } = item;

  return (
    <>
      <li>
        <div>
          <h3>{name}</h3>
          <p>
            Language: <>{language ? language : null}</>
          </p>
          <p>
            Description: <>{description ? description : null}</>
          </p>
        </div>
      </li>
    </>
  );
}

export default ResultCard;
