import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import actions from '../../redux/search/search_actions';
import History from '../History/History';
import PropTypes from 'prop-types';
// import css from './Searcher.scss';

function Searcher({ query, onChangeSearchValue, onAddHistory }) {
  const changeValueWithDebounce = debounce(onChangeSearchValue, 500);

  return (
    <>
      <h2>Type user name</h2>
      <form
        action=""
        method="GET"
        onSubmit={evt => onAddHistory(query, evt.preventDefault())}
      >
        <label>
          Search
          <input onChange={changeValueWithDebounce} type="search" />
        </label>
      </form>
      <>
        <History />
      </>
    </>
  );
}

const mapStateToProps = state => ({
  query: state.search.query,
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchValue: evt => dispatch(actions.searchValue(evt.target.value)),
  onAddHistory: value => dispatch(actions.searchHistory(value)),
});

Searcher.protoTypes = {
  query: PropTypes.string,
  onChangeSearchValue: PropTypes.func.isRequired,
  onAddHistory: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
