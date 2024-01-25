/// <reference types="../@types/jquery" />

export function intro() {
   $(".fa-bounce").on("click", function () {
      $("#home").show(10, function () {
         $("#intro").slideToggle(1000);
         $(".text").slideToggle(500);
         $(".fa-bounce").fadeOut(500);
      });
   });
}

export class Ui {
   displayData(data) {
      let htmlbox = ``;
      for (let i = 0; i < data.length; i++) {
         htmlbox += `
         <div class="col-md-6 col-lg-3 position-relative game" id="${data[i].id}">
         <div class="card h-100" style="width: 100%">
            <div class="p-2 img">
               <img
                  src="${data[i].thumbnail}"
                  class="card-img-top"
                  alt="..."
               />
            </div>
            <div class="p-2">
               <div class="d-flex justify-content-between">
                  <p class="text-white">${data[i].title}</p>
                  <button class="btn btn-danger">Free</button>
               </div>
               <p class="text-center text-white opacity-50">
               ${data[i].short_description.split(" ", 6)}               </p>
            </div>
            <ul class="list-group list-group-flush">
               <div
                  class="d-flex justify-content-between p-2 text-white"
               >
                  <p class="des">${data[i].genre}</p>
                  <p class="des">${data[i].platform}</p>
               </div>
            </ul>
         </div>
      </div>
         `;
      }
      document.querySelector("#homeData").innerHTML = htmlbox;
   }

   displayDetails(data) {
      let gameDetails = `

      <div class="col-md-4">
      <div><img src="${data.thumbnail}" alt="" /></div>
   </div>
   <div class="col-md-8">
      <div class="px-4 text-white">
         <h4>Title: ${data.title}</h4>
         <h6 class="py-2">Category: <span>${data.genre}</span></h6>
         <h6 class="py-2">Platrofm: <span>${data.platform}</span></h6>
         <h6 class="py-2">Status: <span>${data.status}</span></h6>
         <p class="text-details">
         ${data.description}         </p>
         <button class="btn btn-outline-warning mt-4">
            <a href="${data.game_url}" target="_blank" class="text-white">Show Game</a>
         </button>
      </div>
   </div>

      `;
      document.getElementById("detailsData").innerHTML = gameDetails;
   }
}
