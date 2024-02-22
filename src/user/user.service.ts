import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from './repository/repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('Repository') private usersRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    let user = this.usersRepository.getByDocument(createUserDto.document);
    if (user != null){
      throw new BadRequestException("user with this document already create");
    }

    user = this.usersRepository.getByEmail(createUserDto.email);
    if (user != null){
      throw new BadRequestException("user with this email already create");
    }

    var id = 1;
    const ids = this.usersRepository.getAll().map(object => {
      return object.id;
    });
    if (ids.length > 0){
      id = 1 + Math.max(...ids);
    }
    createUserDto.id = id;

    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.getAll();
  }

  findByDocument(document: string) {
    return this.usersRepository.getByDocument(document);
  }
}

