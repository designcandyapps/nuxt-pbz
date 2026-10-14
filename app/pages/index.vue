<script lang="ts" setup>
const uUrl=ref("");
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); alert("RES1P: "+JSON.stringify(data));
  return data.results;
};
async function sendQ(query){
  alert(query);
  const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
  const data=await response.json(); this.response=data.reply; alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
  document.querySelector("#t").innerText=this.response;
}
async function fetchGetty(query){
  try{
    const response=await fetch(`https://api.gettyimages.com/v3/search/images?phrase=${encodeURIComponent(query)}&page_size=1`,{method:"GET",headers:{"Api-Key":"ep3mq3jxr4u99m7hy3gzzp3g"}});
    if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
    const data=await response.json(); //alert("RES2P: "+JSON.stringify(data));
    if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
  }catch(error){console.error("Error2:",error)}
}
const chGPT=async(query)=>{
/*
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
  const data=await apiResponse.json();
  return{reply:data.choices[0].message.content};
*/


  //const response=await fetch(`https://api.openai.com/v1/chat/completions`); //${encodeURIComponent(query)}`);
  //const data=await response.json(); alert("RESPy: "+JSON.stringify(data));

  const response=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pho2").value})});
  const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); console.log(data.message.content);
  document.querySelector("#t").innerText=this.response;


/*
  const h1=data.result.h1[0];
  document.getElementById("tr").innerText=h1;
  
  prompt.value=h1; //prompt.value=document.getElementById("tr").innerText;
  document.getElementById("pho2").value=h1;

  //fetchPh(h1).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});

  return data.results;
*/
};
const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  const data=await response.json(); alert("RESPy: "+JSON.stringify(data));
  const h1=data.result.h1[0];
  //alert(h1);

  document.getElementById("tr").innerText=h1;

  prompt.value=h1; //prompt.value=document.getElementById("tr").innerText;
  //  //document.getElementById("prompt").value=h1;

  //  //fetchPh(h1).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});

  return data.results;


  document.querySelector("#t").innerText=h1;
  h1=!h1||h1==""?$("#pho2").val():h1;
  document.getElementById("et").innerText=h1;

  document.querySelector("#pr").value=document.getElementById("et").innerText; document.querySelector("#prompt").value=document.getElementById("et").innerText;
  const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;
  fetchPh(h1).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  //chtGPT(h1);
  sendQ(h1);
};
const fetchImgU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=img&attr=src`);
  //const response=await fetch(`${encodeURIComponent(query)}`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}`);
  const data=await response.json(); alert("RESPx: "+JSON.stringify(data));
  const im=data.result; document.getElementById("ee").src=im;
  return data.results;
};



onMounted(()=>{
        var u=new URLSearchParams(location.search).get("u"); u=!u||u=="null"?document.getElementById("et").innerText:u; alert("U: "+u);
        document.getElementById("et").innerText=u; alert("ET: "+document.getElementById("et").innerText);




  
  //document.querySelector("#pr").value="Princes"; document.querySelector("#prompt").value="Caves";
  ////const pr=document.querySelector("#et").innerText; 
  const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;



  
        fetchU(document.getElementById("et").innerText); //document.getElementById("prompt").value



  
  uUrl.value=document.getElementById("et").innerText;
  fetchImgU(uUrl.value);
  fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});

/*
  setTimeout(function(){
    alert("ET: "+document.querySelector("#et").innerText); alert("ET1: "+document.querySelector("#prompt").value);
    alert("PR1: "+pr); alert("PROMPT1: "+prompt); alert("PRO1: "+document.querySelector("#prompt").value);
  },2600);
*/

  //setTimeout(function(){
    //document.getElementById("prompt").value
    //pr
    //fetchPh(document.querySelector("#et").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  //},7800);
});
</script>

<template>
  <span class="g">
    <span id="et" style="border:2px solid green;"></span><img id="ee" class="ff" src="https://pinfluents.com/_BCK/4/im/cl.png" width="60" height="60"><span id="ei"></span>
    <span id="t"></span><span id="y">s</span><span id="z"><!--ColorThief /--></span>
    <input id="pr" name="pr" v-model="pr" value="Open Source" style="border:2px solid yellow;">
    <input id="prompt" v-model="prompt" style="border:2px solid red;">
    <input id="pho" v-model="pho" style="border:2px solid blue;"><input id="pho2" v-model="pho2" style="border:2px solid purple;">
    <h1 id="tr">Heading here</h1>
    <span id="response" v-if="response">{{response}}</span>
  </span>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",pr:"",response:null}},
  mounted(){
    //setTimeout(function(){
      this.send()
    //},7800);
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
    async send2(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pho2").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); console.log(data.message.content);
      document.querySelector("#t").innerText=this.response;
    },
    async send3(){
      const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
      const data=await response.json(); alert("RES1Pb: "+JSON.stringify(data));
      return data.results;
    },
  },
}
</script>
