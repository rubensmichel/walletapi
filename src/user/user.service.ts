import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from './repository/repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('Repository') private usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.getAll();
  }

  findOne(document: string) {
    return this.usersRepository.getOne(document);
  }
}

