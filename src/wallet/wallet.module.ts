import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { UserModule } from 'src/user/user.module';
import { WalletRepository } from './repository/wallet.repository';

@Module({
  imports: [UserModule],
  controllers: [WalletController],
  providers: [WalletService, {
    provide: 'Repository',
    useClass: WalletRepository,
  }],
})
export class WalletModule {}
