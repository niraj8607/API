const data = 
'{"fact":"The longest living cat on record according to the Guinness Book belongs to the late Creme Puff of Austin, Texas who lived to the ripe old age of 38 years and 3 days!","length":165}';
const validData = JSON.parse(data);
console.log(validData.fact);
console.log(validData.length);


let url = "https://catfact.ninja/fact";
fetch(url)
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log( "data: ",data.fact);
})
.catch((err)=> {
    console.log("error is " , err);
})


//using async and await
async function getfacts() {
    try{
      let res = await fetch(url);
    let data = await res.JSON();
    console.log(data.fact);
    }
    catch(err){
        console.log("error: ", err);
    }
}



//using axios

async function getfact(){
    try{
    const res = await axios.get(url);
    console.log(res);
    }catch(e){
        console.log("Error is ",e);
    }
    
}