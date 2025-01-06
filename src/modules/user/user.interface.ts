import { JwtPayload } from "jsonwebtoken";
import { Model } from "mongoose";

export type TUserRole = "user" | "admin";
export type TUserStatus = "active" | "blocked";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TUserRole;
  status: TUserStatus;
};

export interface IUserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  createToken(
    jwtPayload: JwtPayload,
    secret: string,
    expiresIn: string,
  ): string;
  verifyToken(token: string, secret: string): JwtPayload;
}
