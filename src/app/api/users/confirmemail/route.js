
import { connectionDb } from '@/dbConfig/connection';
import User from '@/models/userModel';
import  jwt  from 'jsonwebtoken';
import { NextResponse } from 'next/server';



connectionDb()
export async function POST(request) {

    try {
   
        const reqBody = await request.json();
        const {token}= reqBody;

      
    
        const decodedId = jwt.verify(token,process.env.TOKEN_KEY);
      
        const user = await User.findOneAndUpdate({_id:decodedId.id,isverified:false},{isverified:true});
      
        if (!user) {
         throw new Error("invalid token id")
         
        }
        return NextResponse.json({success:true,message:'email verified successfully',user})
        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }

  
}