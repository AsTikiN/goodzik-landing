import { UserDto } from "./UserDto";

export interface GuideDto {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: UserDto;
  videoUrl: string;
}
