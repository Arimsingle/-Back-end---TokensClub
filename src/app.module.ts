import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/users.module';
import { VideoMudule } from './nft/video/videos.module';
import { PhotoMudule } from './nft/photo/photos.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/exception-filter/http-exception.filter';
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
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
