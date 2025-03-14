import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop()
  fullname: string;

  @Prop()
  avatar: string; 
  @Prop()
  bio: string; 

  @Prop({ type: [{ name: String, url: String }], default: [] })
  socialLinks: { name: string; url: string }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
