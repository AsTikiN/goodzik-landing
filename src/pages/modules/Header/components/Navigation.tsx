import { Stack, styled } from "@mui/material";
import Link from "next/link";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    // Add fade out effect
    document.body.style.opacity = "0";

    setTimeout(() => {
      // Scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }

      // Fade back in
      document.body.style.opacity = "1";
    }, 300); // Wait for fade out to complete
  };

  return (
    <div>
      <Stack direction="row" spacing={"40px"}>
        <NavLink href="#home" onClick={() => scrollToSection("home")}>
          Home
        </NavLink>
        <NavLink href="#about" onClick={() => scrollToSection("about")}>
          Preview
        </NavLink>
        <NavLink href="#contact" onClick={() => scrollToSection("contact")}>
          Achievements
        </NavLink>
        <NavLink href="#contact" onClick={() => scrollToSection("contact")}>
          Services
        </NavLink>
        <NavLink href="#contact" onClick={() => scrollToSection("contact")}>
          Advantages
        </NavLink>
      </Stack>
    </div>
  );
};

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.75);

  &:hover {
    color: #666;
  }
`;
