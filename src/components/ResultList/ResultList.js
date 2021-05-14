import React from 'react';
import './ResultList.scss';

function ResultList() {
  return (
    <>
      {!true ? (
        <>
          {' '}
          <h2>Result:</h2>
          <ul>
            <li>
              <div>
                <h3>user name</h3>
                <p>
                  Language: <>{true ? 'prop from state' : null}</>
                </p>
                <p>
                  Description: <>{true ? 'prop from state' : null}</>
                </p>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ResultList;
