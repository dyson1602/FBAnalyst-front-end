import './App.css';
import React from 'react'
import BackEndSetup from './Helper/BackEndSetup'
import Footer from './Components/footer'
import NavBar from './Components/navBar'
import MainContainer from './Containers/MainContainer'

class App extends React.Component {

  render() {
    return (
      <>
        <BackEndSetup />
        <NavBar />
        <MainContainer />
        <Footer />
      </>
    );
  }
}

export default App;
