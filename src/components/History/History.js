import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/resultItemCard/resultItemCard_operations';
import PropTypes from 'prop-types';
import './History.scss';

function History({ history, getItems }) {
  useEffect(() => {
    getItems(history.length > 0 ? history[history.length - 1] : '');
    return () => {
      getItems(history.length > 0 ? history[history.length - 1] : '');
    };
  });

  return (
    <>
      {history.length === 0 ? (
        <></>
      ) : (
        <div className="Histoty">
          <h3 className="Histoty__title">Search history:</h3>
          <ul
            className="Histoty__list"
            onClick={evt => getItems(evt.target.textContent)}
          >
            {history.map((item, index) => (
              <li className="Histoty__list-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

const checkerOfHistoryLength = history =>
  history.length > 4 ? history.slice(-5) : history;

const mapStateToProps = state => ({
  history: checkerOfHistoryLength(state.search.history),
});

const mapDispatchToProps = dispatch => ({
  getItems: value => dispatch(operations.createItems(value)),
});

History.propTypes = {
  history: PropTypes.array.isRequired,
  getItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
