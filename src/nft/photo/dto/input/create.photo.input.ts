import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  @IsNotEmpty()
  account: string;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  sername: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @Field(() => String)
  @IsNotEmpty()
  owner: string;

  @Field(() => Int)
  @IsNotEmpty()
  price: number;
}
