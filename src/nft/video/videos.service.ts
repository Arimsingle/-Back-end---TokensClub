import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { VideoType } from './model/videos.type';
import { GetVideoArgs } from '../video/dto/args/get.video.args';
@Injectable()
export class VideoService {
  private videos: VideoType[] = [];
  public getVideo(getVideoArgs: GetVideoArgs): VideoType {
    return ;
  }
}
