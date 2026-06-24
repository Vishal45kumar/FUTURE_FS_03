import React from "react";
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Certification from "../components/Certification.jsx";
import HomeDoctors from "../components/HomeDoctors.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Footer from "../components/Footer.jsx";
import { useClerkToken } from "../components/useClerkToken.jsx";

function Home() {
  const token = useClerkToken();

  console.log("Token:", token);


  return (
    <div>
      <Navbar />
      <Banner />
      <Certification />
      <HomeDoctors />
      <Testimonial />

      <Footer />
    </div>
  );
}

export default Home;
