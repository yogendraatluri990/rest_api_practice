import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly _messageService: MessageService) {}

  @Get()
  getMessage(): string {
    return this._messageService.getMessage();
  }

  @Get('/:id')
  getCurrentMessage(@Param('id') id: number) {
    return this._messageService.getCurrentMessage(id);
  }

  @Post()
  createMessage(@Body() message: any) {
    return this._messageService.createMessage(message);
  }
}
