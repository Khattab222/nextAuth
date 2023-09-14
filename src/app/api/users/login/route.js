
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { connectionDb } from '@/dbConfig/connection'
import jwt  from 'jsonwebtoken'


connectionDb()

export async function POST (request){
    try {
      
        const reqBody = await request.json();
        const {email,password}= reqBody;

        // check user exist
        const userExist =await User.findOne({email});
        if (!userExist) {
         
         return   NextResponse.json({message:'this email not exist'},{cause:400})
        }
        const comparePassword = bcryptjs.compareSync(password,userExist.password);
      
        if (!comparePassword) {
            return   NextResponse.json({message:'wrong password'},{cause:400})
        }
        const tokenData = {
            id:userExist._id,
            username:userExist.username,
            email:userExist.email
        } 
        // create token 
        const token =await jwt.sign(tokenData,process.env.TOKEN_KEY,{expiresIn:'1d'})
   
      const response =  NextResponse.json({message:'login success'},{cause:200})
      response.cookies.set('token', token , {
        httpOnly:true
      })
      return response

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}