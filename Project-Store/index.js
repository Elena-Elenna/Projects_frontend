/*
1.  Приложение одностраничное, в верхней части экрана должен находиться header, в нижней footer, 
а между ними main на все оставшееся пространиство
2.  header: поизиция должна быть зафиксированна в вехней части экрана
3.  Контент у header и footer: на ваше усмотрение
4.  В main части вы должны отобразить данные из массива обьектов(массив обьектов products вы можете найти в LMS в вкаладке "Code"), 
в виде карточек товаров
5.  В каждой карточке должны быть:
- картинка с изображением товара
- название товара
- цена
- пол
- статус
6.  (Опционально, т.к задание со \*)Над карточками дожны быть 3 select:
- label: "Gender", опции: "Men", "Women"
- label: "Price", опции: "Опции придумайте сами, главное, чтобы было несколько опций и какждая опция имела дианпозон цен. Например: 0-200€"
- label: "Choose product", опции: "Jeans", "T-shirt", "Jacket", "Sweater"
7. (Опционально, т.к задание со \*)Справа от селектов, должна находиться кнопка "Search", при клике на которую, 
товары дожны отфильтроваться и появиться только те карточки, котрые соответствуют выбранным опциям в ваших фильтрах
8. Приложение должно быть на английском языке
9. Стили на ваше усмотрение
10. Если вы выполнили задание со звездочкой(там где нужно сделать фильтры): 
Внизу справа экрана должна быть стрелочка "вверх" с текстом "Вернуться к фильтрам", по клику на которую, вас переносит к фильтрам. 
Этот элемент дожен быть с фиксированной позицией. 
Если вы не выполнили задание со звездочкой: 
Внизу справа экрана должна быть стрелочка "вверх" с текстом "Go Up", по клику на которую, вас переносит к самой верхней части экрана. 
Этот элемент дожен быть с фиксированной позицией
*/
  
