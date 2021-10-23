import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./componenents/utils";
import Home from "pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
