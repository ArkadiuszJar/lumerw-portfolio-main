import { Header, Footer } from "./components/layout";
import {
  Contact,
  Faq,
  Landing,
  Experience,
  Projects,
  Reviews,
} from "./pages/home";

import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Header />

      <main>
        <Landing />
        <Experience />
        <Reviews />
        <Projects />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