const products = [
{
    id: 1,
    type: "Jeans",
    gender: "men",
    price: "250 €",
    status: "In stock",
       imgUrls: [
      "./assets/card_imgs/img_1/img_1.png",
      "./assets/card_imgs/img_1/img_1_2.png",
      "./assets/card_imgs/img_1/img_1_3.png"
    ]
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: "220 €",
    status: "In stock",
       imgUrls: [
      "./assets/card_imgs/img_2/img_2.png",
      "./assets/card_imgs/img_2/img_2_2.png",
      "./assets/card_imgs/img_2/img_2_3.png"
    ]  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: "270 €",
    status: "In stock",
        imgUrls: [
      "./assets/card_imgs/img_3/img_3.png",
      "./assets/card_imgs/img_3/img_3_2.png",
      "./assets/card_imgs/img_3/img_3_3.png"
    ]  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: "230 €",
    status: "Out of stock",
      imgUrls: [
      "./assets/card_imgs/img_4/img_4.png",
      "./assets/card_imgs/img_4/img_4_2.png",
      "./assets/card_imgs/img_4/img_4_3.png"
    ]  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: "40 €",
    status: "In stock",
       imgUrls: [
      "./assets/card_imgs/img_5/img_5.png",
      "./assets/card_imgs/img_5/img_5_2.png",
      "./assets/card_imgs/img_5/img_5_3.png"
    ]  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: "700 €",
    status: "In stock",
     imgUrls: [
      "./assets/card_imgs/img_6/img_6.png",
      "./assets/card_imgs/img_6/img_6_2.png",
      "./assets/card_imgs/img_6/img_6_3.png"
    ]  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: "900 €",
    status: "In stock",
     imgUrls: [
      "./assets/card_imgs/img_7/img_7.png",
      "./assets/card_imgs/img_7/img_7_2.png",
      "./assets/card_imgs/img_7/img_7_3.png"
    ]  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: "750 €",
    status: "Out of stock",
      imgUrls: [
      "./assets/card_imgs/img_8/img_8.png",
      "./assets/card_imgs/img_8/img_8_2.png",
      "./assets/card_imgs/img_8/img_8_3.png"
    ]  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: "400 €",
    status: "In stock",
     imgUrls: [
      "./assets/card_imgs/img_9/img_9.png",
      "./assets/card_imgs/img_9/img_9_2.png",
      "./assets/card_imgs/img_9/img_9_3.png"
    ]  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: "350 €",
    status: "In stock",
       imgUrls: [
      "./assets/card_imgs/img_10/img_10.png",
      "./assets/card_imgs/img_10/img_10_2.png",
      "./assets/card_imgs/img_10/img_10_3.png"
    ]  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: "420 €",
    status: "In stock",
     imgUrls: [
      "./assets/card_imgs/img_11/img_11.png",
      "./assets/card_imgs/img_11/img_11_2.png",
      "./assets/card_imgs/img_11/img_11_3.png"
    ]  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: "370 €",
    status: "Out of stock",
       imgUrls: [
      "./assets/card_imgs/img_12/img_12.png",
      "./assets/card_imgs/img_12/img_12_2.png",
      "./assets/card_imgs/img_12/img_12_3.png"
    ]  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: "180 €",
    status: "In stock",
       imgUrls: [
      "./assets/card_imgs/img_13/img_13.png",
      "./assets/card_imgs/img_13/img_13_2.png",
      "./assets/card_imgs/img_13/img_13_3.png"
    ]  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: "160 €",
    status: "In stock",
        imgUrls: [
      "./assets/card_imgs/img_14/img_14.png",
      "./assets/card_imgs/img_14/img_14_2.png",
      "./assets/card_imgs/img_14/img_14_3.png"
    ]  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: " 200 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_15/img_15.png",
      "./assets/card_imgs/img_15/img_15_2.png",
      "./assets/card_imgs/img_15/img_15_3.png",
    ],
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: " 170 €",
    status: "Out of stock",
    imgUrls: [
      "./assets/card_imgs/img_16/img_16.png",
      "./assets/card_imgs/img_16/img_16_2.png",
      "./assets/card_imgs/img_16/img_16_3.png",
    ],
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: "260 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_17/img_17.png",
      "./assets/card_imgs/img_17/img_17_2.png",
      "./assets/card_imgs/img_17/img_17_3.png",
    ],
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: "240 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_18/img_18.png",
      "./assets/card_imgs/img_18/img_18_2.png",
      "./assets/card_imgs/img_18/img_18_3.png",
    ],
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: "280 €",
    status: "Out of stock",
    imgUrls: [
      "./assets/card_imgs/img_19/img_19.png",
      "./assets/card_imgs/img_19/img_19_2.png",
      "./assets/card_imgs/img_19/img_19_3.png",
    ],
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: "250 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_20/img_20.png",
      "./assets/card_imgs/img_20/img_20_2.png",
      "./assets/card_imgs/img_20/img_20_3.png",
    ],
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: "850 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_21/img_21.png",
      "./assets/card_imgs/img_21/img_21_2.png",
      "./assets/card_imgs/img_21/img_21_3.png",
    ],
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: "720 €",
    status: "Out of stock",
    imgUrls: [
      "./assets/card_imgs/img_22/img_22.png",
      "./assets/card_imgs/img_22/img_22_2.png",
      "./assets/card_imgs/img_22/img_22_3.png",
    ],
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: "920 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_23/img_23.png",
      "./assets/card_imgs/img_23/img_23_2.png",
      "./assets/card_imgs/img_23/img_23_3.png",
    ],
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: "780 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_24/img_24.png",
      "./assets/card_imgs/img_24/img_24_2.png",
      "./assets/card_imgs/img_24/img_24_3.png",
    ],
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: "410 €",
    status: "Out of stock",
    imgUrls: [
      "./assets/card_imgs/img_25/img_25.png",
      "./assets/card_imgs/img_25/img_25_2.png",
      "./assets/card_imgs/img_25/img_25_3.png",
    ],
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: "360 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_26/img_26.png",
      "./assets/card_imgs/img_26/img_26_2.png",
      "./assets/card_imgs/img_26/img_26_3.png",
    ],
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: "430 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_27/img_27.png",
      "./assets/card_imgs/img_27/img_27_2.png",
      "./assets/card_imgs/img_27/img_27_3.png",
    ],
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: "380 €",
    status: "Out of stock",
    imgUrls: [
      "./assets/card_imgs/img_28/img_28.png",
      "./assets/card_imgs/img_28/img_28_2.png",
      "./assets/card_imgs/img_28/img_28_3.png",
    ],
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: "190 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_29/img_29.png",
      "./assets/card_imgs/img_29/img_29_2.png",
      "./assets/card_imgs/img_29/img_29_3.png",
    ],
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: "175 €",
    status: "In stock",
    imgUrls: [
      "./assets/card_imgs/img_30/img_30.png",
      "./assets/card_imgs/img_30/img_30_2.png",
      "./assets/card_imgs/img_30/img_30_3.png",
    ],
  },
];

