import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer/Footer';
import { Jumbotron } from './Jumbotron/jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import YouTube from './Youtube/Youtube';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Jumbotron/>
      <p>
        Meeting the 3rd thursday of the month at 6:30 PM CST on <a href="https://discord.gg/gkJ4Mqe43x">Discord</a>.
      </p>
      {/*YouTube Live Stream*/}
      <YouTube/>
      </header>    

      Join our communities on <a href="https://www.facebook.com/CentralArkansasJavaScript">Facebook</a> 
          and <a href="https://www.meetup.com/javascript-conway/">Meetup</a> for event details!

        
      <Footer/>
    </div>
  );
}

export default App;
