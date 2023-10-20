import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ismailiyada@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Ismail-Iyada",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ismail-iyada/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const [scrollUp, setScrollUp] = useState(true);
  const prevScrollPosition = useRef(0);
  // const transform = useRef("translateY(0)");
  const [transform, setTransform] = useState("translateY(0)");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollPosition.current) {
        //scrolling down
        if (scrollUp) {
          setScrollUp(false);
        }
      } else if (currentScrollY < prevScrollPosition.current) {
        //scrolling up
        if (!scrollUp) {
          setScrollUp(true);
        }
      }
      prevScrollPosition.current = currentScrollY;

      setTransform(scrollUp ? "translateY(0)" : "translateY(-200px)");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollUp]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      style={{ transform: transform }} // Use style property for dynamic transform
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
              spacing={8}
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Add social media links based on the `socials` data */}
              {/* <Box>
              <a href={socials[0].url}>
                <FontAwesomeIcon
                  icon={socials[0].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              </Box>
              <Box>
              <a href={socials[1].url}>
                <FontAwesomeIcon
                  icon={socials[1].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              </Box>
              <Box>
              <a href={socials[2].url}>
                <FontAwesomeIcon
                  icon={socials[2].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              </Box>
              <Box>
              <a href={socials[3].url}>
                <FontAwesomeIcon
                  icon={socials[3].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              </Box>
              <Box>
              <a href={socials[4].url}>
                <FontAwesomeIcon
                  icon={socials[4].icon}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
              </Box> */}

              {socials.map((social) => (
                <Box key={social.url}>
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      size="2x"
                    ></FontAwesomeIcon>
                  </a>
                </Box>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <Box>
                <a href="/#projects" onClick={handleClick("projects")}>
                  Projects
                </a>
              </Box>
              <Box>
                <a href="/#contact-me" onClick={handleClick("contactme")}>
                  Contact Me
                </a>
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
