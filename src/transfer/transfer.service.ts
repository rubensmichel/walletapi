import { ConflictException, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from './repository/repository';
import { Transfer } from './entities/transfer.entity';
import axios from 'axios';

@Injectable()
export class TransferService {
    httpService: any;
    constructor(@Inject('Repository') private transferRepository: Repository<Transfer>) {}

    @Inject(WalletService)
    private readonly walletService: WalletService;

    async transfer(transferDto: TransferDto) {
        let walletOrigin = this.walletService.findOne(transferDto.walletOriginId)
        if (walletOrigin == null) {
            throw new NotFoundException("wallet origin id not found");
        }

        let walletDest = this.walletService.findOne(transferDto.walletDestinationId)
        if (walletDest == null) {
            throw new NotFoundException("wallet destination id not found");
        }

        if (transferDto.value > walletOrigin.balance){
            throw new ConflictException("no have balance to complete this transfer");
        }

        this.walletService.debit(walletOrigin, transferDto.value)

        let statusCode = await axios.post('https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc',
        ).then((res) => {
            return res.status;
        });

        if (statusCode != 200){
            Logger.log("unauthorized transfer, executing rollback")
            this.walletService.credit(walletOrigin, transferDto.value)
            throw new ConflictException("unauthorized transfer");
        }
        
        this.walletService.credit(walletDest, transferDto.value)
        this.transferRepository.create(transferDto)

        Logger.log("send notification about credit in destination wallet")
        const params = JSON.stringify(TransferDto);
        await axios.post('https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc', params)

        return
    }

    list() {
        return this.transferRepository.getAll();
    }
}
