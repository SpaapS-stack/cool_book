import MainPages from "./pages/MainPage";
import OtherPage from "./pages/OtherPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Registration from "./pages/Registration/Registration";
import Avtorization from "./pages/Avtorization/Avtorization";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPages/>}/>
        <Route path="/other" element={<OtherPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/avtorization" element={<Avtorization/>}/>
      </Route>
    </Routes>
  );
} 

export default App;
