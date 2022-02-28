import React,{useEffect} from "react"
import './App.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaDiscord } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  const images=["a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png","bunny.png","bunn2.png"]
  useEffect(()=>{
    AOS.init();
  })
  return (
    
    <div className="App">
      <div className="wrapper"> 
      <div className="header" height="100" width="100">
        <img src="logo.png" className="headerlogo"/>
        <a href="#home">HOME</a>
        <a href="#roadMap">ROAD MAP</a>
        <a href="#team">TEAM</a>
        <a href="#faq">FAQ</a>
        <a id="headImg"><img src="insta.png"/><img src="twitter.png"/><FaDiscord size="2.5em" style={{padding:"5px",borderRadius:"50%",backgroundColor:"rgb(185, 21, 21)",marginLeft:"5px"}}/></a>
        <button  style={{fontWeight:"bold",fontSize:"18px"}}className="navButton">MINT EVIl APE</button>
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

   <div className="imagesWraper">
    <div className="images">
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 5}}
            >
          <Masonry>
          <img src="a.png"  style={{borderRadius:"10px"}}/>
          <img src="b.png"   style={{borderRadius:"10px"}}/>
          <img src="c.png"   style={{borderRadius:"10px"}}/>
          <img src="d.png"   style={{borderRadius:"10px"}}/>
          <img src="e.png"   style={{borderRadius:"10px" }}/>
          <img src="f.png"    style={{borderRadius:"10px"}}/>
          <img src="g.png"    style={{borderRadius:"10px"}}/>
          <img src="h.png"    style={{borderRadius:"10px"}}/>
          <img src="bunny.png"  style={{borderRadius:"10px"}}/>
          <img src="bunn2.png"  style={{borderRadius:"10px"}}/>
          </Masonry>
          </ResponsiveMasonry>
          
          {/* {images.map((img,i)=>{
            return <img src={img} key={i} style={{borderRadius:"10px"}}/>
          })} */}
          
      
    </div>
    </div>
    

    <div className="RoadMap" id="roadMap">
        <h1 className="roadMapHeading">Road Map</h1>
        {/* <div className="roadmapCircles">
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
        </div> */}


<div className="line" style={{borderLeft:"5px solid rgb(185, 21, 21)"}}></div>

        <div   
      className="roadmApText" style={{color:"white"}} data-aos="fade-up" >
        
        <div  data-aos="fade-up" 
     data-aos-duration="3000"><span id="number">15% </span>Marketing we will begin launching additional marketing with influencers <br/>
          that are relevant and significant in the NFT space to get more eyes than ever <br/>
          on our projectduring and after our public sale.</div>
         <br/>
         <br/>
        <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">25% </span>We will begin to distribute 5 ETH right back into the community among <br/>
          random Evil Ape Club NFT holders.</div>
        <br/>
        
        <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">50%</span> Acquire land in the Sandbox to establish our presence in the Metaverse.<br/>
           We believe as the meta verse grows everyone need a place to call their own. <br/>
           We will acquire land and build a unique meeting place exclusive to Evil Ape  <br/>
            Club holders where we will host virtual community gatherings, holiday parties, <br/>
            contest and more.</div>
        <br/>
        <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">60%</span> 50 ETH goes directly into our community wallet, this will be used for<br/> 
         Marketing,  Merch development, and this will be used in our community DAO, <br/>
         where holders will be able to vote on community decisions as we ascend into <br/>
         the Metaverse</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"> <span id="number">70%</span> We are going to be doing Limited edition Merch for now this includes <br/>
         stylish T-Shirts, hoodies, and more. Designs will be limited to create <br/>
         exclusivity. Merch drops will be in limited supply</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">80% </span> We will begin launching our staking contract that allows EAC <br/>
         holders to earn $EVIL Coins, which can be used to purchase the following:<br/> 
         NFTs, Whitelist to upcoming projects, Limited edition Metaverse wearables, <br/>
         Limited edition Evil Ape Club Merch,  Vacations, Gift cards, ETH and more.</div>
       <br/>
       <br/>
       <div  data-aos="fade-up"
     data-aos-duration="3000"><span id="number">100%</span> Roadmap v2.0 - At the completion of roadmap v1.5 we will unveil <br/>
         roadmap v2.0…Stay Tuned…Stay evil !</div>
        </div>


         <img src="road-map-chracters.png" height="200" width="400" className="roadMapImg"/>
      </div>


      <div className="meetTheTeam" id="team">
        <h2>MEET THE TEAM</h2>
        <div className="team">
          


          <div className="teamMembers">
            <img src="circle-team-2.png" height="200" width="200"/>
            <h3>EVIL kinirvel</h3>
            <span>Marketing\PR</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>
          
          <div className="teamMembers">
            <img src="circle-team-6.png" height="200" width="200"/>
            <h3>The EVIL ONE</h3>
            <span>Founder-The Evil One</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>


          <div className="teamMembers">
            <img src="circle-team-3.png" height="200" width="200"/>
            <h3>Pirate</h3>
            <span>Artist</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
          </div>


          

          <div className="teamMembers">
            <img src="circle-team-5.png" height="200" width="200"/>
            <h3>ABash</h3>
            <span>Dev \ Web 3 Expert</span>
            {/* <small>Lorem ipsum dolor si amit</small> */}
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
