import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { VideoType } from './model/video.type';
import { GetVideoArgs } from '../video/dto/args/get.video.args';
import { GetVideosArgs } from '../video/dto/args/get.videos.args';
import { CreateVideoInput } from '../video/dto/input/create.video.input';
import { UpdateVideoInput } from './dto/input/update.video.input';
import { DeleteVideoInput } from './dto/input/delete.video.input';
@Injectable()
export class VideosService {
  private videos: VideoType[] = [];

  public getVideo(getVideoArgs: GetVideoArgs): VideoType {
    return this.videos.find((video) => video.account === getVideoArgs.account);
  }
  public getsVideo(getVideosArgs: GetVideosArgs): VideoType[] {
    return getVideosArgs.accounts.map((account: string) =>
      this.getVideo({ account }),
    );
  }
  public createVideo(createVideoInput: CreateVideoInput): VideoType {
    const video: VideoType = {
      tokenId: uuidv4(),
      ...createVideoInput,
    };
    this.videos.push(video);
    return video;
  }
  public updateVideo(updateVideoInput: UpdateVideoInput): VideoType {
    const video: VideoType = this.videos.find(
      (video) => video.account === updateVideoInput.account,
    );
    Object.assign(video, updateVideoInput); //update
    return video;
  }
  public deleteVideo(deleteVideoInput: DeleteVideoInput): VideoType {
    const userIndex = this.videos.findIndex(
      (video) => video.account === deleteVideoInput.account,
    );
    const video = this.videos[userIndex];
    this.videos.splice(userIndex);
    return video;
  }
}
