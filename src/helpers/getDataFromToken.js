import  jwt  from 'jsonwebtoken';
import { NextResponse } from 'next/server';
export const GetDataFromToken = (req) =>{

    try {
        const token = req.cookies.get('token')?.value || '';
        if (!token) {
            return NextResponse.json({message:'invalid token'})
        }
        const decodedToken = jwt.verify(token,process.env.TOKEN_KEY);
        if (!decodedToken) {
            return NextResponse.json({message:'invalid signature'})
            
        }
        return decodedToken
    } catch (error) {
        throw new Error(error.message)
    }
}