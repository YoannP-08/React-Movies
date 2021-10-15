import { Provider } from 'react-redux';
import store from "./store";

import NavBar from "./components/NavBar";
import Home from "./components/Home";


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <div className="content">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
