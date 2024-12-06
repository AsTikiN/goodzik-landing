import { styled, Typography } from "@mui/material";
import { GuideDto } from "../../types/GuideDto";
import { GuideCard } from "../GuideCard";

export interface GuidesSectionProps {
  guides: GuideDto[];
}

export const GuidesSection = ({ guides }: GuidesSectionProps) => {
  return (
    <GuidesSection.Wrapper>
      <Typography variant="h4" fontWeight={600}>
        Guides
      </Typography>
      <GuidesSection.Grid>
        {guides.map((guide) => (
          <GuideCard key={guide.id} data={guide} />
        ))}
      </GuidesSection.Grid>
    </GuidesSection.Wrapper>
  );
};

GuidesSection.Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

GuidesSection.Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
