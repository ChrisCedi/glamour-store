import { Navagation } from "./navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>      
      <Navagation/>
    </Provider>
  );
}

export default App;
