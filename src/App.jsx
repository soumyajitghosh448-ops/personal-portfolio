import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Header />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;