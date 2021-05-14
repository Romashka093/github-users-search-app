import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ResultList from './components/ResultList/ResultList';
import Searcher from './components/Searcher/Searcher';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section>
          <Searcher />
        </section>
        <section>
          <ResultList />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
