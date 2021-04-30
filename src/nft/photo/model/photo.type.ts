import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PhotoType {
  @Field()
  tokenId: string;
  @Field()
  account: string;
  @Field()
  title: string;
  @Field()
  email: string;
  @Field()
  name: string;
  @Field()
  sername: string;
  @Field()
  url: string;
  @Field()
  owner: string;
  @Field(() => Int)
  price: number;
  @Field({ nullable: true })
  vip?: boolean;
}
