import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AppService {

  private users = [
    {username:"akshay",email:"askshay@gmail.com",mobile:1234567892,password:"1234"}
  ]

  getHello(): string {
    return 'Hello World!';
  }

  async signup(data){
    console.log(data)
    let {username,email,mobile,password} = data

    password = await bcrypt.hash(password,10)

    console.log(password)

    this.users.push({username,email,mobile,password})

    return {success:true,users:this.users}
  }

}