////////////////////////////////////////////////////////////

const PRODUCT_CONTAINER = document.querySelector("#productContainer");
const FILTERS = document.querySelector(".filters");

const favoritesCounterElement = document.querySelector(".favorites_counter");
let favoritesCount = 0;

////////////////////////////////////////////////////////////
const displayCards = (array) => {
  array.map((arrayObject) => {
    const CARD = document.createElement("div");
    CARD.id = `card_€{arrayObject.id}`;
    CARD.className = "card";

    // контейнер для картинки и стрелок
    const IMG_CONTAINER = document.createElement("div");
    IMG_CONTAINER.className = "image-container";

    const IMG = document.createElement("img");
    IMG.className = "card_img";
    IMG.src = arrayObject.imgUrls[0]; // первая картинка
    IMG.alt = `img_€{arrayObject.id}`;
    IMG.title = `img_€{arrayObject.id}`;

    // кнопки навигации
    const PREV_BUTTON = document.createElement("button");
    PREV_BUTTON.className = "prev-btn";
    PREV_BUTTON.innerHTML = "&#10094;"; // левый угол <<

    const NEXT_BUTTON = document.createElement("button");
    NEXT_BUTTON.className = "next-btn";
    NEXT_BUTTON.innerHTML = "&#10095;"; // правый угол >>

    IMG_CONTAINER.append(PREV_BUTTON, IMG, NEXT_BUTTON);
    
    //обертака для заголовка и фаворитов
    const TITLE_CONTAINER = document.createElement("div");
    TITLE_CONTAINER.className = "card_title_container";

    const LEFT_BLOCK = document.createElement("div");
    LEFT_BLOCK.className = "left_block";

    const TITLE = document.createElement("p");
    TITLE.className = "card_title";
    TITLE.textContent = arrayObject.type;

    const PRICE = document.createElement("p");
    PRICE.className = "card_price";
    PRICE.textContent = arrayObject.price;

    const GENDER = document.createElement("p");
    GENDER.className = "card_gender";
    GENDER.textContent = arrayObject.gender;

    LEFT_BLOCK.append(PRICE, TITLE, GENDER);

    const FAVORITE = document.createElement("img");
    FAVORITE.className = "card_favorite_icon";
    FAVORITE.src = "assets/heart_favorite_bookmarkt_love_icon.png";
    FAVORITE.alt = "Add to favorites";
    FAVORITE.title = "Add to favorites";

    FAVORITE.addEventListener("click", () => {
      if (!FAVORITE.classList.contains("favorited")) {
        FAVORITE.classList.add("favorited");
        FAVORITE.src = "assets/heart_black_like_icon.png"
        favoritesCount++;
      } else {
        FAVORITE.classList.remove("favorited");
        FAVORITE.src = "assets/heart_favorite_bookmarkt_love_icon.png";
        favoritesCount--;
      }

      favoritesCounterElement.textContent = favoritesCount;
      
      if (favoritesCount > 0) {
        favoritesCounterElement.style.display = "inline-block";
      } else {
        favoritesCounterElement.style.display = "none";
      }
    });

    TITLE_CONTAINER.append(LEFT_BLOCK, FAVORITE);

    const STATUS = document.createElement("p");
    if (arrayObject.status === "In stock") {
      STATUS.className = "card_status card_status_inStock";
    } else if (arrayObject.status === "Out of stock") {
      STATUS.className = "card_status card_status_outStock";
    }
    STATUS.textContent = arrayObject.status;

    CARD.append(IMG_CONTAINER, TITLE_CONTAINER, STATUS);

    PRODUCT_CONTAINER.append(CARD);

    // Переключение картинок
    let currentIndex = 0;


    PREV_BUTTON.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + arrayObject.imgUrls.length) % arrayObject.imgUrls.length;
      IMG.src = arrayObject.imgUrls[currentIndex];
    });

    NEXT_BUTTON.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % arrayObject.imgUrls.length;
      IMG.src = arrayObject.imgUrls[currentIndex];
    });
  });
};


