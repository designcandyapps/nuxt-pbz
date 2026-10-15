<script lang="ts" setup>
//import {ref,onMounted} from "vue";
import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const uUrl=ref("");
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); //alert("RES1Pxxx: "+JSON.stringify(data));
  return data.results;
  //uUrl.value=document.getElementById("et").innerText; alert("uUrl: "+uUrl.value);
  //fetchImgU(uUrl.value);
};
const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  const data=await response.json(); //alert("RESPy4: "+JSON.stringify(data));
  const h1=data.result.h1[0];
  document.getElementById("tr").innerText=h1;
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
  fetchU(document.getElementById("et").innerText); //document.getElementById("et").innerText; //document.getElementById("prompt").value;
  uUrl.value=document.getElementById("et").innerText; //alert("uUrl2: "+uUrl.value);
  fetchImgU(uUrl.value);

  fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
  //generatePalette();

  setTimeout(function(){
    //pr //document.getElementById("prompt").value
    //fetchPh(document.getElementById("tr").innerText).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    generatePalette();
  },7800);
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
  <span><span><Slider2 /></span></span>






































  <main class="min-h-[calc(100vh-var(--header-height))]">
<div class="py-24 sm:py-32 md:py-40 relative">
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">

<div>
  <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"><div><p>Innovation</p></div></h1>
  <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnatis aliqua ut enim ad minim veniam.</div>
</div>






























  


</div>
</div>

<div class="py-24 sm:py-32">
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
<div class="text-center flex flex-col items-center">
<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Lorem ipsum</h2></div>
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

<div style="--x:0px;--y:0px;--a3ecdd52:rgb(var(--color-primary-DEFAULT));--v0ddb8715:rgb(var(--color-primary-DEFAULT));" class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
<div class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
<div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
  <div>
    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Lorem ipsum</p>
    <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">Crashum smashum lorem ipsum.</div>
  </div>
</div>
</div>
</div>

<div style="--x:0px;--y:0px;--a3ecdd52:rgb(var(--color-primary-DEFAULT));--v0ddb8715:rgb(var(--color-primary-DEFAULT));" class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
<div class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
<div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
  <div>
    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Crashum smashum</p>
    <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">Lorem ipsum crashum smashum.</div>
  </div>
</div>
</div>
</div>

<div style="--x:0px;--y:0px;--a3ecdd52:rgb(var(--color-primary-DEFAULT));--v0ddb8715:rgb(var(--color-primary-DEFAULT));" class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
<div class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
<div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
  <div>
    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Lorem ipsum</p>
    <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">Crashum smashum lorem ipsum.</div>
  </div>
</div>
</div>
</div>

<div style="--x:0px;--y:0px;--a3ecdd52:rgb(var(--color-primary-DEFAULT));--v0ddb8715:rgb(var(--color-primary-DEFAULT));" class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
<div class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
<div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
  <div>
    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Crashum smashum</p>
    <div class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">Lorem ipsum crashum smashum.</div>
  </div>
</div>

</div>
</div>
</div>
</div>
</div>

<div class="py-24 sm:py-32">
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
    <div class="text-center flex flex-col items-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Crashum smashum</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      <div class="news-slider ey">
	<div>
          <h2>About Us</h2><p>Scale as you go with unmetered bandwidth on all plans. Zero downtime. No limits.</p>
	</div>
	<div>
          <h2>Our Services</h2><p>Firewalls, encryption, brute force, and DDoS protection. Security’s all taken care of.</p>
	</div>
	<div>
          <h2>Our Products</h2><p>Fast data transfer and performance come as standard with our global CDN—wherever your site visitors are.</p>
	</div>
	<div>
          <h2>Contact Us</h2><p>You’ll never run out of storage with WordPress.com’s plans. Photos. Audio. 4K videos. All in one place.</p>
	</div>
      </div>
    </div>
  </div>
</div>

<div class="py-24 sm:py-32">
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
<div class="text-center flex flex-col items-center">
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Lorem ipsum</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"></div>
</div>
</div>

<div class="py-24 sm:py-32">
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
<div class="text-center flex flex-col items-center">
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Crashum smashum</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"></div>
</div>
</div>

<div class="py-24 sm:py-32">
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
    <div class="text-center flex flex-col items-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Lorem ipsum</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"></div>
  </div>
</div>
</main>


<footer class="relative">
<div class="-border-t -border-gray-200 -dark:border--gray-800">
<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
<div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
  <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
    <span class="iconify i-simple-icons:nuxtdotjs flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
  </button>
  <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
    <span class="iconify i-simple-icons:github flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
  </button>
</div>

<div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>
<div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1 text-sm text-gray-500 dark:text-gray-400"></div>
</div>
</div>
</footer>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",pr:"",response:null}},
  mounted(){
    //setTimeout(function(){
      this.sndQry()
    //},17800)
  },
  methods:{
    async snd(){
      //const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`,{
      //const response=await fetch("https://api.openai.com/v1/chat/completions",{
      const response=await fetch(//`${encodeURIComponent(pr)}`,
        "/api/chat",
        {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
    async sndQry(){
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
    },
  },
}
</script>
