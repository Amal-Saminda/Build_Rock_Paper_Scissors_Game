const container = document.querySelector(".container"),
 result_img = document.querySelector(".result_img"),
  user_result_img = document.querySelector(".user_result img"),
 robat_result = document.querySelector(".robat_result img"),
 show_result = document.querySelector(".show_result "),
hand_Signal = document.querySelectorAll(".hand_Signal");


  //get what's the clicked element
hand_Signal.forEach((image,index) => {
  image.addEventListener("click" , (e) =>{
    image.classList.add("active");


    //get what's the clicked other element
    hand_Signal.forEach((image2,index2) => {
      
      //remove image for again clicked other image
      index !== index2 && image2.classList.remove("active");
    });
    

    container.classList.add("Start");

  let time = setTimeout(() => {
    container.classList.remove("Start");

    let imageLink = e.target.src;
  user_result_img.src = imageLink;

  let randomNum = Math.floor(Math.random() * 3);
  
  let cpuImage = ["accest/rock.png" , "accest/paper.png" , "accest/scissors.png"];
  
  robat_result.src = cpuImage[randomNum];

  let autoValue = ["R","P","S"][randomNum];

  let useValue = ["R","P","S"][index];

  let outCome = {
    RR : "Draw",
    RP : "Robot",
    RS : "User",
    PP : "Draw",
    PS : "Robot",
    PR : "User",
    SS : "Draw",
    SR : "User",
    SP : "User",

  };

  let outComeValue = outCome[useValue + autoValue];
  
  show_result.textContent = useValue === autoValue ? "Match Draw" : `${outComeValue} Won!! ` ;
  
    
  },2500)

  });
});