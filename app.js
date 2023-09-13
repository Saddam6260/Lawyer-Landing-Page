// Top Creators
let topCreatorsitems = [
  { img: "./images/Avatar-1.png", heading: "Keepitreal", time: "34.53 ETH" },
  { img: "./images/avatar-2.png", heading: "DigiLab", time: "34.53 ETH" },
  { img: "./images/avatar-3.png", heading: "GravityOne", time: "34.53 ETH" },
  { img: "./images/avatar-4.png", heading: "Juanie", time: "34.53 ETH" },
  { img: "./images/avatar-5.png", heading: "BlueWhale", time: "34.53 ETH" },
  { img: "./images/avatar-6.png", heading: "Mr Fox", time: "34.53 ETH" },
  { img: "./images/avatar-7.png", heading: "Shroomie", time: "34.53 ETH" },
  { img: "./images/avatar-8.png", heading: "Robotica", time: "34.53 ETH" },
  { img: "./images/avatar-9.png", heading: "RustyRobot", time: "34.53 ETH" },
  { img: "./images/avatar-10.png", heading: "animakid", time: "34.53 ETH" },
  { img: "./images/avatar-11.png", heading: "Dotgu", time: "34.53 ETH" },
  { img: "./images/avatar-12.png", heading: "Ghiblier", time: "34.53 ETH" },
];

// How It Work
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

//How it work
let howItWork = document.querySelector(".how-it-work-wrapper");
let topCreators = document.querySelector(".top-creators-wrapper");

window.addEventListener("DOMContentLoaded", function () {
  displayTopCreators(topCreatorsitems);
  displayHowItWork(howItWorkItems);
});

displayTopCreators = (topCreatorsitems) => {
  let displayitem = topCreatorsitems.map(function (item) {
    return `<div class="item">
              <div class="img-wrap">
                <img src=${item.img} alt="" />
              </div>
              <div class="content">
                <h3>${item.heading}</h3>
                <p>
                  <span class="total-sale">Total Sales:</span>
                  <span class="time">${item.time}</span>
                </p>
              </div>
            </div>`;
  });
  displayitem = displayitem.join("");
  topCreators.innerHTML = displayitem;
};

displayHowItWork = (howItWorkItems) => {
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
};
