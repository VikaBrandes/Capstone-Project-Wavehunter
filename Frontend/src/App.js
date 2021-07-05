
import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import BudgetPlaner from "./components/BudgetPlaner/BudgetPlaner"


import Navigation from "./components/Navigation/Navigation";
import Map from "./components/PlacesIvebeen/map"
import Home2 from "./components/Home2/home2"
import List from "./components/packinglist/list"



import Wave from "./WavehunterMap/frontend/WaveMain";




function App() {


  

  return (


    <div className="wrapper">
      <BrowserRouter>
        <Navigation />
        <Switch>
          
          <Route path="/home2" component={Home2} />
          <Route path="/WaveMain" component={Wave}/>
          <Route path="/BudgetPlaner" component={BudgetPlaner}/>
          <Route path="/map" component={Map} />
         <Route path="/list" component= {List}/>
 





        </Switch>


      </BrowserRouter>
    </div >
  )
}

export default App;






