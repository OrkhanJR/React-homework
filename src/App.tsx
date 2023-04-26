import React from "react";
import "./App.scss";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { DietPage } from "./pages/DietPage/DietPage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {/* <HomePage /> */}
        {/* <DietPage /> */}
        {/* <MenuPage /> */}
        {/* <LoginPage /> */}
        <RegisterPage />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
