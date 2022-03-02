import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
    )
        .then(function(response){
          // console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
      <div className="App">
          <header className="App-header">
              <div className="row">
                  <div className="column-left">
                      <div>WINE<span className="title-color">SEARCH</span></div>
                  </div>
                  <div className="column-right">

                      <form action="/">
                          <input type="text" placeholder="Recherche" name="search" className="research-input"/>
                              <button type="submit" className="research-button">Allons-y</button>
                      </form>

                  </div>
              </div>
          </header>

          <div className="container">

              <div className="row">
                  <div>
                      <button className="filter-button">Région</button>
                      <button className="filter-button">Couleur</button>
                      <button className="filter-button">Appellation</button>

                  </div>

              </div>

              <div className="row">
                  <div className="column">
                      <div className="wine-card">
                          <div className="row">
                              <div className="column">
                                  IMAGE
                              </div>
                              <div className="column">
                                  <p className="wine-name">Thierry Pillot</p>
                                  <p className="wine-info">de N/A, Bourgogne</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="column">
                                  <p className="wine-note">note : -/5</p>
                                  <p className="wine-price">€ N/A</p>
                              </div>
                              <div className="column">
                                  <button className="add-button">Ajouter panier</button>
                              </div>

                          </div>



                      </div>

                      {
                          data && data.length>0 && data.map((item)=><p>Vine name : {item}</p>)
                      }

                  </div>
              </div>

          </div>
      </div>
  );
}

export default App;
