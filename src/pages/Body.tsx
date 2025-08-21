
import heroImg from "../assets/images/hero.jpeg";
const Body = () => {
  return (
     <section className="body-section">
      <div className="body-container">
        {/* Left Side Content */}
        <div className="body-left">
          <h1 className="body-heading">Welcome to My Website</h1>
          <p className="body-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ea voluptate voluptatibus velit, consequuntur eum. Hic suscipit adipisci non aliquid mollitia quam expedita ab nemo pariatur, nobis consequuntur. Dolorum, eum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ea voluptate voluptatibus velit, consequuntur eum. Hic suscipit adipisci non aliquid mollitia quam expedita ab nemo pariatur, nobis consequuntur. Dolorum, eum.
            
          </p>
        </div>

        {/* Right Side Image */}
        <div className="body-right">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Body