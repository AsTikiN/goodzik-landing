import { GuideCommentDto } from "./GudieCommentDto";
import { GuideStepDto } from "./GuideStepDto";
import { UserDto } from "./UserDto";

export interface GuideDtoDetails {
  id: string;
  title: string;
  description: string;
  schemas: string[];
  steps: GuideStepDto[];
  comments: GuideCommentDto[];
  author: UserDto;
  videoUrl: string;
}
