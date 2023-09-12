import {connectionDb} from '@/dbConfig/connection'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'


connectionDb()

export async function POST (request){
    try {
        const reqBody = await request.json();
        const {username,email,password}= reqBody;
        console.log(reqBody);

        // check user exist
        const userExist = User.findOne({email});
        if (userExist) {
         return   NextResponse.json({message:'user already exist'},{cause:400})
        }
        const hashPassword = bcryptjs.hashSync(password,6);
        const newUser = User.create({
            username,
            email,
            password:hashPassword
        })
        if (!newUser) {
            return   NextResponse.json({message:'error in create new user'},{cause:400})
        }
        return NextResponse.json({message:'user created success'},{cause:201})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}