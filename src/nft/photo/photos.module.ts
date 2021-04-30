import { Module } from '@nestjs/common';
import { PhotosResolver } from './photos.resolver';
import { PhotosService } from './photos.service';
@Module({
  providers: [PhotosService, PhotosResolver],
})
export class PhotoMudule {}
