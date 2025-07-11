import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Added Routes and Route
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <Toaster/>,
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
