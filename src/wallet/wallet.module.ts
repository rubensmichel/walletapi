import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { UserRepository } from 'src/user/repository/users.repository';

@Module({
  imports: [UserRepository],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
