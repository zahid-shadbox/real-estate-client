import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/Footer/Footer";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <div>
      <button style={{backgroundColor:"lightgreen", padding:"10px"}}>
      <a
      href={`https://wa.me/${919623691157}`}
      target="_blank"
      rel="noopener noreferrer"
      >
      Whatsapp
      </a>
      </button>
      </div>
      <Companies/>
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Website;
