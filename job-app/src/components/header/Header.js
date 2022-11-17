import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "./images/ff.jpg", title: "beach" },
    { url: "./images/6.jpg", title: "boat" },
    { url: "./images/4.jpg", title: "forest" },
    { url: "./images/hi.jpg", title: "city" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hire Me</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
