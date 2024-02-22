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

    getByDocument(document: string){
        return this.user.find(user => document == user.document);
    }

    getByEmail(email: string){
        return this.user.find(user => email == user.email);
    }
}