import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeletePhotoInput {
  @Field(() => String)
  @IsNotEmpty()
  account: string;
}
