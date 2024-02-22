import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/users.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: 'Repository',
    useClass: UserRepository,
  }],
})
export class UserModule {}
