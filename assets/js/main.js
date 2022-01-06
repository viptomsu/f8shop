"use strict";
import baseProducts, {places} from "./db.js"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const SHOP_KEY = 'LIGHT_SHOP';
const NUM_IN_PAGE = 30;

// common function
function loop(array, callback, ...args) {
   for (const element of array) {
      callback.apply(element, args);
   }
}
function addClicks(array, callback) {
   for (const element of array) {
      element.addEventListener('click', callback);
   }
}
function addEvents(array, eventName, callback) {
   for (const element of array) {
      element.addEventListener(eventName, callback);
   }
}
function random(begin, end) {
   if(begin === undefined) {
      return Math.random();
   } else if(end === undefined) {
      return Math.floor(Math.random() * begin);
   } else {
      return Math.floor(Math.random() * end + begin);
   }
}

class Cart extends Map {
   constructor(selector) {
      super();
      this.headerCart = $(selector);
      this.headerCartList = this.headerCart.querySelector('.shopping-cart__products');
      this.total = 0;
      this.productElements = new Map();
   }
   add(product, quantity = 1) {
      let oldData = this.get(product);
      if(oldData !== undefined) {
         oldData.quantity += quantity;
         oldData.productElement.querySelector('.product__quantity').innerText = oldData.quantity;
      } else {
         let price = product?.salePrice ? product.salePrice : product.price;
         const productElement = document.createElement('li');
         const html = `
         <a href="#" class="shopping-cart__product">
         <img src="${product.images[0]}" alt="" class="product__img">
         <div class="product__info">
         <h4 class="product__name">${product.name}</h4>
         <span class="price">${price}</span>
         <span class="product__quantity">${quantity}</span>
         </div>
         </a>
         <button class="btn product__del"><i class="fa-solid fa-trash"></i></button>`
         productElement.innerHTML = html;
         this.productElements.set(productElement, product);
         this.set(product, {productElement, quantity});
         this.headerCartList.appendChild(productElement);
      }
      this.total += quantity;
      this.headerCart.classList.remove('empty');
      this.headerCart.querySelector('.shopping-cart__quantity').innerText = `${this.total}`;
   }
   render() {
      if(this.size > 0){
         this.headerCart.classList.remove('empty');
         for (const product of this.keys()) {
            this.add(product, this.get(product));
         };
      } else{
         this.headerCart.classList.add('empty');
      }

      // handle delete product element
      this.headerCart.addEventListener('click', (e) => {
         const clickedProduct = e.target.closest('.shopping-cart__product');
         const deleteBtn = e.target.closest('.product__del');
         if(deleteBtn) {
            const delElement = deleteBtn.parentElement;
            const delProduct = this.productElements.get(delElement);
            this.total -= this.get(delProduct).quantity;
            
            this.delete(delProduct);
            this.headerCartList.removeChild(delElement);
            this.headerCart.querySelector('.shopping-cart__quantity').innerText = `${this.total}`;
            if(this.size === 0)
               this.headerCart.classList.add('empty');
         }
      })
   }
}
class Pagination {
   constructor(array, numInPage, selector, miniControlers) {
      this.arr = array;
      this.numInPage = numInPage;
      this.pages = Math.ceil(array.length / numInPage);
      this.index = 1;
      this.currentPage = this.arr.slice(0, numInPage);
      this.pagination = $(selector);
      this.miniControlers = miniControlers;
   }
   move(page) {
      if(page < 1 || page > this.pages){
         return false;
      } else {
         this.index = page;
         if(typeof this.miniControlers === 'object' && this.miniControlers?.page) {
            this.miniControlers.page.dataset.currentPage = this.index;
         }
         let newPage = page * this.numInPage;
         this.currentPage = this.arr.slice(newPage - this.numInPage, newPage);
         return true;
      }
   }
   createPage(num, className = '', isDisabled = false) {
      if(Number.isInteger(num)) {
         return `<button class="btn ${className}" ${isDisabled ? 'disabled' : ''}>${num}</button>`;
      } else {
         return `<button class="btn ${className}" ${isDisabled ? 'disabled' : ''}>...</button>`;
      }
   }
   handleEvent(callback) {
      this.pagination.onclick = (e) => {
         let clickedBtn = e.target.closest('.btn');
         if(clickedBtn) {
            const currentPageElement = this.pagination.querySelector('.btn.btn--primary:disabled');
            currentPageElement.disabled = false;
            currentPageElement.classList.remove('btn--primary');
            
            let pageNumber = +clickedBtn.innerText;
            if(!pageNumber){
               pageNumber = this.index;
               if(clickedBtn.classList.contains('btn--next')){
                  ++pageNumber;
               } else if (clickedBtn.classList.contains('btn--previous')){
                  --pageNumber;
               }
            }
            if(this.move(pageNumber)){
               const pageElements = this.pagination.children;
               if(pageNumber >= 6 && this.pages !== 6) {
                  if(pageElements[3].innerText === '3'){
                     pageElements[3].innerText = '...';
                     pageElements[3].disabled = true;
                  }
                  for(let i = 4; i < pageElements.length - 1; ++i){
                     let page = pageNumber - 6 + i;
                     if(page > this.pages){
                        pageElements[i].disabled = true;
                        pageElements[i].classList.add('d-none');
                     } else{
                        pageElements[i].innerText = page;
                        if(i > 6 && i < pageElements.length - 2){
                           if(pageElements[i].disabled){
                              pageElements[i].disabled = false;
                              pageElements[i].classList.remove('d-none');
                           }
                        } else if(i === 6){
                           pageElements[i].disabled = true;
                           pageElements[i].classList.add('btn--primary');
                        } else if(i === pageElements.length - 2){
                           if(page < this.pages) {
                              pageElements[i].disabled = true;
                              pageElements[i].innerText = '...';
                              pageElements[i].classList.remove('d-none');                       
                           } else {
                              pageElements[i].disabled = false;
                              pageElements[i].classList.remove('d-none');                       
                           }
                        }
                     }
                  }
               } else {
                  if(pageElements[3].innerText === '...'){
                     pageElements[3].innerText = 3;
                     pageElements[3].disabled = false;
                  }
                  pageElements[pageNumber].classList.add('btn--primary');
                  pageElements[pageNumber].disabled = true;
                  for(let i = 4; i < 7 && i < pageElements.length - 1; ++i) {
                     if(pageElements[i].innerText != i){
                        pageElements[i].innerText = i;
                     }
                  }
                  for(let i = 7; i < pageElements.length - 1; ++i){
                     if(!pageElements[i].disabled){
                        pageElements[i].disabled = true;
                        pageElements[i].classList.add('d-none');
                     }
                     if(i === pageElements.length - 2 && pageElements[i].innerText !== '...') {
                        pageElements[i].innerText = '...';
                        pageElements[i].classList.remove('d-none');
                     }
                  }
               }
            }
            this.prevBtn.disabled = pageNumber === 1;
            this.nextBtn.disabled = pageNumber === this.pages;
            if(typeof this.miniControlers === 'object' && this.miniControlers?.prevBtn && this.miniControlers?.nextBtn) {
               this.miniControlers.prevBtn.disabled = this.prevBtn.disabled;
               this.miniControlers.nextBtn.disabled = this.nextBtn.disabled;
            }
            callback(this.currentPage);
         }
      };
      if(typeof this.miniControlers === 'object' && this.miniControlers?.prevBtn && this.miniControlers?.nextBtn) {
         this.miniControlers.prevBtn.onclick = () => this.prevBtn.click();
         this.miniControlers.nextBtn.onclick = () => this.nextBtn.click();
      }
   }
   renderPaginator() {
      let htmls = `<button class="btn btn--previous"></button>`;
      for(let i = 1; i <= this.pages && i <= 6; ++i) {
         const isActive = i === this.index;
         htmls += this.createPage(i, isActive ? 'btn--primary' : '', isActive);
      }
      if(this.pages > 6) {
         for(let i = 7; i <= this.pages && i <= 9; ++i) {
            htmls += this.createPage('', (i === this.pages || i === 9)? '':'d-none', true);
         }
      }
      htmls += `<button class="btn btn--next"></button>`
      this.pagination.innerHTML = htmls;
      this.nextBtn = this.pagination.lastElementChild;
      this.prevBtn = this.pagination.firstElementChild;
      this.nextBtn.disabled = this.pages <= 1;
      this.prevBtn.disabled = this.index === 1;
      if(typeof this.miniControlers === 'object') { 
         if(this.miniControlers?.prevBtn && this.miniControlers?.nextBtn) {
            this.miniControlers.prevBtn.disabled = this.prevBtn.disabled;
            this.miniControlers.nextBtn.disabled = this.nextBtn.disabled;
         }
         if(this.miniControlers?.page) {
            this.miniControlers.page.dataset.currentPage = this.index;
            this.miniControlers.page.innerText = `/${this.pages}`;
         }
      }
   }
}