const displayNoResultMessage = () => {
  const MESSAGE = document.createElement("p");
  MESSAGE.className = "no_result_message";
  MESSAGE.textContent = "We found no results matching your search.";

  PRODUCT_CONTAINER.append(MESSAGE);
  alert("No items found. Clear all filters or try a different combination");
};

const clearProductContainer = () => {
  const MESSAGE = document.querySelector(".no_result_message");
  if (MESSAGE !== null) {
    MESSAGE.remove();
  }
  const CARDS = document.querySelectorAll(".card");
  CARDS.forEach((card) => {
    card.remove();
  });
};
////////////////////////////////////////////////////////////

const filterByGender = (products, gender) => {
  switch (gender) {
    case "All":
      return products;
    case "Men":
      return products.filter((product) => product.gender === "men");
    case "Women":
      return products.filter((product) => product.gender === "women");
    default:
      alert("Incorrect value entered in the Gender filter field!");
      return;
  }
};

const filterByPrice = (products, price) => {
  switch (price) {
    case "All":
      return products;
    case "0-200 €":
      return products.filter((product) => {
        return product.price <= "200";
      });
    case "201-400 €":
      return products.filter((product) => {
        return "201" <= product.price && product.price <= "400";
      });
    case "401-700 €":
      return products.filter((product) => {
        return "401" <= product.price && product.price <= "700";
      });
    case "From 701 €":
      return products.filter((product) => {
        return "701" <= product.price;
      });
    default:
      alert("Incorrect value entered in the Price filter field!");
      return;
  }
};

const filterByProductType = (products, product_type) => {
  switch (product_type) {
    case "All":
      return products;
    case "Jeans":
      return products.filter((product) => {
        return product.type === "Jeans";
      });
    case "T-shirt":
      return products.filter((product) => {
        return product.type === "T-shirt";
      });
    case "Jacket":
      return products.filter((product) => {
        return product.type === "Jacket";
      });
    case "Sweater":
      return products.filter((product) => {
        return product.type === "Sweater";
      });
    default:
      alert("Incorrect value entered in the Product type filter field!");
      return;
  }
};

const filterByStatus = (products, status) => {
  switch (status) {
    case "All":
      return products;
    case "In stock":
      return products.filter((product) => {
        return product.status === "In stock";
      });
    case "Out of stock":
      return products.filter((product) => {
        return product.status === "Out of stock";
      });
    default:
      alert("Incorrect value entered in the Status filter field!");
      return;
  }
};
////////////////////////////////////////////////////////////

displayCards(products);

////////////////////////////////////////////////////////////
FILTERS.addEventListener("submit", (event) => {
  event.preventDefault();

  clearProductContainer();

  const gender = event.target.gender.value;
  const price = event.target.price.value;
  const product_type = event.target.product_type.value;
  const status = event.target.status.value;

  if (products.length !== 0) {
    const genderFilter = filterByGender(products, gender);

    if (genderFilter.length !== 0) {
      const priceFilter = filterByPrice(genderFilter, price);

      if (priceFilter.length !== 0) {
        const productTypeFilter = filterByProductType(
          priceFilter,
          product_type
        );

        if (productTypeFilter.length !== 0) {
          const statusFilter = filterByStatus(productTypeFilter, status);

          if (statusFilter.length !== 0) {
            displayCards(statusFilter);
          } else {
            displayNoResultMessage();
          }
        } else {
          displayNoResultMessage();
        }
      } else {
        displayNoResultMessage();
      }
    } else {
      displayNoResultMessage();
    }
  } else {
    alert("The list of products is empty!");
  }
});

FILTERS.addEventListener("reset", () => {
  clearProductContainer();
  displayCards(products);
});