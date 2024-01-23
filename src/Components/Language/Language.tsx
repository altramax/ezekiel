import LanguageStyle from "./LanguageStyle";

type languageType = {
  language: string;
};
const Language = ({ language }: languageType): JSX.Element => {
  return (
    <LanguageStyle>
      <div>
        <p>{language}</p>
      </div>
    </LanguageStyle>
  );
};

export default Language;
