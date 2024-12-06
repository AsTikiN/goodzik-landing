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
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from "@/pages/images/icons";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 3,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
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
            <ImageList
              // sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
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
