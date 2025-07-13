const products=[
{
    id:1,
    type:"Jeans",
    gender:"man",
    price:250,
    status:"In stock",
    imgUrl:"./FOTO/Man Jeans1.jpg"
},

{
    id:2,
    type:"Jeans",
    gender:"woman",
    price:220,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jeans1.jpg"
},

{
    id:1,
    type:"Jeans",
    gender:"man",
    price:280,
    status:"In stock",
    imgUrl:"./FOTO/Man Jeans5.jpg"
},

{
    id:2,
    type:"Jeans",
    gender:"woman",
    price:230,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jeans5.jpg"
},

{
    id:3,
    type:"Jeans",
    gender:"man",
    price:270,
    status:"In stock",
    imgUrl:"./FOTO/Man Jeans2.jpg"
},

{
    id:4,
    type:"Jeans",
    gender:"woman",
    price:230,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman Jeans2.jpg"
},

{
    id:5,
    type:"T-Shirt",
    gender:"man",
    price:800,
    status:"In stock",
    imgUrl:"./FOTO/Man T-shirt1.jpg"
},

{
    id:6,
    type:"T-Shirt",
    gender:"woman",
    price:700,
    status:"In stock",
    imgUrl:"./FOTO/Woman T-shirt1.jpg"
},

{
    id:5,
    type:"T-Shirt",
    gender:"man",
    price:810,
    status:"In stock",
    imgUrl:"./FOTO/Man T-shirt5.jpg"
},

{
    id:6,
    type:"T-Shirt",
    gender:"woman",
    price:710,
    status:"In stock",
    imgUrl:"./FOTO/Woman T-shirt5.jpg"
},

{
    id:7,
    type:"T-Shirt",
    gender:"man",
    price:900,
    status:"In stock",
    imgUrl:"./FOTO/Man T-shirt2.jpg"
},

{
    id:8,
    type:"T-Shirt",
    gender:"woman",
    price:750,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman T-shirt2.jpg"
},

{
    id:9,
    type:"Jacket",
    gender:"man",
    price:400,
    status:"In stock",
    imgUrl:"./FOTO/Man Jacket1.jpg"
},

{
    id:10,
    type:"Jacket",
    gender:"woman",
    price:350,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jacket1.jpg"
},

{
    id:11,
    type:"Jacket",
    gender:"man",
    price:420,
    status:"In stock",
    imgUrl:"./FOTO/Man Jacket2.jpg"
},

{
    id:10,
    type:"Jacket",
    gender:"woman",
    price:360,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jacket5.jpg"
},

{
    id:11,
    type:"Jacket",
    gender:"man",
    price:430,
    status:"In stock",
    imgUrl:"./FOTO/Man Jacket5.jpg"
},

{
    id:12,
    type:"Jacket",
    gender:"woman",
    price:370,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman Jacket2.jpg"
},

{
    id:13,
    type:"Sweater",
    gender:"man",
    price:180,
    status:"In stock",
    imgUrl:"./FOTO/Man Sweater1.jpg"
},

{
    id:14,
    type:"Sweater",
    gender:"woman",
    price:160,
    status:"In stock",
    imgUrl:"./FOTO/Woman Sweater1.jpg"
},

{
    id:15,
    type:"Sweater",
    gender:"man",
    price:200,
    status:"In stock",
    imgUrl:"./FOTO/Man Sweater2.jpg"
},

{
    id:16,
    type:"Sweater",
    gender:"woman",
    price:170,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman Sweater2.jpg"
},

{
    id:17,
    type:"Jeans",
    gender:"man",
    price:260,
    status:"In stock",
    imgUrl:"./FOTO/Man Jeans3.jpg"
},


{
    id:18,
    type:"Jeans",
    gender:"woman",
    price:240,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jeans3.jpg"
},

{
    id:19,
    type:"Jeans",
    gender:"man",
    price:280,
    status:"Out of stock",
    imgUrl:"./FOTO/Man Jeans4.jpg"
},

{
    id:20,
    type:"Jeans",
    gender:"woman",
    price:250,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jeans4.jpg"
},

{
    id:21,
    type:"T-Shirt",
    gender:"man",
    price:850,
    status:"In stock",
    imgUrl:"./FOTO/Man T-shirt3.jpg"
},

{
    id:22,
    type:"T-Shirt",
    gender:"woman",
    price:720,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman T-shirt3.jpg"
},

{
    id:23,
    type:"T-Shirt",
    gender:"man",
    price:920,
    status:"In stock",
    imgUrl:"./FOTO/Man T-shirt4.jpg"
},

{
    id:24,
    type:"T-Shirt",
    gender:"woman",
    price:780,
    status:"In stock",
    imgUrl:"./FOTO/Woman T-shirt4.jpg"
},


{
    id:25,
    type:"Jacket",
    gender:"man",
    price:410,
    status:"Out of stock",
    imgUrl:"./FOTO/Man Jacket3.jpg"
},

{
    id:26,
    type:"Jacket",
    gender:"woman",
    price:360,
    status:"In stock",
    imgUrl:"./FOTO/Woman Jacket3.jpg"
},

{
    id:27,
    type:"Jacket",
    gender:"man",
    price:430,
    status:"In stock",
    imgUrl:"./FOTO/Man Jacket4.jpg"
},

{
    id:28,
    type:"Jacket",
    gender:"woman",
    price:380,
    status:"Out of stock",
    imgUrl:"./FOTO/Woman Jacket4.jpg"
},

{
    id:29,
    type:"Sweater",
    gender:"man",
    price:190,
    status:"In stock",
    imgUrl:"./FOTO/Man Sweater3.jpg"
},

{
    id:30,
    type:"Sweater",
    gender:"woman",
    price:175,
    status:"In stock",
    imgUrl:"./FOTO/Woman Sweater3.jpg"
},
];

