// Ссылки на DOM элементы
const container = document.querySelector(".products-container");
const genderSelect = document.querySelector("#gender-filter");
const priceSelect = document.querySelector("#price-filter");
const typeSelect = document.querySelector("#type-filter");
const sortSelect = document.querySelector("#sort-filter");
const searchBtn = document.querySelector("#search-button");
const resetBtn = document.querySelector("#reset-button");
const goUpBtn = document.querySelector("#go-up-btn");
const filtersSection = document.querySelector("#filters");
// const filtersSection = document.querySelector("#root");

//функция создания карточки товара
function createCard(product) {
    //1) создаем корневой элемент-контейнер
    const card = document.createElement("article");
    card.className = "product-card";

    //2) изображение
    const img = document.createElement("img");
    img.src = product.imgUrl;
    img.alt = product.type;
    img.addEventListener("error", () => {
        //если не загрузилось, ставим заглушку
        img.src = "https://via.placeholder.com/200x180?text=No+Image";
        img.alt = "Image is not available";
    });
    card.append(img);

    //3) название (type)
    const title = document.createElement("h3");
    title.textContent = product.type;
    card.append(title);

    //4) описание
    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = product.description;
    card.append(desc);

    //5) цена
    const priceP = document.createElement("p");
    priceP.className = "price";
    priceP.textContent = "Price: $" + product.price;
    card.append(priceP);

    //6) пол(gender)
    const genderP = document.createElement("p");
    genderP.className = "gender";
    genderP.textContent = "Gender: " + product.gender;
    card.append(genderP);

    // 7) статус(in stock/out of stock)
    const statusP = document.createElement("p");
    statusP.className = "status " + (product.status === "In stock" ? "in-stock" : "out-of-stock");
    statusP.textContent = product.status;
    card.append(statusP);

    return card;
}

// функция, читающая текущее значение фильтров и сортировки
function getFilters() {
    return {
        gender: genderSelect.value,
        price: priceSelect.value,
        type: typeSelect.value,
        sort: sortSelect.value
    };
}

// функция фильтрации списка (с помощью forEach)
function applyFilters(list, {gender, type, price}) {
    const result = [];

    list.forEach((item) => {
        // проверяем пол
        if (gender && item.gender !== gender) return;

        // проверяем тип
        if (type && item.type !== type) return;

        // проверяем цену (не очень хороший результат можно через функцию колбек)
        if (price) {
            const [min, max] = price.split("-").map(Number);
            if (item.price < min || item.price > max) return;
        }

        // если все условия пройдены - добавляем в результат
        result.push(item);
    });

    return result;
}

// сортирует товары по цене, возвращая новый массивю
// используем для этого spread-оператор

function sortProducts(list, sortOrder) {
    // копируем массив через spread
    const copy = [...list];

    if (!sortOrder) return copy;

    copy.sort((a, b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    return copy;
}

// функция рендера карточек на странице
function renderProducts(list) {
    // 1) щчищаем контейнер
    container.innerHTML = "";

    //2) если нечего показывать
    if (!list.length) {
        const msg = document.createElement("p");
        msg.className = "no-products";
        msg.textContent = "No products found";
        container.append(msg);

        return;
    }

    //3) в обратном случае "проходим" по каждому товару и добавляем карточку
    list.forEach((item) => {
        container.append(createCard(item));
    });
}

// обработчик кнопки Search
function onSearch() {
   const filters = getFilters();
   
   //1) сначала фильтрация
   let result = applyFilters(products, filters);

   //2) затем сортировка если выбрана
   if (filters.sort) {
    result = sortProducts(result, filters.sort);
   }

   //3) отображаем отсортированный/отфильтрованный список
   renderProducts(result);

   // 4) плавно скролим к блоку фильтров
   filtersSection.scrollIntoView({behavior: "smooth", block: "start"});
}

// обработчик кнопки Reset
function onReset() {
    // сбрасываем значения селекторов
    genderSelect.value = "";
    priceSelect.value = "";
    typeSelect.value = "";
    sortSelect.value = "";

    //и заново отображаем весь список
    renderProducts(products);
}

//обработчик прокрутки страницы(показываем/скрываем кнопку Return)
function onScroll() {
    //получаем текущее смещение прокрутки через document
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    //если прокручено более 200px - показываем кнопку, иначе скрываем
    goUpBtn.style.display = scrollPos > 200 ? "block" : "none";
}

// инициализация слушателей событий
function initEventListeners() {
    searchBtn.addEventListener("click", onSearch);
    resetBtn.addEventListener("click", onReset);

    document.addEventListener("scroll", onScroll);

    // по клику на кнопку Return перескакиваем к блоку с фильтрами(можно сделать с якорями в html)
     goUpBtn.addEventListener("click", () => {
        //плавно скролим к блоку фильтров
        filtersSection.scrollIntoView({behavior: "smooth", block: "start"});
     });
}

// запускаем приложение
//1) сначала отображаем все товары
renderProducts(products);

//2) навешиваем слушатели
initEventListeners();

