import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Character from "./pages/Character";
import Layout from "./layout";
import CosmicAnalytics from "./pages/CosmicAnalytics";
import CharacterList from "./pages/CharacterList";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      { path: "", element: <CosmicAnalytics /> },

      {
        path: "character-list",
        element: <CharacterList />,
      },
      {
        path: "character-profile/:id",
        element: <Character />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <h1 className="text-center text-4xl">404 not found</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
