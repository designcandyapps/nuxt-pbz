<script lang="ts" setup>
const uUrl=ref("");
const fetchImgU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=img&attr=src`);
  //const response=await fetch(`${encodeURIComponent(query)}`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}`);
  const data=await response.json(); alert("RESPx: "+JSON.stringify(data));
  const im=data.result; document.getElementById("ee").src=im;
  return data.results;
};
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); alert("RES1Pxxx: "+JSON.stringify(data));
  return data.results;
  uUrl.value=document.getElementById("et").innerText; alert("uUrl: "+uUrl.value);
  fetchImgU(uUrl.value);
};
const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  const data=await response.json(); alert("RESPy4: "+JSON.stringify(data));
  const h1=data.result.h1[0];
  alert("H1one: "+h1);

  document.getElementById("tr").innerText=h1;

  //pr.value=h1;
  //prompt.value=h1; //prompt.value=document.getElementById("tr").innerText;
  //  //document.getElementById("prompt").value=h1;

  //  //fetchPh(h1).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});

                                                  //return data.results;


      //document.querySelector("#t").innerText=h1;
      //document.getElementById("et").innerText=h1;
  //h1=!h1||h1==""?document.getElementById("et").innerText:h1; //prompt.value
  //document.getElementById("et").innerText=h1;



  document.querySelector("#pr").value=document.getElementById("et").innerText; document.querySelector("#prompt").value=document.getElementById("et").innerText;
  const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;



  //alert(h1);
                    //fetchPh(h1+".com").then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  //chtGPT(h1);
  //sendQ(h1);
};



onMounted(()=>{
        var u=new URLSearchParams(location.search).get("u");
        document.getElementById("et").innerText=u;
        //u=!u||u=="null"?document.getElementById("et").innerText:u;
        alert("U: "+u);
        u=!u||u=="null"?document.getElementById("et").innerText:u;
        alert("UU: "+u);
  
        document.getElementById("et").innerText=u; alert("ET: "+document.getElementById("et").innerText);




  
  document.querySelector("#pr").value=document.getElementById("et").innerText; document.querySelector("#prompt").value=document.getElementById("et").innerText;
  const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;



  
        fetchU(u); //document.getElementById("et").innerText; //document.getElementById("prompt").value;



  
  uUrl.value=document.getElementById("et").innerText; alert("uUrl2: "+uUrl.value);
  fetchImgU(uUrl.value);
  fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});

/*
  setTimeout(function(){
    alert("ET: "+document.querySelector("#et").innerText); alert("ET1: "+document.querySelector("#prompt").value);
    alert("PR1: "+pr); alert("PROMPT1: "+prompt); alert("PRO1: "+document.querySelector("#prompt").value);
  },2600);
*/

  setTimeout(function(){
    //document.getElementById("prompt").value
    //pr
    fetchPh(document.querySelector("#tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  },2800);
});
</script>

<template>
  <span class="g">
    <span id="et" style="border:2px solid green;"></span><img id="ee" class="ff" src="/im/cl.png" width="60" height="60"><span id="ei"></span>
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
      //const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;
      //this.send()
    //},7800)
  },
  methods:{
      async send(){
      //const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`,{
      //const response=await fetch("https://api.openai.com/v1/chat/completions",{
      const response=await fetch(
        //`${encodeURIComponent(pr)}`,
        "/api/chat",
        {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
    async send1(pr){
      //const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`,{
      //const response=await fetch("https://api.openai.com/v1/chat/completions",{
      const response=await fetch(
        `${encodeURIComponent(pr)}`,
        //"/api/chat",
        {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
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
