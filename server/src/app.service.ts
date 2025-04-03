import { Injectable,BadRequestException} from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { error } from 'console';
import {v4 as uuidv4} from 'uuid'
@Injectable()
export class AppService {

  private users = [
    {id : "jsjssnsns",username:"akshay",email:"askshay@gmail.com",mobile:1234567892,password:"1234"}
  ]

  getHello(): string {
    return 'Hello World!';
  }

  async signup(data){
    try {
      console.log(data)
      let {username,email,mobile,password} = data

      if (!password) {
        throw new BadRequestException("Password is required"); 
      }

      password = await bcrypt.hash(password,10)
  
      console.log(password)

      const id = uuidv4()
  
      this.users.push({id,username,email,mobile,password})
  
      return {success:true,users:this.users}
    } catch (error) {
      console.log("error : " , error)
      throw new BadRequestException("signup failed")
    }
  }


  async login (data) {
    try {
        console.log(data)

        const {email,password} = data

        const user = this.users.find(user => user.email === email);

        if(!user){
            return {success : false , message : "INcorrect email"}
        }

        console.log(user)

        const passCheck = await bcrypt.compare(password,user.password)
        console.log(passCheck)
        if(passCheck){
              return {success:true,message : "Sccessfully logedin",id:user.id}
          }else{
              return {success:false,message : "Incorrect password"}
          }
    } catch (error) {
      console.log("error : " , error)
      throw new BadRequestException("Login failed")
    }
  }
  

  async home(id : string) {
    try {
      console.log(id)

      console.log("alll users",this.users)

      const user = this.users.find(user => user.id === id);

      console.log(user)

      if(!user){
        return {success : false, messsage : "User not found"}
      }

      return {success : true,message : "User data successfully",data:user}

    } catch (error) {
      console.log("error : " , error)
      throw new BadRequestException("Login failed")
    }
  }



  

}
