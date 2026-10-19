<script lang="ts" setup>
//import {ref,onMounted} from "vue";
import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const uUrl=ref(""); const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

/*const response=await fetch("https://api.openai.com/v1/chat/completions",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
    "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`},
    body:JSON.stringify({
    model:"gpt-3.5-turbo",
    messages:[
      {role:"user",data:body.message},    //content
    ],
  }),
  const data=await response.json(); console.log(data.message.content); alert("RES: "+JSON.stringify(data));
});*/


/*const sndQry=async()=>{
  pr.value=""; const res=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",headers:{"Content-Type":"application/json",
    "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
  },
  body:JSON.stringify({pr:document.querySelector("#pr").value})
  });
  const data=await res.json(); alert("RES: "+JSON.stringify(data));
  if(data&&data.data&&data.data.length>0){
    pr.value=data.data[0].url;
    document.querySelector("#tr").value=pr.value;
    var ad=document.querySelector("#tr").value;
    alert("AD: "+ad);
  }
}
return{pr,gen};*/


const sndQry=async(u,query)=>{
  alert("U: "+u); alert("Q: "+document.querySelector("#pr").value);
  const pr="";
  pr.value=""; const response=await fetch(
    //`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`
    "https://api.openai.com/v1/chat/completions",{
      method:"POST",headers:{"Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
    },
    data:JSON.stringify({pr:document.querySelector("#pr").value})
  });
  const data=await response.json(); alert("RES: "+JSON.stringify(data)); //alert("R: "+data.results);
  return data.results;
};
async function sndQryy(query){
  //alert(query);
  //const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`,{
  //const response=await fetch("https://api.openai.com/v1/chat/completions",{
  const response=await fetch(//`${encodeURIComponent(pr)}`,
    "/api/chat",
    {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
  const data=await response.json(); this.response=data.reply; alert("RES: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
  document.querySelector("#t").innerText=this.response;
}


const sndQry3=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); alert("RES1P: "+JSON.stringify(data));
  return data.results; alert(data.results);
  document.querySelector("#t").innerText=this.response; alert(0);

  //uUrl.value=document.getElementById("et").innerText; alert("uUrl: "+uUrl.value);
  //fetchImgU(uUrl.value);
};
async function sndQry2(query){
  try{
    const response=await fetch("https://api.openai.com/v1/chat/completions", //"api/chat",
      {method:"POST",headers:{"Api-Key":`Bearer ${process.env.OPENAI_API_KEY}`}});
      if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
      const data=await response.json(); alert("RES2: "+JSON.stringify(data));

      //const data=await apiResponse.json(); return{reply:data.choices[0].message.content};
      //if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
  }catch(error){console.error("Error2:",error)}
}
const sndQry1=async(query)=>{
  try{
    const response=await fetch("https://api.openai.com/v1/chat/completions", //"api/chat",
      //{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      {method:"POST",headers:{"Content-Type":"application/json","Api-Key":`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:body.document.querySelector("#pr").value}]})});
      if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
      const data=await response.json(); return{reply:data.choices[0].message.content}; alert(data.reply); //this.response=data.reply; alert("RES: "+JSON.stringify(data)); //alert("RESb: "+this.response);
      console.log(data.message.content); alert(data.message.content);

      //console.log(response.choices[0].message.content);
      //console.log(return completion.choices[0].message);
    
      //const data=await apiResponse.json(); //this.response=data.reply;
      //alert("RES: "+JSON.stringify(data)); //alert("RESb: "+this.response);    
      //if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
      //document.querySelector("#t").innerText=this.response;
  }catch(error){console.error("Error2:",error)}
}
const sndQry0=async(query)=>{
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
  const data=await apiResponse.json(); return{reply:data.choices[0].message.content}; alert(1);
};


const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); //alert("RES1Pxxx: "+JSON.stringify(data));
  return data.results;
  //uUrl.value=document.getElementById("et").innerText; alert("uUrl: "+uUrl.value);
  //fetchImgU(uUrl.value);
};
const fetchU=async(u,query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  const data=await response.json(); //alert("RESPy4: "+JSON.stringify(data));
  const h1=data.result.h1[0];
  document.getElementById("tr").innerText=h1;
  //const tr=document.getElementById("tr").innerText;
  //sndQry(u,tr);
};
const fetchImgU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=img&attr=src`);
  //const response=await fetch(`${encodeURIComponent(query)}`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}`);
  const data=await response.json(); //alert("RESPx: "+JSON.stringify(data));
  const im=data.result; document.getElementById("ee").src=im;
  return data.results;
};
const generatePalette=async()=>{//alert(1);
  imageUrl.value=document.getElementById("ee").src; //alert("IU1: "+imageUrl.value);
  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`;
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value; //alert("PU2: "+proxyUrl.value);
  img.onload=()=>{const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("z").innerHTML=`<span id="y" class="content"></span>`;
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }//alert("Z: "+document.getElementById("z").innerHTML);
    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false;
    const r0=document.querySelector("#dv7").style.backgroundColor; //alert("G2: "+r0);
    const r2=document.querySelector("#dv8").style.backgroundColor;
    const r3=document.querySelector("#dv10").style.backgroundColor;
    document.body.style.backgroundColor=r0;
  };
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}


onMounted(()=>{
    var u=new URLSearchParams(location.search).get("u");
    //u=!u||u=="null"?"dzesigncandy.com":u;

    //document.getElementById("et").innerText=u;
    u=!u||u=="null"?document.getElementById("et").innerText:u;
    //44//alert("U: "+u);

    document.getElementById("et").innerText=u; //44//alert("ET: "+document.getElementById("et").innerText);

  //44//document.querySelector("#pr").value=document.getElementById("et").innerText; document.querySelector("#prompt").value=document.getElementById("et").innerText;
  //const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value;
  fetchU(u,document.getElementById("et").innerText); //document.getElementById("et").innerText; //document.getElementById("prompt").value;
  uUrl.value=document.getElementById("et").innerText; //alert("uUrl2: "+uUrl.value);
  fetchImgU(uUrl.value);

  fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  //generatePalette();

  setTimeout(function(){
    //pr //document.getElementById("prompt").value
    //fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //generatePalette();
    const et=document.getElementById("pr").innerText;
    sndQry(u,et);
  },800);
});
</script>

<template>
  <span class="g">
    <span id="et" style="border:2px solid green;"></span><img id="ee" class="ff" src="/im/cl.png" width="60" height="60"><span id="ei"></span>
    <span id="t"></span><span id="y">s</span><span id="z"><!--ColorThief /--></span>
    <input id="pr" name="pr" v-model="pr" value="Harses" style="border:2px solid yellow;">
    <input id="prompt" v-model="prompt" style="border:2px solid red;">
    <input id="pho" v-model="pho" style="border:2px solid blue;"><input id="pho2" v-model="pho2" style="border:2px solid purple;">
    <h1 id="tr">Heading here</h1>
    <span id="response" v-if="response">{{response}}</span>
  </span>
  <span><span><!--ImageGenerator /--></span></span>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",pr:"",response:null}},
  mounted(){
    //setTimeout(function(){
      //this.sndQryy()
    //},17800)
  },
  methods:{
    async sndQryy(){
      //const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`,{
      //const response=await fetch("https://api.openai.com/v1/chat/completions",{
      const response=await fetch(//`${encodeURIComponent(pr)}`,
        "/api/chat",
        {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
  },
}
</script>
