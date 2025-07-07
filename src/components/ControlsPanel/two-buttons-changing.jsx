import React, { useContext } from "react";
import themecontext from "../ThemeContext/themecontext";
import languagecontext from "../LanguageContext/languagecontext";

const ControlsPanel = () => {
  const changeTheme = useContext(themecontext);
  const changeLanguage = useContext(languagecontext);
  

  return (
    <>
      <button onClick={changeLanguage.toggleLanguage}>Сменить язык</button>
      <button onClick={changeTheme.toggleTheme}>Сменить тему</button>
    </>
  );
};

export default ControlsPanel;
