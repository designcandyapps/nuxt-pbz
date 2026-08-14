<script setup>
import {ref,onMounted} from "vue"; import {converter,differenceEuclidean,formatHex,nearest} from "culori"; const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]);
const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

const generatePalette=async()=>{
  //alert("1c: "+document.getElementById("ee"));
  imageUrl.value=document.getElementById("ee").src; //alert("IM: "+imageUrl.value);
  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`; //alert("U: "+proxyUrl.value);
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value;
  img.onload=()=>{//alert("IMG: "+img);
    const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("y").innerHTML=`<span class="content"></span>`;
    //alert("Z1: "+document.getElementById("z").innerHTML);
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }
    //alert("Y: "+document.getElementById("y").innerHTML);
    document.body.style.backgroundColor=document.querySelector("#dv7").style.backgroundColor;
    /*const r0=document.querySelector("#dv7").style.backgroundColor; //alert("G: "+document.body.style.backgroundColor);
    const r2=document.querySelector("#dv8").style.backgroundColor; //r2=r2!=""?r2.replace("rgb(","rgba(").replace(")",",.1)"):"#001100"; //a9a9a9
    const r3=document.querySelector("#dv10").style.backgroundColor; //r3=r3!=""?r3.replace("rgb(","rgba(").replace(")",",.75)"):"red";
    */
    const r0=document.querySelector("#dv7").style.backgroundColor; alert("G: "+r0); //r0=r0&&r0=="rgb(0, 0, 0)"?"#0c152d":r0; //const r1="rgba("+r0.replace("rgb(","").replace(")","")+",.1)";
    const r1a="rgba(255,255,255,1)"; const r2=document.querySelector("#dv8").style.backgroundColor; r2=r2&&r2=="rgb(0, 0, 0)"?"#0c152d":"#0c152d";
    const r3=document.querySelector("#dv10").style.backgroundColor; r3="rgba("+r2.replace("rgb(","").replace(")","")+",.75)";

    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false
  };
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}

onMounted(()=>{
  //window.onload=function(){
    setTimeout(function(){
      //alert("1: "+document.getElementById("ee"));
      generatePalette();
    },1800);
  //}
});
</script>
