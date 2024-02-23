import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from './repository/repository';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransferService {
    constructor(@Inject('Repository') private transferRepository: Repository<Transfer>) {}

    @Inject(WalletService)
    private readonly walletService: WalletService;

    transfer(transferDto: TransferDto) {
        let walletOrigin = this.walletService.findOne(transferDto.walletOriginId)
        if (walletOrigin == null) {
            throw new NotFoundException("wallet origin id not found");
        }

        let walletDest = this.walletService.findOne(transferDto.walletDestinationId)
        if (walletDest == null) {
            throw new NotFoundException("wallet destination id not found");
        }

        this.walletService.debit(walletOrigin, transferDto.value)
        this.walletService.credit(walletDest, transferDto.value)
        this.transferRepository.create(transferDto)
        
        return
    }
}
