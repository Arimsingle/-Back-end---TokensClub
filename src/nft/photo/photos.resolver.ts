import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PhotoType } from './model/photo.type';
import { PhotosService } from './photos.service';
import { GetPhotoArgs } from './dto/args/get.photo.args';
import { GetPhotosArgs } from './dto/args/get.photos.args';
import { CreatePhotoInput } from './dto/input/create.photo.input';
import { UpdatePhotoInput } from './dto/input/update.photo.input';
import { DeletePhotoInput } from './dto/input/delete.photo.input';
@Resolver(() => PhotoType)
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}
  @Query(() => PhotoType, { name: 'photo' })
  getPhoto(@Args() getPhotoArgs: GetPhotoArgs): PhotoType {
    return this.photosService.getPhoto(getPhotoArgs);
  }
  @Query(() => [PhotoType], { name: 'photos' })
  getsPhoto(@Args() getPhotosArgs: GetPhotosArgs): PhotoType[] {
    return this.photosService.getsPhoto(getPhotosArgs);
  }
  @Mutation(() => PhotoType)
  createPhoto(
    @Args('createPhoto') createPhotoInput: CreatePhotoInput,
  ): PhotoType {
    return this.photosService.createPhoto(createPhotoInput);
  }
  @Mutation(() => PhotoType)
  updatePhoto(
    @Args('updatePhoto') updatePhotoInput: UpdatePhotoInput,
  ): PhotoType {
    return this.photosService.updatePhoto(updatePhotoInput);
  }
  @Mutation(() => PhotoType)
  deletePhoto(
    @Args('deletePhoto') deletePhotoInput: DeletePhotoInput,
  ): PhotoType {
    return this.photosService.deletePhoto(deletePhotoInput);
  }
}
