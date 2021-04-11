"use strict";

let products = [
    { id: 1, title: "Mouse", price: 568, img: "https://placehold.it/200x150" },
    { id: 2, title: "Notebook", price: 120000, img: "https://placehold.it/200x150" },
    { id: 3, title: "PC", price: 60000, img: "https://placehold.it/200x150" },
    { id: 4, title: "PS", price: 45000, img: "https://placehold.it/200x150" }
];

const renderProduct = (item = { id: 0, title: "Good", price: 10, img: "https://placehold.it/200x150" }) => {
    return `<div class="product-item" data-id="${item.id}">
                <img src="${item.img}" alt="${item.title}">
                <div class="desc">
                    <h3>${item.title}</h3>
                    <p>${item.price} \u20bd</p>
                    <button class="buy-btn">Add to cart</button>
                </div>
            </div>`;
};

const catalogInit = (list = [{ title: "Good", price: 10 }]) => {
    const productList = list.map((item) => renderProduct(item));
    //console.log(productList);
    let prodContainer = document.querySelector(".products");
    productList.forEach((el) => {
        prodContainer.insertAdjacentHTML("beforeend", el);
    });
    //document.querySelector(".products").innerHTML = productList;
};

catalogInit(products);