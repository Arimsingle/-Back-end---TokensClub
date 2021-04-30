import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

@InputType()
export class UpdatePhotoInput {
  @Field(() => String)
  @IsNotEmpty()
  account: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  sername?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  url?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  price?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  vip?: boolean;
}
