import { useContext } from "react";
import languagecontext from "../LanguageContext/languagecontext";
import themecontext from "../ThemeContext/themecontext";

const UserProfile = () => {
  const showText = useContext(languagecontext);
  const changeThemeColor = useContext(themecontext);
  return <div></div>;
};

export default UserProfile;
