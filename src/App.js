import './App.css';
import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import MainContainer from './Containers/MainContainer'


class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <MainContainer />
        <Footer />
      </>
    );
  }
}

export default App;
