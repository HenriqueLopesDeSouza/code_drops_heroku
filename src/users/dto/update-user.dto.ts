import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsEmail()
    @ApiProperty()
    email: string;

    @ApiProperty()
    name:string;

    @ApiProperty()
    password:string;

}