const gender = document.querySelectorAll('select')[0];
const product = document.querySelectorAll('select')[1];
const price = document.querySelectorAll('select')[2];
  
let min=0;
let max=0;


const calculation = function(){
  productChange = product.value;
  genderChange = gender.value;
  let stepPrice = 0;
  let j = 0;
  products.forEach(element => {
    if(element.gender===genderChange  && element.type===productChange) {
        j++;
        if(j===1){
            min=element.price;
            max=element.price;
        } else {
            if(element.price<min) min=element.price;
            if(element.price>max) max=element.price;
        }
    }
  });
  stepPrice=Math.floor((max-min)/4);
  price.options[0].value='all';
  price.options[0].text='all';
  let str=`${min} - ${min+stepPrice}`;
  price.options[1].value=str;
  price.options[1].text=str;
  str=`${min+stepPrice+1} - ${min+stepPrice+stepPrice}`;
  price.options[2].value=str;
  price.options[2].text=str;
  str=`${min+stepPrice+stepPrice+1} - ${min+stepPrice+stepPrice+stepPrice}`;
  price.options[3].value=str;
  price.options[3].text=str;
  str=`${min+stepPrice+stepPrice+stepPrice+1} - ${max}`;
  price.options[4].value=str;
  price.options[4].text=str;
}

calculation();

gender.addEventListener("change", function () {
  calculation();
});

product.addEventListener("change", function () {
  calculation();
});

const SEARCH_BUTTON=document.querySelector(".search_button");
const createCard=()=> {
    while(true){
       const card=document.querySelector(".product_card");
       if(card!==null && card!==undefined) {
          card.remove();
       } else break;
    }
    const select_gender = document.querySelectorAll('select')[0].value;
    const select_product = document.querySelectorAll('select')[1].value;
    const select_price = document.querySelectorAll('select')[2].value;
    
    let minPrice=0;
    let maxPrice=0;
    if(select_price==="all") {
        minPrice=min;
        maxPrice=max;
    } else {
        const minMaxStr=select_price.split("-");
        minPrice=parseInt(minMaxStr[0]);
        maxPrice=parseInt(minMaxStr[1]);
    }
    let i=0;
    products.forEach(element => {
        if ((element.gender===select_gender) &&
            (element.type===select_product) &&
            ((element.price>=minPrice)&&(element.price<=maxPrice))){
            i++;
            const POS_1=document.querySelector(".pictures-field");
            const PRODUCT_CARD = document.createElement("div");
            PRODUCT_CARD.className="product_card";
            PRODUCT_CARD.style.height="450px";
            PRODUCT_CARD.style.width="350px";
            PRODUCT_CARD.style.display="flex";
            PRODUCT_CARD.style.flexDirection="column";
            PRODUCT_CARD.style.justifyContent="center";
            PRODUCT_CARD.style.backgroundColor="#fff";
            PRODUCT_CARD.style.border="4px solid #74d11e";
            PRODUCT_CARD.style.borderRadius= "8px";
            POS_1.prepend(PRODUCT_CARD);

            const POS_2=document.querySelector(".product_card");
            const OUT_IMG_CARD=document.createElement("div");
            OUT_IMG_CARD.className="out-img-card";
            OUT_IMG_CARD.style.height="370px";
            OUT_IMG_CARD.style.width="350px";
            OUT_IMG_CARD.style.display="flex";
            OUT_IMG_CARD.style.justifyContent="center";
            OUT_IMG_CARD.style.margin="0";
            POS_2.prepend(OUT_IMG_CARD);

            const POS_3=document.querySelector(".out-img-card");
            const IMG=document.createElement("img");
            IMG.src=element.imgUrl;
            IMG.style.height="370px";
            IMG.style.width="350px";
            IMG.style.display="block";
            IMG.style.margin="0 35px";
            POS_3.prepend(IMG);

                
            const OUT_INFO_CARD=document.createElement("div");
            OUT_INFO_CARD.className="out-info-card";
            OUT_INFO_CARD.style.height="73px";
            OUT_INFO_CARD.style.width="344px";
            OUT_INFO_CARD.style.border="3px solid #74d11e";
            OUT_INFO_CARD.style.background="#fff";
            OUT_INFO_CARD.style.display="flex";
            OUT_INFO_CARD.style.flexWrap="wrap";
            POS_3.after(OUT_INFO_CARD);

            const POS_4=document.querySelector(".out-info-card");
            const PRODUCT_TITLE=document.createElement("h1");
            PRODUCT_TITLE.className="product-title";
            PRODUCT_TITLE.textContent=`Product: ${element.type}`;
            PRODUCT_TITLE.style.fontSize="23px";
            PRODUCT_TITLE.style.color="#3a6611";
            PRODUCT_TITLE.style.margin="0";
            PRODUCT_TITLE.style.top="0";
            POS_4.append(PRODUCT_TITLE);

            const POS_5=document.querySelector(".product-title");
            const PRICE_TITLE=document.createElement("h1");
            PRICE_TITLE.className="price-title";
            PRICE_TITLE.textContent=`,     Price: ${element.price} EUR`;
            PRICE_TITLE.style.fontSize="23px";
            PRICE_TITLE.style.color="#3a6611";
            PRICE_TITLE.style.margin="0";
            PRICE_TITLE.style.top="0";
            POS_5.after(PRICE_TITLE);
                
            const POS_6=document.querySelector(".price-title");
            const STATUS_TITLE=document.createElement("h1");
            STATUS_TITLE.className="status-title";
            STATUS_TITLE.textContent=`Status:  ${element.status}`;
            STATUS_TITLE.style.fontSize="23px";
            if(element.status==="In stock") {
                STATUS_TITLE.style.color="#3a6611";
            } else {
                STATUS_TITLE.style.color="#d11e1e";
            }    
            STATUS_TITLE.style.margin="0";
            STATUS_TITLE.style.top="0";
            POS_6.after(STATUS_TITLE);
        }
    });
    if(i===0) {
        alert("Product not found !")
    }
}


