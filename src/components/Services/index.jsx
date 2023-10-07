import { Box } from "@mui/system";
import {
  StyledColoredTitle,
  StyledParagraph,
  StyledSection,
} from "../About/About.styled";
import ui_design_image from "../../assets/services/ui_design.png";
import ux_design_image from "../../assets/services/ux_design.png";
import social_media_design_image from "../../assets/services/social_media_design.png";
import logo_design_image from "../../assets/services/logo_design.png";
import mobile_app_design_image from "../../assets/services/mobile_app_design.png";
import web_design_image from "../../assets/services/web_design.png";
import identity_design_image from "../../assets/services/identity_design.png";
import graphic_design_image from "../../assets/services/graphic_design.png";
import {
  StyledGridContainer,
  StyledGridItem,
  StyledImage,
} from "./Services.styled";

const servicesList = [
  {
    title: "UI Design",
    content: "Most common methods for designing websites that",
    image: ui_design_image,
  },
  {
    title: "UX Design",
    content: "Most common methods for designing websites that",
    image: ux_design_image,
  },
  {
    title: "Social Media Designs",
    content: "Most common methods for designing websites that",
    image: social_media_design_image,
  },
  {
    title: "Logo Design",
    content: "Most common methods for designing websites that",
    image: logo_design_image,
  },
  {
    title: "Mobile App Design",
    content: "Most common methods for designing websites that",
    image: mobile_app_design_image,
  },
  {
    title: "Web Design",
    content: "Most common methods for designing websites that",
    image: web_design_image,
  },
  {
    title: "Graphic Design",
    content: "Most common methods for designing websites that",
    image: graphic_design_image,
  },
  {
    title: "Identy Design",
    content: "Most common methods for designing websites that",
    image: identity_design_image,
  },
];

const Services = () => {
  return (
    <StyledSection
      style={{
        paddingBottom: "170px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "520px",
          margin: "auto",
          marginBottom: "80px",
        }}
      >
        <StyledColoredTitle
          component="h4"
          style={{
            margin: "auto",
            padding: "4px 0px",
          }}
        >
          Services
        </StyledColoredTitle>
        <StyledParagraph
          style={{
            padding: "4px",
          }}
        >
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </StyledParagraph>
      </Box>
      <StyledGridContainer>
        {servicesList.map((service, index) => (
          <StyledGridItem key={index}>
            <StyledImage src={service.image} />
            <h5
              style={{
                whiteSpace: "nowrap",
                color: "#191919",
                textAlign: "center",
                leadingTrim: " both",
                textEdge: " cap",
                fontSize: " 24px",
                fontStyle: " normal",
                fontWeight: " 700",
                marginBottom: "16px",
                padding: "0",
                height: "17px",
              }}
            >
              {service.title}
            </h5>
            <p
              style={{
                color: "#4D4D4D",
                textAlign: "center",
                leadingTrim: "both",
                textEdge: "cap",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "140%",
              }}
            >
              {service.content}
            </p>
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Services;