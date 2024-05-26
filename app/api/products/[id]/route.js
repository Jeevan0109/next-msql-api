import { NextResponse } from "next/server";
import db from '../../../db'


//get single value
export async function GET(request,{params}){
    const { id } = params;

    try {
        // console.log(params.id)
        const result = await new Promise((resolve,reject)=>{
            db.query('SELECT * FROM demo where id = ?',[id],(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}

// delete single value 
export async function DELETE(request,{params}){
    try {
        const res = await new Promise((resolve,reject)=>{
            db.query('DELETE FROM demo WHERE id = ?',[params.id],(err,result)=>{
               if(err){
                   reject(err)
               }else{
                   resolve(result)
               }   
           })      
       }) 
       return NextResponse.json({message:"Data deleted succesfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message},{status:500})
    }
}

//update the single records 
export async function PUT(request,{params}){
    try {
        const data = await request.json();
        await db.query('UPDATE demo SET ? WHERE id = ?',[data,params.id]);
        return NextResponse.json({
            ...data,
            id:params.id
        },{message:"Data successfully update"},{status:200})

    } catch (error) {
        return NextResponse.json({message:error.message},{status:500})    
    }
}