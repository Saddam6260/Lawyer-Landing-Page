// Trending Collection
let trendingCollectionItems = [
  {
    img1: "./images/trending-collection1.png",
    img2: "./images/trending-collection1.1.png",
    img3: "./images/trending-collection1.2.png",
    collectionName: "DSGN Animals",
    logoimg: "./images/trending-collection1.1.png",
  },
  {
    img1: "./images/trending-collection2.png",
    img2: "./images/trending-collection2.1.png",
    img3: "./images/trending-collection2.2.png",
    collectionName: "Magic Mushrooms",
    logoimg: "./images/avatar-7.png",
  },
  {
    img1: "./images/trending-collection3.png",
    img2: "./images/trending-collection3.1.png",
    img3: "./images/trending-collection3.2.png",
    collectionName: "Disco Machines",
    logoimg: "./images/avatar-9.png",
  },
];

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

// Browse Categorys
let browseCategoryItems = [
  { img: "./images/browse-category-img-1.png", categoryName: "Art" },
  { img: "./images/browse-category-img-2.png", categoryName: "Collectibles" },
  { img: "./images/browse-category-img-3.png", categoryName: "Music" },
  { img: "./images/browse-category-img-4.png", categoryName: "Photography" },
  { img: "./images/browse-category-img-5.png", categoryName: "Video" },
  { img: "./images/browse-category-img-6.png", categoryName: "Utility" },
  { img: "./images/browse-category-img-7.png", categoryName: "Sport" },
  { img: "./images/browse-category-img-8.png", categoryName: "Virtual Worlds" },
];

// More NFTs
let moreNftsItems = [
  {
    nftImg: "./images/more-nfts-img1.png",
    nftName: "Distant Galaxy",
    nftPersonimg: "./images/nft-person1.png",
    nftPersonName: "MoonDancer",
  },
  {
    nftImg: "./images/more-nfts-img-2.png",
    nftName: "Life on Edena",
    nftPersonimg: "./images/nft-person2.png",
    nftPersonName: "NebulaKid",
  },
  {
    nftImg: "./images/more-nfts-img-3.png",
    nftName: "Life on Edena",
    nftPersonimg: "./images/nft-person3.png",
    nftPersonName: "Spaceone",
  },
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

let trendingCollection = document.querySelector(".trending-collection-wrap");
let howItWork = document.querySelector(".how-it-work-wrapper");
let topCreators = document.querySelector(".top-creators-wrapper");
let browseCategory = document.querySelector(".brows-category-wrap");
let moreNFTs = document.querySelector(".more-nfts-wrap");

window.addEventListener("DOMContentLoaded", function () {
  displayTrendingCollections(trendingCollectionItems);
  displayTopCreators(topCreatorsitems);
  displayBrowseCategory(browseCategoryItems);
  displayMoreNfts(moreNftsItems);
  displayHowItWork(howItWorkItems);
});

displayTrendingCollections = (trendingCollectionItems) => {
  let displayItem = trendingCollectionItems.map(function (item) {
    return `<div class="card">
              <div class="card-img">
                <div class="image">
                  <img src=${item.img1} alt="" />
                </div>
                <div class="image">
                  <img src=${item.img2} alt="" />
                </div>
                <div class="image">
                  <img src=${item.img3} alt="" />
                </div>
                <div class="more-img">1025</div>
              </div>

              <div class="card-body">
                  <h3>${item.collectionName}</h3>
                  <div>
                    <div class="logo">
                      <img src=${item.logoimg} alt="" />
                    </div>
                    <p>MrFox</p>
                  </div>
              </div>
            </div>`;
  });

  displayItem = displayItem.join("");
  trendingCollection.innerHTML = displayItem;
};

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

displayBrowseCategory = (browseCategoryItems) => {
  let displayitem = browseCategoryItems.map(function (item) {
    return `<div class="card">
              <div class="card-img">
                  <img src=${item.img} alt="" />
              </div>
              <div class="card-body">
                <h5>${item.categoryName}</h5>
              </div>
          </div>`;
  });

  displayitem = displayitem.join("");
  browseCategory.innerHTML = displayitem;
};

displayMoreNfts = (moreNftsItems) => {
  displayItem = moreNftsItems.map(function (item) {
    return `<div class="card">
              <div class="img-wrap">
                  <img src=${item.nftImg} alt="">
              </div>
              <div class="card-body">
                <div class="avatar">
                    <h5>${item.nftName}</h5>
                  <div>
                    <img src=${item.nftPersonimg} alt="">
                    <p>${item.nftPersonName}</p>
                  </div>
                </div>
                <div class="price-wrap">
                  <div>
                    <p>price</p>
                    <span>1.63 ETH</span>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <span>0.33 wETH</span>
                  </div>
                </div>
              </div>
            </div>`;
  });
  displayItem = displayItem.join("");
  moreNFTs.innerHTML = displayItem;
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
