import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import Reviews from "./Components/Reviews";
import CreateAccount from "./Components/CreateAccount";
import LocationsPage from "./Components/LocationsPage";

function App() {
  return (
    <Router>
      {" "}
      {}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <WhyUs />
              <Reviews />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/locations" element={<LocationsPage />} /> {}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
