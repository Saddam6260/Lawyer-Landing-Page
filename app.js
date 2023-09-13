let howItWorkItems = [
  {
    img: "./images/how-it-work-img1.png",
    heading: "Setup Your wallet",
    description:
      "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
  },
  {
    img: "./images/how-it-work-img2.png",
    heading: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: "./images/how-it-work-img3.png",
    heading: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

let howItWork = document.querySelector(".how-it-work-wrapper");
let container = document.querySelector(".container");
console.log(howItWork);

window.addEventListener("DOMContentLoaded", function () {
  let displayitem = howItWorkItems.map(function (item) {

    return `<div class="content">
                <div class="img-wrap">
                    <img src=${item.img} alt="">
                </div>
                <div class="description">
                    <h5>${item.heading}</h5>
                    <p>${item.description}</p>
                </div>
            </div>`;
  });
  console.log(displayitem);

  displayitem = displayitem.join("");
  howItWork.innerHTML = displayitem;
});
