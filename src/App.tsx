import { createContext, useEffect, useState } from "react";
import { getJobs } from "@utils/api";
import Job from "@models/Job";
import { CookiesProvider } from "react-cookie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
  {
    path: "/*",
    element: <HomePage />,
  },
]);

export const SearchInputContext = createContext<{
  searchInput: string;
  setSearchInput: (value: string) => void;
}>({
  searchInput: "",
  setSearchInput: () => null,
});

export const AreaContext = createContext<{
  area: string[];
  setArea: (value: string[]) => void;
}>({
  area: [],
  setArea: () => null,
});

export const JobContext = createContext<{
  job: string;
  setJob: (value: string) => void;
}>({
  job: "",
  setJob: () => null,
});
export const ToastMessageContext = createContext<{
  toastMessage: string;
  setToastMessage: (value: string) => void;
}>({
  toastMessage: "",
  setToastMessage: () => null,
});

export const JobListContext = createContext<{
  jobList: Job[];
  setJoblist: (value: Job[]) => void;
}>({
  jobList: [],
  setJoblist: () => null,
});

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [area, setArea] = useState<string[]>(["Nord", "Sud", "Est", "Ouest"]);
  const [job, setJob] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [jobList, setJoblist] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const j = await getJobs();
      setJoblist(j);
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <JobListContext.Provider value={{ jobList, setJoblist }}>
          <JobContext.Provider value={{ job, setJob }}>
            <ToastMessageContext.Provider
              value={{ toastMessage, setToastMessage }}
            >
              <AreaContext.Provider value={{ area, setArea }}>
                <SearchInputContext.Provider
                  value={{ searchInput, setSearchInput }}
                >
                  <RouterProvider router={router} />
                </SearchInputContext.Provider>
              </AreaContext.Provider>
            </ToastMessageContext.Provider>
          </JobContext.Provider>
        </JobListContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
