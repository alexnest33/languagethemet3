import { useState } from "react";
import ThemeContext from "./components/ThemeContext/themecontext";
import LanguageContext from "./components/LanguageContext/languagecontext";
import ControlsPanel from "./components/ControlsPanel/two-buttons-changing";
import UserProfile from "./components/UserProfile/show-text-change-color-theme";
import Header from "./components/Header/change-text-color";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");


  
  const toggleLanguage = () => {
    setLanguage((oldState) => (oldState === "en" ? "ru" : "en"));
  };

  const toggleTheme = () => {
    setTheme((oldState) => (oldState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <LanguageContext.Provider
        value={{ language, toggleLanguage}}
      >
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
          <Header />
          <ControlsPanel />

          <UserProfile />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
