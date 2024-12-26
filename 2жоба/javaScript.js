const products = [
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKK_NBz7xozd4trA5qD9VNbNo5n30noTfw9PsCOG6SleoT1lq-EvyIXhWF3n7zGX6KA3YW6evi5XmdHqhNKeCeEjL6QHT536augzs15Ew&usqp=CAc",
    name: "Wine botton",
    price: 125.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDpGcbcDBDHe1Xrwhv-7W_hlwijthbvOnIg&s",
    name: "кукла",
    price: 5445.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1rLxhOR4j0-4l_N79kWUJ1VCKBnyXZ8GEA&s",
    name: "часы новогдные",
    price: 125.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFCO7NRhrs_qrqvDaxHjdhUUB7F1mBlAa4Q&s",
    name: "кукла",
    price: 125.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlA1g-EC1kwGtkc7oMiUvZvPUciKyb6dLvJlyWSTRcA-jd1C0lrRDBAH3smNBLjDlugGg-Xmn7K_7z3Y-GXJYWk5pLVPpmTlur3gEE-9K3&usqp=CAc",
    name: "Болшой шар",
    price: 625.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSe1jjh_QIItS4YU6KW0O1RFgTq9JXmN4paeiPnb9t3nmUzfFm6KMfwAIXXyffxS1uTfXMXZ4sq5itRUH3Xe-JsFUuvv87-mQ0r4dXuoShT5LeryKZqZhM0&usqp=CAc",
    name: "toy car",
    price: 425.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSBcuwyXEP5T_ricZXFb4LeRKkq1KUO1C_Kx6CuC-QWlC5UAA0z0kp6Qgq_WWZ-C-b0mkCmnzumZK4LKR6BIL7QJhw1y8hWrsMc103PGdg&usqp=CAc",
    name: "garland",
    price: 225.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwdmja-udQG7vGVnwQHo8FLOl9eX5kbp-4Q&s",
    name: "kukla",
    price: 4445.0,
    category: "new",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTEzdnLI1lOWbvSBqD5q7ZSu94FXkodDS-w&s",
    name: "елка",
    price: 10000.0,
    category: "featured",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhPyShAdJFdDU3c8ybUqFO6LD7yxi1YV_7A&s",
    name: "болшой елка",
    price: 300000.0,
    category: "featured",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Cy1qN46C-zO2OYYPsDPpBN0YUU_Ol2b47A&s",
    name: "socs",
    price: 105.0,
    category: "featured",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXzM19TiQEPryh_7AaNiCWh8_kxpjncgkZA&s",
    name: "поный сет оврамлени",
    price: 57000.0,
    category: "featured",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjn9u4l12B4evft-KlmmtsTDXRN_A4k-2CQ&s",
    name: "упаковки",
    price: 55.0,
    category: "featured",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4ml4xuoaTTNKruw6MYHRxrbuZ0FGwD4Eqw&s",
    name: "клубника шоколаде",
    price: 10000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82rnd0i1BrjlWHdTwlKhuxOiQBUlHTgAWtw&s",
    name: "лутшие шоколады",
    price: 1000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmfEzaItjqawubPOQ2tz54y8xEjpD_KBr3Q&s",
    name: "оврмлени",
    price: 300.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ettnn-gmXQK9Inuw5uZXlyLQ5RBrv82Tqg&s",
    name: "оврмлени",
    price: 6000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JVL0Oo9YtCLuLjV1r3R3aC2cy377Yr4pNg&s",
    name: "кукла",
    price: 10000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg9p1jqf3JeM1d9nrKOibZyssGyOiQ5hbfQ&s",
    name: "Елуа",
    price: 15000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDeb_Y3O7CcfjmKzFLamptuD7HjWxQN3FQw&s",
    name: "красый елка",
    price: 10000.0,
    category: "bestseller",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieQ9pS2wEMrUEOq46h69p3im9eHnxEuLB7Q&s",
    name: "новогднвй одежда",
    price: 10000.0,
    category: "bestseller",
  },
];

const cardsContainer = document.getElementById("container");

const newProducts = document.getElementById("newProducts");
const featuredProducts = document.getElementById("featuredProducts");
const bestSeller = document.getElementById("bestSeller");

newProducts.addEventListener("click", () => {
  renderProducts("new");
});
featuredProducts.addEventListener("click", () => {
  renderProducts("featured");
});
bestSeller.addEventListener("click", () => {
  renderProducts("bestseller");
});

function renderProducts(category) {
  console.log(category);

  cardsContainer.innerHTML = "";
  products.forEach((item) => {
    if (item.category === category) {
      console.log(item);
      const card = document.createElement("div");
      const cardImage = document.createElement("img");
      const cardName = document.createElement("h2");
      const price = document.createElement("span");

      cardImage.src = item.image;
      cardName.textContent = item.name;

      if (category === "featured") {
        const originalPrice = item.price;
        const discountedPrice = (originalPrice * 0.9).toFixed(2);
        price.innerHTML = `<del>${originalPrice} тенге</del> ${discountedPrice} тенге`;
      } else {
        price.textContent = item.price + " тенге";
      }

      card.appendChild(cardImage);
      card.appendChild(cardName);
      card.appendChild(price);

      cardsContainer.appendChild(card);

      card.classList.add("card");
    }
  });
}
let date = new Date("Jan 1 2025 00:00:00");

function counst() {
  let now = new Date();
  gap = date - now;

  console.log(gap);

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  console.log(days);

if (gap < 0) {
    document.getElementById("group").innerText ="Happy Christmas";
}

  document.getElementById("d").innerText = days + " day :";
  document.getElementById("h").innerText = hours + " hr :";
  document.getElementById("m").innerText = minutes + "min :";
  document.getElementById("s").innerText = seconds + " sec " ;
}

counst();

setInterval(counst, 1000);
