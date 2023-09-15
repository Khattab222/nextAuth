import { connectionDb } from '@/dbConfig/connection'
import { GetDataFromToken } from '@/helpers/getDataFromToken'
import User from '@/models/userModel'
import {NextResponse} from 'next/server'



connectionDb()
export const GET =async (request) =>{

    try {
            const userData = await GetDataFromToken(request);
            const user = await User.findById(userData.id).select('-password')
            if (!user) {
                return NextResponse.json({message:'invalid user Id'},{cause:'400'})
            }
            return NextResponse.json({message:'success',user})


    } catch (error) {
        return NextResponse.json({error:error.message},{cause:'500'})
    }
    
}