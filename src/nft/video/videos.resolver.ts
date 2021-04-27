import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { VideoType } from './model/videos.type';
import { VideosService } from './videos.service';
import { GetVideoArgs } from './dto/args/get.video.args';
import { GetVideosArgs } from './dto/args/get.videos.args';
import { CreateVideoInput } from './dto/input/create.video.input';
import { UpdateVideoInput } from './dto/input/update.video.input';
import { DeleteVideoInput } from './dto/input/delete.video.input';
@Resolver(() => VideoType)
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}
  @Query(() => VideoType, { name: 'video' })
  getVideo(@Args() getVideoArgs: GetVideoArgs): VideoType {
    return this.videosService.getVideo(getVideoArgs);
  }
  @Query(() => [VideoType], { name: 'videos' })
  getsVideo(@Args() getVideosArgs: GetVideosArgs): VideoType[] {
    return this.videosService.getsVideo(getVideosArgs);
  }
  @Mutation(() => VideoType)
  createVideo(
    @Args('createVideo') createVideoInput: CreateVideoInput,
  ): VideoType {
    return this.videosService.createVideo(createVideoInput);
  }
  @Mutation(() => VideoType)
  updateVideo(
    @Args('updateVideo') updateVideoInput: UpdateVideoInput,
  ): VideoType {
    return this.videosService.updateVideo(updateVideoInput);
  }
  @Mutation(() => VideoType)
  deleteVideo(
    @Args('deleteVideo') deleteVideoInput: DeleteVideoInput,
  ): VideoType {
    return this.videosService.deleteVideo(deleteVideoInput);
  }
}
