import ImageSearchComponent from "./ImageSearchComponent";
import NavigationBar from "./Navbar";

// HomePage component
const HomePage = () => {
  return (
    <div className="homepage">
      <NavigationBar />
      <ImageSearchComponent />
    </div>
  );
};

export default HomePage;
