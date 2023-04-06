import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration"
import { useContext, useEffect, useState } from "react";
import { event } from "./constants"
import { Context } from "./index"



const App = () => {
  const store = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(store.isAuth);

  useEffect(() => {
    store.subscribe(event[0], (isAuth) => setIsLoggedIn(isAuth));
  }, [store]);

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/receptions" element={<div>Receptions </div>} /> 
        <Route path="*" element={<Navigate to="/receptions" replace={true} />} /> 
      </Routes>
    )
  }
  
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Navigate to="/registration" replace={true} />} /> 
    </Routes>
  );
}

export default App;
