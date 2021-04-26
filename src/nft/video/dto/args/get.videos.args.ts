import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetsVideoArgs {
  @Field(() => [String])
  @IsNotEmpty()
  accounts: string[];
}