const shoppingApp = (function() {
   let isLoggedIn = false;
   const modal = $('.modal');
   const modalContainer = modal.firstElementChild;
   const productsContainer = $('#js-products-container');
   const HISTORY_KEY = 'searchHistory';

   let numOfProductsInRow = 5;
   const cart = new Cart('.header__cart');

   let config = JSON.parse(localStorage.getItem(SHOP_KEY)) || {};
   return {
      setSettings(key, value) {
         config[key] = value;
         localStorage.setItem(SHOP_KEY, JSON.stringify(config));
      },
      deleteSettings(key) {
         delete config[key];
         localStorage.setItem(SHOP_KEY, JSON.stringify(config));
      },
      showModalForm(name) {
         modal.classList.remove('d-none');
         try {
            modalContainer.querySelector('.modal-form:not(.d-none)').classList.add('d-none');
         }
         catch(e) {}
         modal.querySelector('#form-' + name).classList.remove('d-none');
      },
      fakeProduct(quantity) {
         let productIds = [];
         for(let i = 0; i < baseProducts.length; ++i) {
            productIds[i] = 0;
         }
         this.products = [];
         const randomRate = function(sold) {
            const baseRating = Math.min(4.6, Math.log10(sold)) * 10;
            return random(baseRating, 50-baseRating)/10;
         }
         const productPerType = quantity/baseProducts.length; 
         for (let i = 0; i < quantity; ++i) {
            const newId = random(baseProducts.length);
            if(productIds[newId] < productPerType) {
               productIds[newId]++;
               const newProduct = {
                  ...baseProducts[newId],
                  id: i,
                  place: places[productIds[newId]-1],
                  sold: random(baseProducts[newId].sold/productIds[newId],baseProducts[newId].sold),
               };
               newProduct.rating = randomRate(newProduct.sold);
               newProduct.used = random() <= 0.2; //random used status
               if(newProduct.used) {
                  newProduct.price *= (1 - 0.4 * random());
                  newProduct.price = +newProduct.price.toFixed(2);
                  newProduct.name = '(Used) ' + newProduct.name;
               }
               if(Math.round(random())) // random sale_off
               {
                  newProduct.salePrice = +((1 - 0.5 * random()) * newProduct.price).toFixed(2);
               } else{
                  delete newProduct.salePrice;
               }
               this.products.push(newProduct);
            } else {
               --i;
            }
         }
         this.copyProducts = Array.from(this.products);
         this.filterProduct = {
            place: [],
            brand: [],
            used: '',
            rating: '',
            price: [],
         }
      },
      renderProduct(newProducts) {
         let htmls = newProducts.reduce((acc, product) => {
            const html = `
            <div class="col-2-4">
               <div class="product-card" data-product-id="${product.id}">
                  <a href="#">
                     <div class="product-card__img" style="background-image: url(${product.images[0]});">
                        <div class="product-card__controler">
                           <input type="checkbox" class="like-btn" name="like_btn" id="">
                           <button class="btn add-to-cart"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                     </div>
                  </a>
                  <div class="product-card__body">
                     <a class="product-card__name" href="#">${product.name}</a>`;

            let ratingHtml = `
            <div class="product-card__rate">
               <div class="product-card__rating">
            `
            for(let i = 1; i <= 5; ++i){
               if(product.rating >= i || product.rating >= i - 0.2){
                  ratingHtml += `<i class="fa-solid fa-star"></i>`;
               } else if(i - product.rating <= 0.6){
                  ratingHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
               } else{
                  ratingHtml += `<i class="fa-regular fa-star"></i>`;
               }
            }

            let remainHtml = ``;
            if(product?.salePrice){
               remainHtml = `
                  <div class="product-card__price">
                     <span class="text-del price">${product.price}</span>
                     <span class="price">${product.salePrice}</span>
                     <img src="assets/img/free-delivery-truck.svg" alt="free ship" class="free-shipping">
                  </div>` + ratingHtml + `</div>
                        <span class="product-card__sold">${product.sold > 1000 ? (product.sold/1000).toFixed(1)+'k' : product.sold}</span>
                        </div>
                        <div class="product-card__footer">
                           <p class="product-card__place">${product.place}</p>
                        </div>
                        <span class="product-card--label" style="--clr:var(--primary);">Favorite</span>
                        <span class="product-card--sale_off">${Math.round((product.price-product.salePrice)*100/product.price)}%</span>
                     </div>
                  </div>
               </div>
               `
            } else {
               remainHtml = `
                     <div class="product-card__price">
                        <span class="price">${product.price}</span>
                        <img src="assets/img/free-delivery-truck.svg" alt="free ship" class="free-shipping">
                     </div>` + ratingHtml + `
                        </div>
                        <span class="product-card__sold">${product.sold > 1000 ? Math.floor(product.sold/1000)+'k' : product.sold}</span>
                     </div>
                     <div class="product-card__footer">
                        <p class="product-card__place">${product.place}</p>
                     </div>
                     <span class="product-card--label" style="--clr:var(--primary);">Favorite</span>
                  </div>
               </div>
            </div>`
            }
            return acc + html + remainHtml;
         }, ``);
         productsContainer.innerHTML = htmls ? htmls : `
         <h2>No products found</h2>
         <img class="not-found-icon" src="assets/img/noun-not-found-2503785.svg" alt="Not found">`;
      },
      showPassword() {
         const revealBtns = modalContainer.querySelectorAll('input.form-reveal-password');
         addEvents(revealBtns, 'change', function() {
            const inputField = this.parentElement.querySelector('input.js-password-field');
            if(this.checked){
               inputField.setAttribute('type', 'text');
            } else{
               inputField.setAttribute('type', 'password');
            }
         })
      },
      search(searchKey) {
         const enter = new KeyboardEvent('keydown', {
            bubbles: true, cancelable: true, keyCode: 13
         });
         const searchInput = $('.header__search-input');
         const searchHistory = $('.search-history-list');
         searchInput.addEventListener('keydown', (e) => {
            if(e.keyCode === 13) {
               let search = `${searchInput.value}`;

               let newHistory = document.createElement('li');
               newHistory.innerText = searchInput.value;
               if(config?.[searchKey]) {
                  let repeatIndex = config[searchKey].indexOf(searchInput.value);
                  if(repeatIndex != -1) {
                     config[searchKey].splice(repeatIndex, 1);
                     searchHistory.removeChild(searchHistory.children[repeatIndex]);
                  }
                  config[searchKey].unshift(searchInput.value);
                  if(config[searchKey].length > 5) {
                     config[searchKey].pop();
                  }
               } else {
                  config[searchKey] = [searchInput.value];
               }
               this.setSettings(searchKey, config[searchKey]);

               searchHistory.insertBefore(newHistory, searchHistory.firstChild);
               if(searchHistory.children.length > 5) {
                  searchHistory.removeChild(searchHistory.lastElementChild);
               }

               search = new RegExp(search, 'i');
               this.render(this.copyProducts.filter(product => search.test(product.name)), NUM_IN_PAGE);
               searchInput.blur();
               searchInput.value = '';
            }
         });
         searchHistory.addEventListener('mousedown', (e) => {
            e.preventDefault();
            let clickedHistory = e.target.closest('.search-history-list > li');
            if(clickedHistory) {
               let search = clickedHistory.innerText;
               let index = config[searchKey].indexOf(search);
               console.log(index);

               search = new RegExp(search, 'i');
               this.render(this.copyProducts.filter(product => search.test(product.name)), NUM_IN_PAGE);
               searchInput.blur();
               searchInput.value = '';

               searchHistory.insertBefore(clickedHistory, searchHistory.firstChild);
               console.log(config[searchKey]);
               if(index !== -1) {
                  let backUp = config[searchKey][index];
                  config[searchKey].splice(index, 1);
                  config[searchKey].unshift(backUp);
                  this.setSettings(searchKey, config[searchKey]);
               }
            }
         })
      },
      sortBar() {
         // sort-bar handler
         const sortBar = $('.search-result .sort-bar');
         const sortBtns = $$('.sort-bar > .btn');
         const priceSorts = sortBar.querySelectorAll('.form-select .select__options input[type="radio"]');
         addClicks(sortBtns, (e) => {
            if(!e.target.classList.contains('sort-bar__btn--active')){
               sortBar.querySelector('.sort-bar__btn--active').classList.remove('sort-bar__btn--active');
               if(e.target.value) {
                  this.sortCallback = (a, b) => b[e.target.value] - a[e.target.value];
               } else {
                  this.sortCallback = (a, b) => a.id - b.id;
               }
               this.copyProducts.sort(this.sortCallback);
               e.target.classList.add('sort-bar__btn--active');
               this.render(this.copyProducts, NUM_IN_PAGE);
            }
         })
         addEvents(priceSorts, 'change', (e) => {
            if(e.target.checked) {
               sortBar.querySelector('.sort-bar__btn--active').classList.remove('sort-bar__btn--active');
               this.sortCallback = (a, b) => {
                  let price1 = a?.salePrice ?? a.price;
                  let price2 = b?.salePrice ?? b.price;
                  return e.target.value * (price1 - price2)
               };
               this.copyProducts.sort(this.sortCallback);
               sortBar.querySelector('.form-select .select__default').classList.add('sort-bar__btn--active');
               this.render(this.copyProducts, NUM_IN_PAGE);
            }
         })
      },
      filterEvents(){
         const filterPanel = $('.main__content .filter-panel');
         const category = filterPanel.querySelectorAll('.category__body a');
         const searchFilter = filterPanel.querySelector('.search-filter');
         const resetBtn = filterPanel.querySelector('.search-filter__footer .btn');
         addClicks(category, (e) => {
            filterPanel.querySelector('.category--active').classList.remove('category--active');
            e.target.classList.add('category--active');
            if(e.target.dataset.category){
               this.copyProducts = this.products.filter((product) => product.category == e.target.dataset.category);
            } else {
               this.copyProducts = this.products.filter(() => true);
            }
            this.copyProducts.sort(this.sortCallback);
            this.renderFilter(this.copyProducts);
            this.render(this.copyProducts, NUM_IN_PAGE);
         })
         searchFilter.addEventListener('change', (e) => {
            const inputField = e.target.closest('input');
            if(inputField && inputField.type === 'checkbox'){
               if(this.filterProduct?.[inputField?.name]){
                  if(inputField.checked) {
                     if(!this.filterProduct[inputField.name].includes(inputField.value)) {
                        this.filterProduct[inputField.name].push(inputField.value);
                     }
                  } else {
                     let index = this.filterProduct[inputField.name].indexOf(inputField.value);
                     if(index != -1){
                        this.filterProduct[inputField.name].splice(index, 1);
                     }
                  }
                  
               }
            } else if(inputField && inputField.type === 'radio' && inputField?.name &&
            this.filterProduct?.[inputField.name] != undefined) {
               let condition = `${inputField.value}`;
               if(inputField.checked) {
                  this.filterProduct[inputField.name] = condition;
               }
            } else if(inputField && inputField.type === 'text' && inputField?.name) {
               if(inputField.value) {
                  if(inputField === inputField.parentElement.firstElementChild){
                     this.filterProduct[inputField.name][0] = inputField.value;
                  } else {
                     this.filterProduct[inputField.name][1] = inputField.value;
                  }
               }
            }
            this.render(this.copyProducts, NUM_IN_PAGE);
         })
         searchFilter.addEventListener('click', (e) => {
            const showMoreBtn = e.target.closest('.filter-group__more');
            const childrenElement = e.target.closest('.filter-group__sub-list > li');
            if(showMoreBtn){
               showMoreBtn.classList.toggle('active');
            }
            if(childrenElement) {
               showMoreBtn.classList.remove('active');
               let parent = showMoreBtn.parentElement;
               parent.insertBefore(childrenElement, parent.firstElementChild);
            }
         })
         resetBtn.onclick = () => {
            this.filterProduct = {
               place: [],
               brand: [],
               used: '',
               rating: '',
               price: []
            }
            this.renderFilter(this.copyProducts);
            this.render(this.copyProducts, NUM_IN_PAGE);
         }
      },
      renderFilter(products){
         const searchFilter = $('.main__content .search-filter');
         const filterPlace = $('#filter-place .filter-group__list');
         const filterBrand = $('#filter-brand .filter-group__list');
         let newFilterHtml = {
            place: [],
            brand: [],
         };
         const html = {
            place: [],
            brand: []
         }
         const moreHtml = {
            place: [],
            brand: []
         }
         const index = {
            place: 0,
            brand: 0,
         }
         products.forEach((product) => {
            for(const key in newFilterHtml) {
               if(!newFilterHtml[key].includes(product[key])) {
                  let newId = ++index[key];
                  let pos = newId;
                  if(this.filterProduct[key].includes(product[key])) {
                     pos = 0;
                  }
                  newFilterHtml[key].splice(pos, 0, product[key]);
                  if(pos === 0 || newFilterHtml[key].length <= 4) {
                     html[key].splice(pos, 0, `
                     <li>
                        <input type="checkbox" ${pos === 0 ? 'checked' : ''} class="form-check" name="${key}" id="${key}${newId}" value="${product[key]}">
                        <label for="${key}${newId}">${product[key]}</label>
                     </li>`);
                  } else{
                     moreHtml[key] += `
                     <li>
                        <input type="checkbox" class="form-check" name="${key}" id="${key}${newId}" value="${product[key]}" ${pos === 0 ? 'checked' : ''}>
                        <label for="${key}${newId}">${product[key]}</label>
                     </li>`
                  }
               }
            }
         });

         for(const key in this.filterProduct) {
            if(Array.isArray(this.filterProduct[key]) && key != 'price'){
               for(const index in this.filterProduct[key]) {
                  if(newFilterHtml?.[key] && !newFilterHtml[key].includes(this.filterProduct[key][index])) {
                     this.filterProduct[key].splice(index, 1);
                  }
               }
            }
            else if(key == 'price') {
               const fields = searchFilter.querySelectorAll(`input[type="text"][name="${key}"]`);
               fields.forEach((field, index) => {
                  if(field) {
                     field.value = this.filterProduct[key][index] ?? '';
                  }
               })
            } else if(key != 'price' && this.filterProduct[key]) {
               const field = searchFilter.querySelector(`input[type="radio"][name="${key}"][value="${this.filterProduct[key]}"]`);
               if(field && !field.checked){
                  field.checked = true;
               }
            } else if(this.filterProduct[key] == ''){
               const field = searchFilter.querySelector(`input[type="radio"][name="${key}"]:checked`);
               if(field){
                  field.checked = false;
               }
            }
         }
         filterPlace.innerHTML = html.place.join('') + 
         (html.place.length >= 4 ? `<li class="filter-group__more">
            <div class="group__more-toggle">More</div>
            <ul class="filter-group__sub-list">
               ${moreHtml.place}
            </ul>
         </li>` : '');
         filterBrand.innerHTML = html.brand.join('') + 
         (html.brand.length >= 4 ? `<li class="filter-group__more">
            <div class="group__more-toggle">More</div>
            <ul class="filter-group__sub-list">
               ${moreHtml.brand}
            </ul>
         </li>` : '');
      },
      renderSearch(searchKey) {
         if(config?.[searchKey] && Array.isArray(config[searchKey])){
            let html = '';
            const searchHistory = $('.search-history-list');
            config[searchKey].forEach(value => {
               html += `<li>${value}</li>`;
            })
            searchHistory.innerHTML = html;
         }
      },
      render(products, numInPage) {
         let finalCondition = [];
         for(const key in this.filterProduct){
            if(Array.isArray(this.filterProduct[key]) && this.filterProduct[key].length > 0 && key != "price"){
               finalCondition.push('(' + this.filterProduct[key].reduce((acc, value) => {
                  return acc + `||product.${key} == "${value}"`
               }, 'false') + ')');
            }
            else if(key == 'rating') {
               if(this.filterProduct[key] != ''){
                  finalCondition.push(`product.${key} >= ${this.filterProduct[key]} - 0.2`);
               }
            } else if(key == 'price') {
               let priceCondition = ``;
               if(this.filterProduct[key][0] != undefined){
                  priceCondition += `product.${key} >= ${this.filterProduct[key][0]}`;
                  if(this.filterProduct[key][1] != undefined){
                     priceCondition += `&& product.${key} <= ${this.filterProduct[key][1]}`;
                  }
               }else if(this.filterProduct[key][1] != undefined){
                  priceCondition += `product.${key} <= ${this.filterProduct[key][1]}`;
               }
               if(priceCondition){
                  finalCondition.push(priceCondition);
               }
            } else{
               if(this.filterProduct[key] != ''){
                  finalCondition.push(`product.${key} == ${this.filterProduct[key]}`);
               }
            }
         }
         finalCondition = finalCondition.length > 0 ? finalCondition.join('&&') : true;
         finalCondition = new Function(`return (product) => ${finalCondition}`)();

         const paginator = new Pagination(products.filter(finalCondition), numInPage, '.search-result__pagination', {
            page: $('.sort-bar__page'),
            prevBtn: $('.sort-bar__page-control :first-child'),
            nextBtn: $('.sort-bar__page-control :last-child'),
         });
         this.renderProduct(paginator.currentPage);
         paginator.renderPaginator();
         paginator.handleEvent(this.renderProduct);
      },
      handleEvent() {
         const signUpBtns = $$('.js-sign-up');
         const signInBtns = $$('.js-sign-in');
         const closeFormBtns = $$('.js-close-form');
         const forgotPasswordBtn = $('.js-forgot-password');

         modal.addEventListener('mousedown', function() {
            this.classList.add('d-none');
         });
         addEvents(modalContainer.children, 'mousedown', (event) => event.stopPropagation());
         addClicks(signUpBtns, () => this.showModalForm('sign-up'));
         addClicks(signInBtns, () => this.showModalForm('sign-in'));
         addClicks(closeFormBtns, () => modal.classList.add('d-none'));
         forgotPasswordBtn.onclick = () => this.showModalForm('forgot-password');
         
         this.showPassword();
         // form select handleEvent
         const formSelects = $$('.form-select');
         function selectHandler(formSelect) {
            let defaultValue = formSelect.querySelector('.select__default');
            let options = formSelect.querySelectorAll('.select__options li input[type="radio"]');
            addEvents(options, 'change', function() {
               if (this.checked) {
                  defaultValue.innerText = this.nextElementSibling.innerText;
               }
            })
         }
         for (const formSelect of formSelects) {
            selectHandler(formSelect);
         }
         // products event handler
         productsContainer.addEventListener('click', (e) =>{
            const clickedProduct = e.target.closest('.product-card');
            const likeBtn = e.target.closest('.like-btn');
            const addToCartBtn = e.target.closest('.add-to-cart');
            if(addToCartBtn) {
               const product = this.products.find(product => product.id === +clickedProduct.dataset.productId);
               cart.add(product);
            }
         })
         this.sortBar();
         this.filterEvents();
         this.search(HISTORY_KEY);
      },
      start() {
         this.fakeProduct(500);
         this.renderFilter(this.products);
         this.renderSearch(HISTORY_KEY);
         this.render(this.products, NUM_IN_PAGE);
         cart.render();
         this.handleEvent();
         
      }
   }
})();

shoppingApp.start();


function signIn() {
   `<li class="navbar__item user hover_menu--toggle">
   <a href="#">
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="" class="user__img">
      <h5 class="user__name">Default user</h5>
   </a>
   <ul class="user__menu hover_menu up-arrow">
      <li class="user__menu-item"><a href="#">My account</a></li>
      <li class="user__menu-item"><a href="#">Receipt</a></li>
      <li class="user__menu-item menu-item--divider"><a href="#">Log out</a></li>
   </ul>
</li>`
}
