import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { TransferRepository } from './repository/transfer.repository';
import { WalletModule } from 'src/wallet/wallet.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [WalletModule, HttpModule],
  controllers: [TransferController],
  providers: [TransferService, {
    provide: 'Repository',
    useClass: TransferRepository,
  }],
})
export class TransferModule {}
