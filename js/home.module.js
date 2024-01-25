import { details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class homaData {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".nav-link ").forEach((link) => {
         link.addEventListener("click", (e) => {
            console.log(e.target);
            let ment = e.target 
            document.querySelector(".nav-link.active").classList.remove("active");
            ment.classList.add("active");
            this.getGames(e.target.id);
         });
      });

      this.Ui = new Ui();
   }

   async getGames(category) {
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

      const homeApi = await fetch(
         `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
         options
      );
      const respone = await homeApi.json();

      this.Ui.displayData(respone);
      this.action();
      loading.classList.add("d-none");
   }
   action() {
      document.querySelectorAll(".game").forEach((item) => {
         item.addEventListener("click", () => {
            const id = item.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const id = new details(idGame);
         $("#home").hide();
         $("#details").show();

      // document.querySelector(".games").classList.add("d-none");
      // document.querySelector(".details").classList.remove("d-none");
   }
}
