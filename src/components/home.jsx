import videoSrc from "../assets/video3.mp4";
import fitness from "../assets/fq2.jpeg";
import quotation from "../assets/quotation.png";
function Home() {
  return (
    <>
      <video autoPlay muted loop id="video-bg">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div>
        <div className="video-text">
          <h1 className="white-text">A BETTER WAY TO TRACK YOUR FITNESS</h1>
        </div>
      </div>
      <div className="fitnessq">
        <img src={fitness} alt="fitnessquo" />
      </div>
      <div className="quotation">
        <img src={quotation} alt="quotation" />
      </div>
      <div className="fithead">
        <h1 className="siq"> STRENGTH IN WORDS</h1>
      </div>
    </>
  );
}
export default Home;
