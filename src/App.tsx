
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./components/Grid";
import View from "./components/View";
import Create from "./components/Create";



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/create" element={ <Create/>}/>
      <Route path="/grid" element={ <Grid/>}/>
      <Route path="/update" element={<Create/>}/>
      <Route path="/view" element={ <View/>}/>
    </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App;
