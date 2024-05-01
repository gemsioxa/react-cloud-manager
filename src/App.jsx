import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/home";
import Settings from "./routes/settings";
import RootLayout from "./routes/RootLayout";
import Disk from "./routes/disk";
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="disk/:id" element={<Disk />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  )
}

export default App;
