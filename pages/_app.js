import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./userContaxt";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
