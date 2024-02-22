import { Injectable } from "@nestjs/common";
import { Wallet } from "../entities/wallet.entity";
import { Repository } from "./repository";

@Injectable()

export class WalletRepository implements Repository<Wallet> {
    private wallet: Wallet[] = [];

    create(wallet: Wallet){
        this.wallet.push(wallet);
    }

    getAll(){
        return this.wallet;
    }

    getById(id: number){
        return this.wallet.find(wallet => id == wallet.id);
    }
}