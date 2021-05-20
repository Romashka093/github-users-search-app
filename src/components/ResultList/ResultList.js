import React from 'react';
import ResultCard from './ResultCard/ResultCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import css from './ResultList.scss';

function ResultList({ items, isLoading }) {
  console.log(items);
  return (
    <>
      {isLoading && <h2>is loading...</h2>}
      {items.length > 0 ? (
        <>
          <h2>Result:</h2>
          <ul>
            {items.map(item => (
              <ResultCard key={item.id} item={item} />
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  items: state.items.items,
  isLoading: state.items.loading,
});

ResultList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(ResultList);
