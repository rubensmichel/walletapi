import { Injectable } from "@nestjs/common";
import { Wallet } from "../entities/wallet.entity";
import { Repository } from "./repository";

@Injectable()

export class WalletRepository implements Repository<Wallet> {
    private wallets: Wallet[] = [];

    create(wallet: Wallet){
        this.wallets.push(wallet);
    }

    getAll(){
        return this.wallets;
    }

    getById(id: number){
        return this.wallets.find(wallet => id == wallet.id);
    }

    getByUser(userId: number){
        return this.wallets.find(wallet => userId == wallet.userId);
    }

    debit(wallet: Wallet, value: number){
        wallet.balance = wallet.balance - value
        let oldWallet = this.wallets.find(obj => obj.id == wallet.id);
        Object.assign(oldWallet, wallet);
    }

    credit(wallet: Wallet, value: number){
        wallet.balance = wallet.balance + value
        let oldWallet = this.wallets.find(obj => obj.id == wallet.id);
        Object.assign(oldWallet, wallet);
    }
}