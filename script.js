const postContainer = document.querySelector('.row');
console.log(postContainer)
window.onload = PostlariGetir;
 async function PostlariGetir(){
 const unvan = 'db.json'
  try{
   
   const Data = await fetch(unvan);
   const dataForFrontEnd = await Data.json();
   console.log(dataForFrontEnd)
   for(let i=0; i<dataForFrontEnd.length; i++){
     postContainer.innerHTML += `
     <div class="col-12 col-md-6 col-lg-3">
     <div class="card mt-5" style="width: 18rem;">
     <img src ="${dataForFrontEnd[i].image}"></img>
   <div class="card-body">
     <h5 class="card-title">${dataForFrontEnd[i].model}</h5>
     <p class="card-text">Price : ${dataForFrontEnd[i].price}</p>
     <a href="#" class="btn btn-primary">View</a>
   </div>
 </div>
     </div>
     `
     
     
   }


  }


  catch(e){
   console.log(e.message)
 }


 finally{

 }


 }