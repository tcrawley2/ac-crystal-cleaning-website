import landingPhoto from "../assets/landingPhoto.jpg"

function Landing() {
  return (
    <div className="landing">
      <img className="landing-photo" src={landingPhoto} alt="landing photo" />
      <h1>AC Crystal Cleaning Services</h1>
      <p>A better solution for your cleaning needs.</p>
    </div>
  )
}

export default Landing;