import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import actions from '../../redux/search/search_actions';
import History from '../History/History';
import PropTypes from 'prop-types';
import './Searcher.scss';

function Searcher({ query, onChangeSearchValue, onAddHistory }) {
  const changeValueWithDebounce = debounce(onChangeSearchValue, 500);
  return (
    <>
      <section className="Searcher">
        <h2 className="Searcher__heading">
          Here you can find any repositories from github
        </h2>
        <form
          className="Searcher__form"
          action=""
          method="GET"
          onSubmit={evt => onAddHistory(query, evt.preventDefault())}
        >
          <label htmlFor="search" className="Searcher__form-label">
            Search here:{' '}
          </label>
          <input
            className="Searcher__form-input"
            onChange={changeValueWithDebounce}
            type="search"
            id="search"
            placeholder="Type here..."
          />
        </form>
        <History />
      </section>
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
