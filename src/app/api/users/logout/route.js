const { NextResponse } = require("next/server");


export const GET = () =>{
    try {
        const response = NextResponse.json({message: "logout success"})
        response.cookies.set('token','',{
            httpOnly: true,
            expires: new Date()
        })
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}