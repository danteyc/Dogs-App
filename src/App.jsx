import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { PageHome } from "./pages/home/home"
import { PageBreedList } from "./pages/breedList/breedList"
import { PageBreed } from "./pages/breed/breed"
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main>
          <Switch>
            <Route exact path="/">
              <PageHome/>
            </Route>
            <Route path="/breeds/:letter">
              <PageBreedList/>
            </Route>
            <Route path="/breed/:breed">
              <PageBreed/>
            </Route>
          </Switch>
        </Main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
