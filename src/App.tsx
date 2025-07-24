import "./App.css";
import { Navbar } from "./components/NavBar";
import QueryBox from "./components/QueryBox";
import { isBase62 } from "./utils/base62";
import { useEffect } from "react";

function App() {
  // Get the path after the first '/'
  const path = window.location.pathname.slice(1); // removes leading '/'\
  useEffect(() => {
    if (!path || !isBase62(path)) return;
    // Redirect the browser to the backend, which will handle the redirect to the long URL
    window.location.href = import.meta.env.VITE_BACKEND_URL + "/" + path;
  }, []);
  // Check if it's a 6-char base62 string

  return (
    <main className="flex justify-center items-center h-screen">
      <Navbar />
       
      <QueryBox />
      
    </main>
  );
}

export default App;
