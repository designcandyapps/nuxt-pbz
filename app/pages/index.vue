<script lang="ts" setup>

const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); alert("RES1P: "+JSON.stringify(data));
  return data.results;
};
onMounted(()=>{
  //setTimeout(function(){
    document.querySelector("#pr").value="Princes"; document.querySelector("#prompt").value="Caves";
    const pr=document.querySelector("#pr").value; const prompt=document.querySelector("#prompt").value; alert("PR: "+pr); alert("PROMPT: "+prompt);
    fetchPh(pr).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});  
  //},600)
});
</script>

<template>
  <div class="g">
    <div id="t"></div><div id="y">s</div><div id="z"><!--ColorThief /--></div>
    <input id="pr" name="pr" v-model="pr" value="Open Source">
    <input id="prompt" v-model="prompt" style="border:2px solid red;">
    <input id="pho" v-model="pho" style="border:2px solid blue;"><input id="pho2" v-model="pho2" style="border:2px solid purple;">
    <div id="response" v-if="response">{{response}}</div>
  </div>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",pr:"",response:null}},
  mounted(){
    this.send();
    //setTimeout(()=>{
      //fetchPh(pr).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //},1300)
  },
  methods:{
    async send(){
      alert(document.querySelector("#pr").value);
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; alert("RES03: "+JSON.stringify(data)); //alert("RES03b: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
  },
}
</script>
