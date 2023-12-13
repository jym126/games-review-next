import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const requestData = await request.json(); 

    // console to demonstrate the data receiving on the server

    const { writeFile } = require('fs');

    const path = './data.json';
    const data = { id: requestData.name };
    
    writeFile(path, JSON.stringify(data, null, 2), (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        return;
      }
      console.log('Data written successfully to disk');
    });

     // Return a response. You can also pass response back to FE. For example whatever string
      return NextResponse.json(
      { message: "Name updated", response: { whatever: 'Whatever'} },
      { status: 200 }
    );
}