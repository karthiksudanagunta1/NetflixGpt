import { Provider } from "react-redux";
import Body from "./Components/Body";
import AppStore from "./utils/Store";

function App() {
  return (
    <div >
      <Provider store={AppStore}>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
