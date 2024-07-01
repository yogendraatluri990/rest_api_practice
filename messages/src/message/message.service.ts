import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessage(): string {
    return 'Hello World!';
  }

  getCurrentMessage(id: number): string {
    return `Current Message Id is: ${id}`;
  }

  createMessage(message: string) {
    return `Current Message is: ${message}`;
  }
}
