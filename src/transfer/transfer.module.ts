import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferController } from './transfer.controller';
import { TransferRepository } from './repository/transfer.repository';
import { WalletModule } from 'src/wallet/wallet.module';

@Module({
  imports: [WalletModule],
  controllers: [TransferController],
  providers: [TransferService, {
    provide: 'Repository',
    useClass: TransferRepository,
  }],
})
export class TransferModule {}
