
import { Document, Schema, model, models } from "mongoose";
import { EUserRole, EUserStatus } from "../../types/enum";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  createdAt: Date;
}
const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email_address: {
    type: String,
    unique: true,
    required: true
  },
  avatar: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
});
const User = models.User || model<IUser>("User", userSchema);
export default User;