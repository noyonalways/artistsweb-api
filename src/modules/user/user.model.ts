import config from "@/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { model, Schema } from "mongoose";
import { userRoles, userStatuses } from "./user.constant";
import { IUserModel, TUser } from "./user.interface";

const userSchema = new Schema<TUser, IUserModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: {
        values: userRoles,
        message: "{VALUE} not valid role",
      },
      default: "user",
    },
    status: {
      type: String,
      enum: {
        values: userStatuses,
        message: "{VALUE} not valid status",
      },
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.SALT_ROUNDS));
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isPasswordMatched = function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.createToken = function (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string,
) {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

userSchema.statics.verifyToken = function (token: string, secret: string) {
  return jwt.verify(token, secret);
};

const User = model<TUser, IUserModel>("user", userSchema);
export default User;
