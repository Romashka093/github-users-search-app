import React from 'react';
import ResultCard from './ResultCard/ResultCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ResultList.scss';

function ResultList({ items, isLoading, error }) {
  return (
    <>
      {error === null ? (
        <>
          {items.length > 0 ? (
            <section className="ResultSection">
              {/* {isLoading && (
                <h3 className="ResultSection__heading">is loading...</h3>
              )} */}
              <h2 className="ResultSection__heading">Here is your result</h2>
              <ul className="ResultSection__list">
                {items.map(item => (
                  <ResultCard key={item.id} item={item} />
                ))}
              </ul>
            </section>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <section className="ResultSection">
            <h2 className="ResultSection__heading">{error.statusCode}</h2>
            <p className="ResultSection__error">{error.text}</p>
          </section>
        </>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  items: state.data.repositories,
  isLoading: state.data.loading,
  error: state.data.error,
});

ResultList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    text: PropTypes.string,
    statusCode: PropTypes.number,
  }),
};
export default connect(mapStateToProps)(ResultList);
