import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ResultList from './components/ResultList/ResultList';
import Searcher from './components/Searcher/Searcher';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Searcher />
        <ResultList />
      </main>
      <Footer />
    </>
  );
}

export default App;
