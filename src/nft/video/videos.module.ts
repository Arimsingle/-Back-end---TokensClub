import { Module } from '@nestjs/common';
import { VideosResolver } from './videos.resolver';
import { VideosService } from './videos.service';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../../shared/exception-filter/http-exception.filter';
@Module({
  providers: [VideosService, VideosResolver],
})
@UseFilters(new HttpExceptionFilter())
export class VideoMudule {}
