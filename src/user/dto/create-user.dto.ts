import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        example: 1,
    })
    id: number;
    @ApiProperty({
        example: "rubens",
    })
    name: string;
    @ApiProperty({
        example: "4745876523",
    })
    document: string;
    @ApiProperty({
        example: "rubens@test.com",
    })
    email: string;
    @ApiProperty({
        example: "123456789",
    })
    password: string;
}
