import { Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { Repository } from "./repository";

@Injectable()

export class UserRepository implements Repository<User> {
    private user: User[] = [];

    create(user: User){
        this.user.push(user);
    }

    getAll(){
        return this.user;
    }

    getOne(document: string){
        return this.user.find(user => document == user.document);
    }
}