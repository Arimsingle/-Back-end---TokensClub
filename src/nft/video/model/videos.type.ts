import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VideoType {
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
  @Field(() => Int)
  price: number;
  @Field({ nullable: true })
  vip?: boolean;
  @Field({ nullable: true })
  minute?: number;
}
