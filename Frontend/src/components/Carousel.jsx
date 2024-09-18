import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile_photo from '../assets/trending-img.jpg'

function CarouselComponent() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      partialVisibility: 'visible' // Allow items to overflow and be partially visible
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibility: 'visible' // Allow items to overflow and be partially visible
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibility: 'visible' // Allow items to overflow and be partially visible
    },
  };
  
  const trendingStyles = {
    boxSizing: "border-box",
    padding: '10px',
    margin:'0 5px',
    borderRadius: "5px",
    display: "flex",
    gap: "15px",
    fontSize:'11px',
    backgroundColor:'gray'
  };
  const first = {
    borderRadius: "50%",
    fontSize:'15px',
    backgroundColor: "yellow",
    color: "black",
    textAlign: "center",
    width: "50%",
    height: "100%",
  };
  const profile_style = {
    width: '70%',
  };

  return (
    <div style={{position:'relative', padding:'10px'}}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div style={trendingStyles}>
          <div style={first}>1</div>
          <div>
            <header>Gaza</header>
            <p>#Yemen #palestine news #free gaza</p>
          </div>
          <div >
            <img src={profile_photo} style={profile_style} alt="profile-photo" />
          </div>
        </div>
        <div style={trendingStyles}>
          <div style={first}>2</div>
          <div>
            <header>Gaza</header>
            <p>#Yemen #palestine news #free gaza</p>
          </div>
          <div >
            <img src={profile_photo} style={profile_style} alt="profile-photo" />
          </div>
        </div>
        <div style={trendingStyles}>
          <div style={first}>3</div>
          <div>
            <header>Gaza</header>
            <p>#Yemen #palestine news #free gaza</p>
          </div>
          <div >
            <img src={profile_photo} style={profile_style} alt="profile-photo" />
          </div>
        </div>
        <div style={trendingStyles}>
          <div style={first}>4</div>
          <div>
            <header>Gaza</header>
            <p>#Yemen #palestine news #free gaza</p>
          </div>
          <div >
            <img src={profile_photo} style={profile_style} alt="profile-photo" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
