import { LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
  log(message: string) {
    /* your implementation */
    console.log('log');
  }
  error(message: string, trace: string) {
    /* your implementation */
    console.log('error');
  }
  warn(message: string) {
    /* your implementation */
    console.log('warn');
  }
  debug(message: string) {
    /* your implementation */
    console.log('debug');
  }
  verbose(message: string) {
    /* your implementation */
    console.log('verbose');
  }
}
