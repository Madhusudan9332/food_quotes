// App.jsx
import { useState } from "react";
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";

const App = () => {

  const [FooterLinks] = useState([
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Brand Center", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "Help center",
      items: [
        { label: "Discord Server", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Licensing", href: "#" },
        { label: "Terms & Conditions", href: "#" }
      ]
    },
    {
      title: "Download",
      items: [
        { label: "iOS", href: "#" },
        { label: "Android", href: "#" },
        { label: "Windows", href: "#" },
        { label: "MacOS", href: "#" }
      ]
    }
  ]);

  return (<>
  <Navbar />
  <FetchData />
  <Footer FooterLinks={FooterLinks} />
  </>);
};

export default App;
