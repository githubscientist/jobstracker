import { createBrowserRouter, RouterProvider } from "react-router";
import Jobs from "./pages/Jobs";
import jobsLoader from "./loaders/jobsLoader";
import JobDetails from "./pages/JobDetails";
import JobsBoard from "./wrappers/JobsBoard";

const routes = [
  {
    path: '/',
    element: <JobsBoard />,
    children: [
      {
        path: '',
        element: <Jobs />,
        loader: jobsLoader,
        hydrateFallbackElement: <div>Loading jobs...</div>,
      },
      {
        path: '/jobs/:jobId',
        element: <JobDetails />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />;
}

export default App;