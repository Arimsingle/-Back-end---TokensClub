import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, isString } from 'class-validator';

@ArgsType()
export class GetVideoArgs {
  @Field(() => String)
  @IsNotEmpty()
  account: string;
}
