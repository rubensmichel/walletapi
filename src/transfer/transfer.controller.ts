import { TransferService } from './transfer.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('transfer')
@ApiTags("transfer")
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
