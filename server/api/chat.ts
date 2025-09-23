export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const config=useRuntimeConfig();
  const apiResponse=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.openaiApiKey}`,
    },
    body:JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  alert("RES3: "+JSON.stringify(data));
  return{reply:data.choices[0].message.content};
});
