import React from 'react';
import api from '../../services/api';
import { connect } from 'react-redux';
import * as actions from '../../redux/search/search_actions';
import './Searcher.scss';

console.log(api.getUsersByName().then(res => console.log(res.data.items)));
function Searcher({ query, history, onChangeSearchValue, onAddHistory }) {
  console.log('History', history.length === 0);

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
          <input onChange={onChangeSearchValue} type="search" />
        </label>
      </form>
      <>
        {history.length === 0 ? (
          <></>
        ) : (
          <div>
            <h3>Search history:</h3>
            <ul>
              {/* not more then 5 items */}
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    </>
  );
}

const mapStateToProps = state => ({
  query: state.search.query,
  history: state.search.history,
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchValue: evt => dispatch(actions.searchValue(evt.target.value)),
  onAddHistory: value => dispatch(actions.searchHistory(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
