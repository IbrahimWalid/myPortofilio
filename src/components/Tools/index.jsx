import {
  StyledColoredTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";
import { StyledList, StyledListItem } from "./Tools.styled";

// import figma_image from "../../assets/tools/figma.png";
// import adobe_il_image from "../../assets/tools/adobe_il.png";
// import adobe_ps_image from "../../assets/tools/adobe_ps.png";
// import adobe_xd_image from "../../assets/tools/adobe_xd.png";
// import miro_image from "../../assets/tools/miro.png";
// import notion_image from "../../assets/tools/notion.png";
// import trello_image from "../../assets/tools/trello.png";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../assets/content.json";
const Tools = () => {
  const { language } = useLanguage();
  const content = contentData[language].tools;
  return (
    <StyledSection
      style={{
        paddingTop: 0,
        marginTop: "120px",
      }}
    >
      <StyledColoredTitle margin="auto">{content.title}</StyledColoredTitle>
      <StyledGraySubTitle textAlign="center" maxWidth="592px" margin="auto">
        {content.description}
      </StyledGraySubTitle>
      <StyledList>
        {content.tools.map((tool) => (
          <StyledListItem key={tool.name}>
            <img src={tool.image} alt="" />
            <p>{tool.name}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSection>
  );
};

export default Tools;
