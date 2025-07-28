import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Protect, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Community from "./pages/Community"
import Tools from "./pages/Tools"
import News from "./pages/News"
import Profile from "./pages/Profile"
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/community"
              element={
                <Protect fallback={<RedirectToSignIn />}>
                  <Community />
                </Protect>
              }
            />

            <Route
              path="/tools"
              element={
                <Protect fallback={<RedirectToSignIn />}>
                  <Tools />
                </Protect>
              }
            />

            <Route
              path="/news"
              element={
                <Protect fallback={<RedirectToSignIn />}>
                  <News />
                </Protect>
              }
            />

            <Route
              path="/profile"
              element={
                <Protect fallback={<RedirectToSignIn />}>
                  <Profile />
                </Protect>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App