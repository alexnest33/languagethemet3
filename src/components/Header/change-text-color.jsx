import { useContext } from "react";
import languagecontext from "../LanguageContext/languagecontext";
import themecontext from "../ThemeContext/themecontext";

const Header = () => {
  const theme = useContext(themecontext);
  const language = useContext(languagecontext);

  return (
    <>
      <h1 className={language === "en" ? "blackColor" : "redColor"}>
        Добро пожаловать
      </h1>
      
    </>
  );
};

export default Header;
