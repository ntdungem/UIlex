import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./custom-components/AppSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./custom-components/Main";
import { LoadingButtonPage } from "./reusable-components/buttons/loading-button/LoadingButtonPage";
import { GradientButtonPage } from "./reusable-components/buttons/gradient-button/GradientButtonPage";
import {
  QuadLayerFillHoverButtonPage
} from "@/reusable-components/buttons/quad-layer-fill-hover-button/QuadLayerFillHoverButtonPage.jsx";


function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppSidebar />
        <Routes>
          <Route path="/" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/buttons/loading-button" element={<Main content={<LoadingButtonPage />} />} />
          <Route path="/buttons/gradient-button" element={<Main content={<GradientButtonPage />} />} />
          <Route path="/buttons/quad-layer-fill-hover-button" element={<Main content={<QuadLayerFillHoverButtonPage />} />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;