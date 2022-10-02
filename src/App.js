
import './App.css';
import React from 'react';
import ReadMoreReadLess from './ReadMoreReadLess';
import chris from "./chris.jpg"
import jonas from "./jonas.jpg"
import hous from "./hous.jpg"
import kelly from "./kelly.jpg"
import serg from "./serg.jpg"
import Footer from './Footer'


function App() {
  return (



    <div className="App" >
      <div class="header">
        <h1 class="judul"><i>A bunch of Random People</i></h1>
      </div>
      <body>
        <div class="">
          <div class="baru" >
            <img src={chris} alt="Christoper photo" width="450px" height="300px"></img>
            <div class="tulisan">
              <h2>Christoper</h2>
              <ReadMoreReadLess limit={110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMoreReadLess>
            </div>
            <div class="row tulisan">
              <span class = "hestek">
                #Developer 
              </span>
              <span> </span>
              <span class = "hestek">
                #Photographer
              </span>
            </div>
          </div> 
        </div><div>&nbsp;</div> 
        
        <div class="">
          <div class="baru" >
            <img src={jonas} alt="Jonas photo" width="450px" height="300px"></img>
            <div class="tulisan">
              <h2>Jonas</h2>
              <ReadMoreReadLess limit={110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMoreReadLess>
            </div>
            <div class="row tulisan">
              <span class = "hestek">
                #Developer 
              </span>
              <span> </span>
              <span class = "hestek">
                #Waitress
              </span>
              <span> </span>
              <span class = "hestek">
                #Chef
              </span>
            </div>
          </div> 
        </div><div>&nbsp;</div> 

        <div class="">
          <div class="baru" >
            <img src={hous} class="tambahan" alt="Hous photo" width="450px" height="300px"></img>
            <div class="tulisan">
              <h2>Hous</h2>
              <ReadMoreReadLess limit={110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMoreReadLess>
            </div>
            <div class="row tulisan">
              <span class = "hestek">
                #Climber 
              </span>
            </div>
          </div> 
        </div><div>&nbsp;</div> 


        <div class="">
          <div class="baru" >
            <img src={kelly} class="w-full h-60 object-cover object-center" alt="Kelly photo" width="450px" height="300px"></img>
            <div class="tulisan">
              <h2>Kelly</h2>
              <ReadMoreReadLess limit={110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMoreReadLess>
            </div>
            <div class="row tulisan">
              <span class = "hestek">
                #Developer 
              </span>
              <span> </span>
              <span class = "hestek">
                #Driver
              </span>
            </div>
          </div> 
        </div><div>&nbsp;</div> 


        <div class="">
          <div class="baru" >
            <img src={serg} class="w-full h-60 object-cover object-center" alt="Serg photo" width="450px" height="300px"></img>
            <div class="tulisan">
              <h2>Serg</h2>
              <ReadMoreReadLess limit={110}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ReadMoreReadLess>
            </div>
            <div class="row tulisan">
              <span class = "hestek">
                #Pogg 
              </span>
            </div>
          </div> 
        </div><div>&nbsp;</div> 

      </body>
      <Footer />
    </div>
  );
}

export default App;
