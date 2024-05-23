import { IUser } from "../users/userTypes";

export interface IBooks {
  _id: string;
  title: string;
  author: IUser;
  genre: string;
  description: string;
  coverImage: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;
}
