import { ApiProperty } from "@nestjs/swagger";

export class TransferDto {
    @ApiProperty({
        example: 1,
    })
    walletOriginId: number;
    @ApiProperty({
        example: 2,
    })
    walletDestinationId: number;
    @ApiProperty({
        example: 50,
    })
    value: number;
}
