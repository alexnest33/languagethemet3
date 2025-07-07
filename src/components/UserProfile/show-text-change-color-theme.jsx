import { useContext } from "react";
import languagecontext from "../LanguageContext/languagecontext";
import themecontext from "../ThemeContext/themecontext";
import { translations } from "../../translations";

const UserProfile = () => {
  const {language} = useContext(languagecontext);
  const {theme} = useContext(themecontext);
  return (
    <div>
      <p className={theme === 'light' ? 'blackColor' : 'redColor'} >{translations[language].profile}</p>
    </div>
  );
};

export default UserProfile;
