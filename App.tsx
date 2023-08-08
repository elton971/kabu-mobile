import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/data/store/store";
import StackRouter from "./src/routes/Stack.Router";

export default function App() {
  return (
    <Provider store={store}>
      <StackRouter />
      <StatusBar style="auto" />
    </Provider>
  );
}
