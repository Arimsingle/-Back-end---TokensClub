import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

@InputType()
export class CreateVideoInput {
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

  @Field(() => String)
  @IsNotEmpty()
  sername: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @Field(() => Int)
  @IsNotEmpty()
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  minute?: number;
}
