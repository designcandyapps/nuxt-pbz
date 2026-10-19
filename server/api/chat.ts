export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
    },
    body:JSON.stringify({
      model:"gpt-3.5-turbo",
      messages:[{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json(); return{reply:data.choices[0].message.content};


  //alert(data.reply);

  //const data=await response.json();
  //this.response=data.reply;
  //alert("RES: "+JSON.stringify(data)); //alert("RESb: "+this.response);
});




//import {OpenAI} from 'openai'
/*export default defineEventHandler(async(event)=>{
  const body=await readBody(event)
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
  const completion=await client.chat.completions.create({
    model:'gpt-4o',
    messages:body.messages,
  })
  return completion.choices[0].message
})*/