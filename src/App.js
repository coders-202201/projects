import { Link, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import FormProjectPage from "./pages/FormProjectPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Menu />
      <p>Wow cómo mola esto</p>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path="view/:idProject" element={<ProjectPage />} />
          <Route path="new" element={<FormProjectPage />} />
          <Route path="edit/:id" element={<FormProjectPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
