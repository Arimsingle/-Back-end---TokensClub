import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PhotoType } from './model/photo.type';
import { GetPhotoArgs } from '../photo/dto/args/get.photo.args';
import { GetPhotosArgs } from '../photo/dto/args/get.photos.args';
import { CreatePhotoInput } from '../photo/dto/input/create.photo.input';
import { UpdatePhotoInput } from './dto/input/update.photo.input';
import { DeletePhotoInput } from './dto/input/delete.photo.input';
@Injectable()
export class PhotosService {
  private photos: PhotoType[] = [];

  public getPhoto(getPhotoArgs: GetPhotoArgs): PhotoType {
    return this.photos.find((photo) => photo.account === getPhotoArgs.account);
  }
  public getsPhoto(getPhotosArgs: GetPhotosArgs): PhotoType[] {
    return getPhotosArgs.accounts.map((account: string) =>
      this.getPhoto({ account }),
    );
  }
  public createPhoto(createPhotoInput: CreatePhotoInput): PhotoType {
    const photo: PhotoType = {
      tokenId: uuidv4(),
      ...createPhotoInput,
    };
    this.photos.push(photo);
    return photo;
  }
  public updatePhoto(updatePhotoInput: UpdatePhotoInput): PhotoType {
    const photo: PhotoType = this.photos.find(
      (photo) => photo.account === updatePhotoInput.account,
    );
    Object.assign(photo, updatePhotoInput); //update
    return photo;
  }
  public deletePhoto(deletePhotoInput: DeletePhotoInput): PhotoType {
    const userIndex = this.photos.findIndex(
      (photo) => photo.account === deletePhotoInput.account,
    );
    const photo = this.photos[userIndex];
    this.photos.splice(userIndex);
    return photo;
  }
}
