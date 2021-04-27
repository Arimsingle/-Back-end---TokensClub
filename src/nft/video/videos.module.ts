import { Module } from '@nestjs/common';
import { VideosResolver } from './videos.resolver';
import { VideosService } from './videos.service';
@Module({
  providers: [VideosService, VideosResolver],
})
export class VideoMudule {}
