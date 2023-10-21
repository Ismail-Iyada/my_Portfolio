import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


//gotta add a URL prop for the projects array
const projects = [
  {
    title: "Id ad id aliqua non aliquip.",
    description:
      "Id anim aliqua esse ipsum do velit dolore officia et ut duis. Ipsum tempor eiusmod nostrud sit. Tempor adipisicing consectetur nulla amet eiusmod sunt laborum ut cupidatat ea id. Fugiat nulla cillum aliqua qui reprehenderit esse reprehenderit incididunt ullamco. Consequat et enim dolore tempor ea officia elit pariatur elit nulla. Et commodo magna veniam nisi labore.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Fugiat in est officia cillum dolor cillum officia ut pariatur.",
    description:
      "Excepteur ex mollit velit reprehenderit anim tempor culpa. Elit consequat ullamco adipisicing exercitation do non nostrud amet quis ad non reprehenderit. In non sint voluptate quis voluptate dolor cillum. Proident exercitation magna mollit consequat ipsum est aliquip in consequat minim sunt. Eu fugiat culpa aliquip duis ipsum. Veniam voluptate occaecat deserunt mollit labore quis pariatur nostrud.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Ea culpa do ipsum in veniam occaecat culpa culpa cillum.",
    description:
      "Ullamco velit nisi irure aliquip nulla enim anim dolore proident cillum duis culpa. Minim non duis labore tempor sit esse excepteur quis. Veniam et pariatur consectetur velit minim culpa fugiat dolore eiusmod eiusmod cupidatat dolore anim qui. Qui cupidatat ea enim culpa mollit nostrud quis culpa.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Sint laboris tempor ipsum anim dolore culpa voluptate minim non qui sint ipsum.",
    description:
      "Culpa reprehenderit cupidatat adipisicing consequat cillum occaecat commodo consectetur occaecat laboris. Et consectetur ex consequat eu aliqua quis consectetur. Minim dolore laboris sint commodo pariatur in. Duis veniam non Lorem dolor elit culpa consectetur elit esse sint consectetur irure in aliquip. Laborum magna tempor irure quis irure do aute.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#B0794C"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="#"
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
