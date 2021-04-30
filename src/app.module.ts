import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/users.module';
import { VideoMudule } from './nft/video/videos.module';
import { PhotoMudule } from './nft/photo/photos.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    VideoMudule,
    PhotoMudule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
