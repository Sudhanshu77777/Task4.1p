
import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
