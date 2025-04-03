import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignupDto } from './dto/signup.dto';
import 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('signup')
  Signup(@Body() signupDto : SignupDto)  {
    console.log(signupDto)
     return this.appService.signup(signupDto)
  }

  @Post()
  login(@Body() loginDto : any) {

  }



   
}
