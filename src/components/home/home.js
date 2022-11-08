import Navbar from "../include/navbar";
import "../../assets/css/home/home.css";
import greetingBg from "../../assets/img/greeting-bg.png";
import welcomeBg from "../../assets/img/welcome.png";
import bus from "../../assets/img/bus.png";
import joinUs from "../../assets/img/joinUs.png";
import drive from "../../assets/img/drive.png";
import fieldTrip from "../../assets/img/fieldTrip.png";
import roadmap from "../../assets/img/roadmap.png";
import movie from "../../assets/img/movie.mp4";
import animated from "../../assets/img/animated.png";

function Home() {
  return (
    <div>
      <div>
        <section className="header">
          <div className="navbar-container">
            <Navbar />
            <div className="greeting-container">
              <img src={greetingBg} alt="" />
              <h1 className="title greeting-title">TANKED GILL SCHOOLIES</h1>
            </div>
          </div>
        </section>
        <div className="welcome-part">
          <div className="welcome-container">
            <img src={welcomeBg} className="welcome-img" alt=""  />
            <h1 className="title welcome-title">WELCOME TO TANKED GILL SCHOOLIES</h1>
            <p className="general-content welcome-content">If you had to do it all again, you'd probably want to come back as a Schoolie. Cool, Funny, Successful, Carefree, Humble, and Normal, with a touch of wise ass and I don't give a damns thrown in. The year is 2022, and this collection of 9,777 uniquely designed characters portraying reincarnated high school seniors who decided to come back as Tanked Gil Schoolies, have a score to settle. But they're not mad at anybody. They're the opposite, they're grateful and ready to raise some hell. </p>
            <p className="general-content welcome-content">They missed the great high school fun other traditionalists had, because the hipsters that were seniors at the time determined they weren't cool enough because they were so called nerds. Yes nerds, because they were techies, capitalists and rebels, believing in anarchism and true free libertarianism, untethered by traditional state rhetoric and rules. So while the regs were using school to fine tune their social skills, Schoolies were preparing to kick some ass in that world, became successful playing a game they trained for, made their money, then decentralized it all and now the power is theirs, finally. And they live here. This is what they've decided collectively to become. Jokers, rebels, inclusionists living in the NirvanaVerse, a literal Web3 playground and everyone is invited.  Schoolies are the reincarnation of our real life kids, physically "fish dudes" ready to play and show out their concepts of power to the people, living free, laughing at everything, clowning, pranking and creating the world they always dreamed about. This is The Schoolie Life. We invite you. Let's live it.</p>
          </div>
          <div style={{textAlign:"center"}}>
            <img src={bus} className="bus-img" alt=""  />
          </div>
        </div>
        <section className="aboutUs-part">
          <div className="joinUs-part">
            <div className="row pt-5 mb-5" style={{marginBottom:"0px!important"}}>
              <div className="col-12 col-md-7 col-xl-6 offset-xl-1  d-md-block">
                <img className="product-figure product-figure-1 img-fluid" src={joinUs} alt="" />
                <h1 className="title joinUs-title">JOIN US</h1>
                <p className="general-content joinUs-content">We are the "anti bored" of the NFT world, who the hell wants to be bored? Have you seen that collection? Zero personality!  A bunch of no expression, rich stuffy, WASPs that appear to be apes..what is this a wax museum? Hell with that, we want to throw erasers at the chalkboard when the teacher isn't looking, then blame the innocent student next to us!!  We want to prank everyone, the stupid politicians who get us into wars, who tell us what is " woke" or what is  </p>
                <p className="general-content joinUs-content">"proper" or tell us how to think or how to act! Who have no sense of humor!!!  The meta verse can't be this stodgy!! who the hell wants to escape into that world??</p>
              </div>
              <div class="col-12 col-md-5 col-xl-5 pr-xl-3 pt-md-3">                
              </div>
            </div>
          </div>
          <div className="drive-part">
            <div className="drive-container">
              <img className="product-figure product-figure-1 img-fluid" src={drive} alt="" />
              <h1 className="title drive-title">DRIVE IN THEATER</h1>
              <p className="general-content drive-content">Invite us to your metaverse and watch us steal the show, entertain you through sketch comedy funnier than SNL, music parodies,</p>
              <p className="general-content drive-content">impressions of sports celebrities, and standup, and you'll soon find out nobody is safe from our joking and pranks. If laughter is the</p>
              <p className="general-content drive-content">best medicine, and girls like the bad boys, then you will be healthier than anyone in the meta verse  and you will also have the hottest chicks. Proof in point.</p>
              <p className="general-content drive-content">We are producing a hysterical film called "Stonerville 2: Recess with the Schoolies"  where we will be the focal point of the </p>
              <p className="general-content drive-content">Stonerville cast ( as seen on Netflix, Comcast, Streaming everywhere right now)  as they embark on a cross country search to find </p>
              <p className="general-content drive-content">out who we really are, who is the brains behind this funny group of NFT characters, so that all the metavese characters can come hang out with us. Join us now.</p>
            </div>
          </div>
          <div className="fieldTrip-part">
            <div className="row pt-5 mb-5" style={{marginBottom:"0px!important"}}>
              <div class="col-12 col-md-5 col-xl-5 pr-xl-3 pt-md-3">                
              </div>
              <div className="col-12 col-md-7 col-xl-6 offset-xl-1  d-md-block" style={{marginLeft:'0'}}>
                <img className="product-figure product-figure-1 img-fluid" src={fieldTrip} alt="" />
                <h1 className="title fieldTrip-title">FIELD TRIP TO NIRVANAVERSE</h1>
                <p className="general-content fieldTrip-content">We are the "anti bored" of the NFT world, who the hell wants to be bored? Have you seen that collection? Zero personality!  A bunch of no expression, rich stuffy, WASPs that appear to be apes..what is this a wax museum? Hell with that, we want to throw erasers at the chalkboard when the teacher isn't looking, then blame the innocent student next to us!!  We want to prank everyone, the stupid politicians who get us into wars, who tell us what is " woke" or what is "proper" or tell us how to think or how to act! Who have no sense of humor!!!   The meta verse can't be this stodgy!! who the hell wants to escape into that world??</p>
              </div>
            </div>
          </div>
        </section>
        <section className="roadmap">
          <h1 className="title roadmap-title">ROADMAP</h1>
          <img className="roadmap-img" src={roadmap} alt="" />
        </section>
        <section className="series">
          <div>
              <div className="animated-container">
                <img src={animated} style={{zIndex:"10"}} alt=""  />
                <h1 className="title greeting-title" style={{zIndex:"1000"}}>ANIMATED SERIES</h1>
              </div>
            <div className="animated-part">
              <div className="animated-inner-red">
                <div className="animated-inner-grey">
                <video class="video-fluid" controls loop style={{zIndex:"-100"}}>
                  <source src={movie} type="video/mp4" style={{zIndex:"-100"}} />
                </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>  
    </div>
  );
}
export default Home