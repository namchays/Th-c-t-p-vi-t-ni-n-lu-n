import React, { Component } from 'react'
import Footer from './Components/Footer'
import './App.css';
import Header from './Components/Header';
import Container from './Components/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routers from './routers'
class App extends Component {


  render() {
    return (
      <Router>
         
        <div >
          <Header />
          <Container />
          <div className="col-lg-1"></div>
          <div className="col-lg-10 mt-5 ">
          <Switch>
          {this.showRouter(routers)}
          </Switch>
           
          </div>
          <Footer />

        </div>

      
      </Router>
    );

  }
  showRouter = (Routers) =>{
    var result = null;
    if(Routers.length > 0){
      result = Routers.map((element,index)=>{
        return <Route
            key = {index}
            path = {element.path}
            exact = {element.exact}
            component = {element.main}
        />
      })
    }
    return result;
  }
}
export default App;
