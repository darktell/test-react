import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "src/pages/404";
import IndexPage from "src/pages/IndexPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
