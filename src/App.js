import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TableData from "./component/TableData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
