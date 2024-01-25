import { Ui } from "./ui.module.js";

export class details {
   constructor(id) {
      this.Ui = new Ui();

      $(".fa-2xl").on("click", function () {
         $("#details").hide();
         $("#home").show();
      });
      this.getDetails(id);
   }

   async getDetails(idGames) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key":
               "2c7635dae2mshb0ccaa38dd25cbbp14536cjsn20e001e15da3",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };

      const detailsApi = await fetch(
         `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
         options
      );

      const respone = await detailsApi.json();
      this.Ui.displayDetails(respone);
      loading.classList.add("d-none");

      
   }
}
