import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "./Page/homepage/homepage.component";
import { ShopPage } from "./Page/shopPage/shopPage.component";
import { Header } from "./component/header/header.component";
import { SignInAndSignUpPage } from "./Page/sign-in-sign-up/sign-in-sign-up-component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shopPage" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
