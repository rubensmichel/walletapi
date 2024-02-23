import { TransferService } from './transfer.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  transfer(@Body() transferDto: TransferDto) {
    return this.transferService.transfer(transferDto);
  }

  @Get()
  transferList() {
    return this.transferService.list();
  }

}
