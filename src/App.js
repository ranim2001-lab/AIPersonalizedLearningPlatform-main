import { useState } from "react";
import "./App.css";
import Loader from "./components/loader/loader";

function App() {
  // new line start
  const [profileData, setProfileData] = useState(null);

  //end of new line

  return (
    <div className="App">
      <Loader>Loading...</Loader>
    </div>
  );
}

export default App;
