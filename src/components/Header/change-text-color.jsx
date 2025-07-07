import { useContext } from "react";
import languagecontext from "../LanguageContext/languagecontext";
import themecontext from "../ThemeContext/themecontext";
import { translations } from "../../translations";


const Header = () => {
  const {theme} = useContext(themecontext);
  const {language} = useContext(languagecontext);
  console.log(language)

  return (
    <>
     <p className={theme === 'light' ? 'blackColor' : 'redColor'} >{translations[language].welcome }</p>

     
    
      
    </>
  );
};

export default Header;
