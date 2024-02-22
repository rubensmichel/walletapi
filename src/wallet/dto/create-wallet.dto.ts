import { ApiProperty } from "@nestjs/swagger";

export class CreateWalletDto {
    @ApiProperty({
        example: 2,
    })
    userId: number;
    @ApiProperty({
        example: 50,
    })
    balance: number;
}
