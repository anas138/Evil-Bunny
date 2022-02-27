import React from "react"
import './App.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaDiscord } from "react-icons/fa";

function App() {
  const images=["a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png"]
  return (
    
    <div className="App">
      <div className="wrapper"> 
      <div className="header" height="100" width="100">
        <img src="logo.png"/>
        <a href="#home">HOME</a>
        <a href="#roadMap">ROAD MAP</a>
        <a href="#team">TEAM</a>
        <a href="#faq">FAQ</a>
        <a><img src="insta.png"/><img src="twitter.png"/><FaDiscord size="2.5em" style={{padding:"5px",borderRadius:"50%",backgroundColor:"rgb(185, 21, 21)",marginLeft:"10px"}}/></a>
      </div>



      <div className="home" id="home">
        <div className="home-sub-text">
        <h2>WELCOME TO<br/>
          <span className="colored">THE <span className="evil-text">EVIL APE</span></span> <br/>
          CLUB</h2>
          <span>Lorem ipsum is simply dummy text of printing and<br/>type setting industry </span>
          <div className="main-calender">
            <div className="calender">
              <span>04</span>
              <small>days</small>
            </div>
            <div className="calender">
              <span>04</span>
              <small>days</small>
            </div>
            <div className="calender">
              <span>04</span>
              <small>days</small>
            </div>
            <div className="calender">
              <span>04</span>
              <small>days</small>
            </div>
          </div>
          <button className="home-button">MINT EVIL APE</button>
          </div>
          <div className="sideHeading"></div>
      </div>
    </div>


    <div className="images">
      <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
      >
        <Masonry gutter={10}>
          {images.map((img,i)=>{
            return <img src={img} key={i}/>
          })}
      </Masonry>
      </ResponsiveMasonry>
    </div>
    

    <div className="RoadMap" id="roadMap">
        <h1 className="roadMapHeading">Road Map</h1>
        <div className="roadmapCircles">
        <span style={{color:"white",marginRight:"5px"}}>ORIGINAL<br/> ROADMAP</span>
          <div>
          <img src="map-circle.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <div>
          
          <img src="map-circle-2.png" height="150x" width="150px"/><br/>
          <button>Download</button>
          </div>
          <span style={{color:"white",marginLeft:"5px"}}> ROADMAP FOR HE NEW<br/> EA [EVIL APP]!</span>
        </div>
         <img src="road-map-chracters.png" height="200" width="400" className="roadMapImg"/>
      </div>


      <div className="meetTheTeam" id="team">
        <h2>MEET THE TEAM</h2>
        <div className="team">
          <div className="teamMembers">
            <img src="circle-team-1.png" height="100" width="100"/>
            <h3>MOON WALKER</h3>
            <span>CEO</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>


          <div className="teamMembers">
            <img src="circle-team-2.png" height="100" width="100"/>
            <h3>MICHO TOCHI</h3>
            <span>ADVISOR</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>


          <div className="teamMembers">
            <img src="circle-team-3.png" height="100" width="100"/>
            <h3>BOINK BOINK</h3>
            <span>LORE MASTER</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>


          <div className="teamMembers">
            <img src="circle-team-4.png" height="100" width="100"/>
            <h3>MOON WALKER</h3>
            <span>CEO</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>


          <div className="teamMembers">
            <img src="circle-team-5.png" height="100" width="100"/>
            <h3>MICHO TOCHI</h3>
            <span>ADVISOR</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>


          <div className="teamMembers">
            <img src="circle-team-6.png" height="100" width="100"/>
            <h3>BOINK BOINK</h3>
            <span>LORE MASTER</span>
            <small>Lorem ipsum dolor si amit</small>
          </div>
        </div>
      </div>


      <div className="FAQ" id="faq">
        <div>
        </div>
        <div className="faq-text">
           <h1>FAQ</h1>
           <div>WHAT IS THE EVIL APE</div>
           <div>WHEN WILL I BE ABLE TO MINT AEVIL APE?</div>
           <div id="bottom-red">12/02/2022 7pm EST</div>
           <div>HOW MUCH WILL EACH EVIL APP COST TO MINT?</div>
           <div>WHAT IS THE EVIL APE</div>
           <div>WHEN WILL I BE ABLE TO MINT AEVIL APE?</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icon">
         <img src="logo.png" height="100px" width="200px" />
         <img src="social-icon.png" />
         </div>
         <div className="lastHeading">@ 2022 EVIL APE | ALL RIGHTS RESERVED</div>
      </div>
       
    </div>
  );
}

export default App;
