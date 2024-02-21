import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository';

export class CreateRouteUseCase {
  constructor(private userRepo: UserRepositoryInterface) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = User.create(input);
    await this.userRepo.insert(user);
    return user.toJSON();
  }
}

type CreateUserInput = {
    name: string;
    document: string;
    email: string;
    password: string;
};

type CreateUserOutput = {
    name: string;
    document: string;
    email: string;
    password: string;
};
