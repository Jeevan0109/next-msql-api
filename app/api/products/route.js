import db from '../../db'
import { NextResponse } from 'next/server'

// This api fetch the all recrods from the db table 
export async function GET(){
    try {
        const results = await new Promise((resolve,reject)=>{
            db.query('SELECT * FROM demo',(err,results)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })

        console.log(results)
        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json(
            {
            message:error.message
            },
            {status:500}
        )
    }
}

//push data into table 
export async function POST(request){
    try {
        const {name} = await request.json();
        console.log(name);
        const result  = await db.query("INSERT INTO demo SET ?",{
            name
        })
        console.log(result)
        return NextResponse.json({name,id:result.id})
    } catch (error) {
        return NextResponse.json(
            {message:err.message},
            {status:500}
        )
    }
}

