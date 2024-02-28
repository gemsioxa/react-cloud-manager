import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Settings from "./routes/Settings";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