SEARCH_BUTTON.addEventListener("click", createCard);
const LOGIN_VISIBLE = document.querySelector(".login_visible");
const LOGIN_CLICK=document.querySelector(".login_click");
const ABOUT_CLICK=document.querySelector(".about_click");
const CONTACT_CLICK=document.querySelector(".contact_click");
const LOGIN_FORM = document.querySelector(".login-form");
const INFO_FORM = document.querySelector(".info-form");
const INFO_FORM_INFO_TITLE = document.querySelector(".info-title");
const INFO_FORM_INFO_REST = document.querySelector(".info-rest");


LOGIN_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = event.target.email.value;
  const passwordValue = event.target.password.value;
  if(emailValue.trim()!="") {
    LOGIN_VISIBLE.textContent=" "+emailValue;
    LOGIN_VISIBLE.style.display="inline-block";
    LOGIN_CLICK.textContent="LOGOUT";
  }
  LOGIN_FORM.style.display="none";
});


const processingLogin=()=> {
    if(getComputedStyle(INFO_FORM).display==="none"){
        const str= LOGIN_VISIBLE.textContent.trim();
        if(str==="not" || str==="") {
            LOGIN_FORM.style.display="flex";
        } else {
            LOGIN_VISIBLE.style.display="none";
            LOGIN_CLICK.textContent="LOGIN";
            LOGIN_VISIBLE.textContent="not";
        }    
    }
}
LOGIN_CLICK.addEventListener("click", processingLogin);


const processingInfoAbout=()=> {
    if(getComputedStyle(LOGIN_FORM).display==="none") {
        INFO_FORM.style.display="flex";
        INFO_FORM_INFO_TITLE.textContent='ABOUT  "CITY STYLE"';
        INFO_FORM_INFO_REST.textContent='"CITY STYLE" — a modern clothing store offering a wide range of stylish and high-quality clothing for men and women. We specialize in selling jeans, T-shirts, jackets, sweaters and other popular everyday items.';
    }
}
ABOUT_CLICK.addEventListener("click", processingInfoAbout);


const processingInfoContact=()=> {
    if(getComputedStyle(LOGIN_FORM).display==="none") {
        INFO_FORM.style.display="flex";
        INFO_FORM_INFO_TITLE.textContent='       OUR CONTAKT';
        INFO_FORM_INFO_REST.textContent="Tel: +49(089)-111-111, Email: city-style@mail.com"
        +"Web syte-city-style@mail.com ";
    }
}
CONTACT_CLICK.addEventListener("click", processingInfoContact);


INFO_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  INFO_FORM.style.display="none";
});
