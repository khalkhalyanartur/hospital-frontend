import { useContext } from "react";
import { Context } from "../..";

const Reception = () => {

  const store = useContext(Context);

  const handlerLogout = () => {
    console.log("logout app")
    store.logout();
    return
  }


  return (
    <div>
      <h1>Heello on Reception!</h1>
      <button onClick={handlerLogout}>Выйти</button>
    </div>
  )
}

export default Reception;