import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import BookingPage from "./components/BookingPage";
import Specials from "./components/Specials.js";
import Testimonials from "./components/Testimonials.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/bookingpage" component={BookingPage}></Route>
        </Switch>

        {/* Renderizar esses componentes apenas na página inicial */}
        <Route path="/" exact>
          <Specials />
          <Testimonials />
          <Footer />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
