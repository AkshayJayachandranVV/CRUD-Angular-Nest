import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class SignupDto {
    

    @IsString()
    @IsNotEmpty({message : 'Username is required'})
    username : string;
    
    @IsString()
    @Matches(/^[0-9]{10}$/,{message: "MObile number should be 10 digits"})
    @IsNotEmpty({message : "Mobile is required"})
    mobile : string;

    @IsEmail({},{message:"INvalid Email"})
    @IsNotEmpty({message: "Email is required"})
    email : string;

    @IsString()
    @MinLength(4,{message : "Password must be 4 digits"})
    password : string;
}