import React from 'react';
import './ResultCard.scss';

function ResultCard({ item }) {
  const { language, name, description } = item;

  return (
    <>
      <li className="ResultItem">
        <h3 className="ResultItem__heading">{name}</h3>
        <p className="ResultItem__language">
          Language:{' '}
          <span className="ResultItem__language-data">
            {language ? language : null}
          </span>
        </p>
        <p className="ResultItem__description">
          Description:{' '}
          <span className="ResultItem__description-data">
            {description ? description : null}
          </span>
        </p>
      </li>
    </>
  );
}

export default ResultCard;
