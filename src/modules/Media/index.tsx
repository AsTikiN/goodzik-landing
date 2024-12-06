import { SnapSection } from "@/components/SnapSection";
import {
  Container,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import { srcset } from "./lib/srcset";
import { Stack } from "@mui/system";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "@/images/icons";

const itemData = [
  {
    img: "https://civil-protection-humanitarian-aid.ec.europa.eu/sites/default/files/styles/embed_large/public/2022-12/A%20story%20of%202%20volunteers%20in%20Ukraine%2001.jpg?itok=OopVivKc",
    title: "Happy Volunteer Day",
    rows: 3,
    cols: 2,
  },
  {
    img: "https://visitukraine.today/media/blog/previews/3Z3B2fyQaoIxptZNvEZ5qlyvfnylLvfmazUZ44xP.webp",
    title: "Hospital Assistance",
  },
  {
    img: "https://450.org.ua/wp-content/uploads/2023/04/photo_2023-04-21_11-43-26-768x1024.webp",
    title: "Warrior",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0YEN38R7-MFGrJ-9xvReCYHbiNs0kUeKHw&s",
    title: "Medical Support",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://news.blog.net.ua/media/2023/05/1683710103_201_SHveyna-rota-iak-volontery-u-Lvovi-shyiut-adaptyvnyy-odiah-dlia.jpg",
    title: "Costume",
    cols: 2,
  },
  {
    img: "https://pokrovsk.news/uploads/news/redactor/rfudeoggdua5qq9y.jpg",
    title: "Work time",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://static01.nyt.com/images/2022/05/10/travel/oakImage-1652189194797/oakImage-1652189194797-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    title: "Help",
  },
  {
    img: "https://www.unicef.org/ukraine/sites/unicef.org.ukraine/files/styles/press_release_feature/public/DSC08205.JPG.webp?itok=zjkPF3WM",
    title: "Achivements",
  },
];

const socialMediaData = [
  {
    title: "Instagram",
    description:
      "Follow us for daily style inspiration, behind-the-scenes content, and exclusive product previews",
    icon: <InstagramIcon />,
  },
  {
    title: "Facebook",
    description:
      "Join our community for the latest news, special offers, and customer stories",
    icon: <FacebookIcon />,
  },
  {
    title: "Telegram",
    description:
      "Get instant updates and chat with other adaptive fashion enthusiasts",
    icon: <TelegramIcon />,
  },
];

export const Media = () => {
  return (
    <SnapSection padding="100px 0" justifyContent="center">
      <Container>
        <Stack flexDirection="row" alignItems="center" gap="60px">
          <Stack maxWidth="500px" gap="20px">
            <Title>Our Social Media</Title>
            <Description>
              Stay connected with us across all platforms! Follow our social
              media channels for the latest updates, news, and exclusive
              content. Join the conversation and be part of our growing
              community.
            </Description>

            <Stack mt="20px" gap="30px">
              {socialMediaData.map((item, index) => (
                <ScrollMotion key={index} delay={index * timings.stagger}>
                  <Stack flexDirection="row" gap="20px">
                    {item.icon}
                    <Stack gap="8px">
                      <SocialMediaTitle>{item.title}</SocialMediaTitle>
                      <SocialMediaDescription>
                        {item.description}
                      </SocialMediaDescription>
                    </Stack>
                  </Stack>
                </ScrollMotion>
              ))}
            </Stack>
          </Stack>
          <Stack flex="1" maxWidth="800px" maxHeight="650px">
            <ImageList variant="quilted" cols={4} rowHeight={121}>
              {itemData.map((item, index) => (
                <ImageListItem
                  key={index}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                  sx={{
                    "& img": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                    overflow: "hidden",
                  }}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Stack>
      </Container>
    </SnapSection>
  );
};

const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 33px;
  font-weight: 500;
  color: #7d82a1;
`;

const SocialMediaTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: 600,
});

const SocialMediaDescription = styled(Typography)({
  fontSize: "20px",
  fontWeight: 400,
});
