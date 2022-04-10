import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import { LearnPage } from "./pages/learn-page";
import { SimulatorPage } from "./pages/simulator-page";
import { PortfolioPage } from "./pages/portfolio-page";
import { ProfilePage } from "./pages/profile-page";
import QuizFlow from "./pages/quiz/QuizFlow";

function App() {
  // const { isLoading } = useAuth0();
  // if (isLoading)
  //   return (
  //     <div>
  //       <img src="./assets/splash.png" alt="" />
  //     </div>
  //   );

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LearnPage />} />
          <Route path="/simulator" element={<SimulatorPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/quiz" element={<QuizFlow />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
