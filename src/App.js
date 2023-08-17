import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
