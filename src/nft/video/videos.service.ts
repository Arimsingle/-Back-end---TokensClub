import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { VideoType } from './model/video.type';
import { GetVideoArgs } from '../video/dto/args/get.video.args';
import { GetVideosArgs } from '../video/dto/args/get.videos.args';
import { CreateVideoInput } from '../video/dto/input/create.video.input';
import { UpdateVideoInput } from './dto/input/update.video.input';
import { DeleteVideoInput } from './dto/input/delete.video.input';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../../shared/exception-filter/http-exception.filter';
import { BadRequestException } from '../../shared/exception-filter/all-request/exception.service';
@Injectable()
export class VideosService {
  private videos: VideoType[] = [];
  @UseFilters(new HttpExceptionFilter())
  public getVideo(getVideoArgs: GetVideoArgs): VideoType {
    try {
      return this.videos.find(
        (video) => video.account === getVideoArgs.account,
      );
    } catch (error) {
      throw new BadRequestException();
    }
  }
  public getsVideo(getVideosArgs: GetVideosArgs): VideoType[] {
    try {
      return getVideosArgs.accounts.map((account: string) =>
        this.getVideo({ account }),
      );
    } catch (error) {
      throw new BadRequestException();
    }
  }
  public createVideo(createVideoInput: CreateVideoInput): VideoType {
    try {
      const video: VideoType = {
        tokenId: uuidv4(),
        ...createVideoInput,
      };
      this.videos.push(video);
      return video;
    } catch (error) {
      throw new BadRequestException();
    }
  }
  public updateVideo(updateVideoInput: UpdateVideoInput): VideoType {
    try {
      const video: VideoType = this.videos.find(
        (video) => video.account === updateVideoInput.account,
      );
      Object.assign(video, updateVideoInput); //update
      return video;
    } catch (error) {
      throw new BadRequestException();
    }
  }
  public deleteVideo(deleteVideoInput: DeleteVideoInput): VideoType {
    try {
      const userIndex = this.videos.findIndex(
        (video) => video.account === deleteVideoInput.account,
      );
      const video = this.videos[userIndex];
      this.videos.splice(userIndex);
      return video;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
