import Header from "./components/Header";
import { Route } from "wouter";
import Hero from "./components/Hero";
import Camera from "./components/Camera";
import Add from "./components/Add";
import Query from "./components/Query/Query";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Route path="/">
        <Hero />
        <Camera />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/search/:mood">
        {({ mood }) => <Query mood={mood} />}
      </Route>
      <Footer />
    </>
  );
};

export default App;
