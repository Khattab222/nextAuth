
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { connectionDb } from '@/dbConfig/connection'
import  jwt  from 'jsonwebtoken';
import sendEmail from '@/helpers/mailer';




export async function POST (request){
    try {
        connectionDb()
        const reqBody = await request.json();
        const {username,email,password}= reqBody;

        // check user exist
        const userExist =await User.findOne({email});
        if (userExist) {
            console.log(userExist)
         return   NextResponse.json({message:'user already exist'},{cause:400})
        }
        const hashPassword = bcryptjs.hashSync(password,6);
        const newUser =new User({
            username,
            email,
            password:hashPassword
        })
       
        // generate token to confirm email
        const token =await jwt.sign({id:newUser._id},process.env.TOKEN_KEY,{expiresIn:'1d'});
        // confirm link
        const confirmLink = `${process.env.DOMAIN}/confirmemail?token=${token}`
        // send mail with link for confirmation
        const sendemail = await sendEmail({
            to:newUser.email,
            message:`<a href=${confirmLink}>click to confirm email</a>`,
            subject:"confirm you Email",
            
        })
        if (!sendemail) {
        throw new Error("unknown error please try again")
            
        }
  
        return NextResponse.json({message:'user created success please confirm from your mail'},{cause:201})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}