import { Route, Routes } from "react-router-dom";
import { MyPrivateRoutes, MyPublicRoutes } from "./routers/main";


const App=()=> {
  return (
    <>
      <Routes>
        {MyPublicRoutes.map((x,i)=>{
          return <Route path={x.path} element={x.element} key={i} exact></Route>
        })}
        {MyPrivateRoutes.map((x,i)=>{
          return <Route path={x.path} element={x.element} key={i} exact></Route>
        })}
      </Routes>
    </>
  );
}

export default App;
