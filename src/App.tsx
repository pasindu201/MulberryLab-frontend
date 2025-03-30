import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ImageUploadMulbery from "./components/upload/ImageUploadMulbery";
import ImageUploadLeaf from "./components/upload/ImageUploadLeaf";
import ClassificationResult from "./components/results/ClassificationResult";
import DiseaseResult from "./components/results/DiseaseResult";
import Info from "./pages/Info";
import About from "./pages/About";
import Recipe from "./pages/RecipePage";
import CommunityPage from "./pages/CommunityPage";

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/register"];
  const hideFooterPaths = [
    "/login",
    "/register",
    "/upload",
    "/upload-leaf",
    "/results",
    "/disease",
    "/community",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <main className="py-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUploadMulbery />} />
          <Route path="/upload-leaf" element={<ImageUploadLeaf />} />
          <Route path="/results" element={<ClassificationResult />} />
          <Route path="/disease" element={<DiseaseResult />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
