import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { UserRepository } from 'src/user/repository/users.repository';
import { UserService } from 'src/user/user.service';

@Injectable()
export class WalletService {

  @Inject(UserService)
  private readonly userService: UserService;

  create(createWalletDto: CreateWalletDto) {
    var user = this.userService.findById(createWalletDto.userId)
    if (user == null){
      throw new NotFoundException("user not found");
    }

    return this.create(createWalletDto);
  }

  findAll() {
    return `This action returns all wallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
