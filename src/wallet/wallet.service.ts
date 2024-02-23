import { NotFoundException, Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UserService } from 'src/user/user.service';
import { Wallet } from './entities/wallet.entity';
import { Repository } from './repository/repository';

@Injectable()
export class WalletService {
  constructor(@Inject('Repository') private walletRepository: Repository<Wallet>) {}

  @Inject(UserService)
  private readonly userService: UserService;

  create(createWalletDto: CreateWalletDto) {
    var user = this.userService.findById(createWalletDto.userId);
    if (user == null){
      throw new NotFoundException("user not found");
    }

    let wallet = this.walletRepository.getByUser(createWalletDto.userId);
    if (wallet != null){
      throw new BadRequestException("wallet to user already created");
    }

    var id = 1;
    const ids = this.walletRepository.getAll().map(object => {
      return object.id;
    });
    if (ids.length > 0){
      id = 1 + Math.max(...ids);
    }
    createWalletDto.id = id;

    return this.walletRepository.create(createWalletDto);
  }

  findAll() {
    return this.walletRepository.getAll();
  }

  findOne(id: number) {
    return this.walletRepository.getById(id);
  }

  findByUser(userId: number) {
    return this.walletRepository.getByUser(userId);
  }

  debit(createWalletDto: CreateWalletDto, value: number) {
    return this.walletRepository.debit(createWalletDto, value);
  }

  credit(createWalletDto: CreateWalletDto, value: number) {
    return this.walletRepository.credit(createWalletDto, value);
  }
}
