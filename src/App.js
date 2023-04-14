import { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "src";
import Registration from "src/components/Registration/Registration";
import Reception from "src/components/Reception/Reception";
import Authorization from "src/components/Authorization/Authorization";
import { event } from "./constants";

const App = () => {
  const store = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(store.isAuth);

  useEffect(() => {
    store.subscribe(event[0], (isAuth) => setIsLoggedIn(isAuth));
    store.checkAuth();
  }, [store]);

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/receptions" element={<Reception />} 
        /> 
        <Route path="*" element={<Navigate to="/receptions" replace={true} />} /> 
      </Routes>
    )
  }
  
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="*" element={<Navigate to="/registration" replace={true} />} /> 
    </Routes>
  );
}

export default App;
