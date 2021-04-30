import { HttpStatus, HttpException } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor() {
    super('BadRequest 400', HttpStatus.BAD_REQUEST);
  }
}

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden 403', HttpStatus.FORBIDDEN);
  }
}
