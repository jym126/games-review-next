import { NextResponse } from "next/server";

async function ReceiveName(request: Request) {
    const requestData = await request.json(); 

    // console to demonstrate the data receiving on the server
     console.log(requestData);

     // Return a response. You can also pass response back to FE. For example whatever string
      return NextResponse.json(
      { message: "Name updated", response: { whatever: 'Whatever'} },
      { status: 200 }
    );
}