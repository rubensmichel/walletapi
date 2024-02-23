import { Injectable } from "@nestjs/common";
import { Transfer } from "../entities/transfer.entity";
import { Repository } from "./repository";

@Injectable()

export class TransferRepository implements Repository<Transfer> {
    private transfer: Transfer[] = [];

    create(transfer: Transfer): void {
        this.transfer.push(transfer);
    }
    getAll(){
        return this.transfer;
    }
}