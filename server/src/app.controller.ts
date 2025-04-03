import { Body, Controller, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('signup')
  Signup(@Body() signupDto : SignupDto)  {
    try {
      console.log(signupDto)
      return this.appService.signup(signupDto)
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException("something went wrong ,Please try again")
    }
  }

  @Post('login')
  login(@Body() loginDto : LoginDto) {
    try {
      return this.appService.login(loginDto)
    } catch (error) {
      throw new InternalServerErrorException("something went wrong ,Please try again")
    }
  }


  @Get('home/:id')
  Home(@Param("id") id : string) {
      try {
        console.log(id)
        return this.appService.home(id)
      } catch (error) {
        throw new InternalServerErrorException("something went wrong ,Please try again")
      }
  }



   
}
