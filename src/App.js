import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import "font-awesome/css/font-awesome.min.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
// import SearchResult from "./components/SearchResult";
// import ErrorPage from "./components/ErrorPage";
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer";
import Shimmer2 from "./components/Shimmer2";

const WatchPage = lazy(() => import("./components/WatchPage"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const SearchResult = lazy(() => import("./components/SearchResult"));
// const MainContainer = lazy(() => import("./components/MainContainer"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MainContainer />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/watch",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/search/:query",
        element: (
          <Suspense fallback={<Shimmer2 />}>
            <SearchResult />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

// Tailwind dark theme (Default - System Preference)
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

export default App;

/**
 * Header
 * Body
 *   Sidebar
 *     MenuItems
 *   MainContainer
 *     VideoContainer
 *       VideoCard
 */
