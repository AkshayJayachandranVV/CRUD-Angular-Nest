import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class LoginDto {
    
    @IsEmail({},{message : "INvalid Email"})
    @IsNotEmpty({message : "email is required"})
    email : string;

    @IsString()
    @MinLength(4,{message : "Password should be 4 length"})
    password : string;
}