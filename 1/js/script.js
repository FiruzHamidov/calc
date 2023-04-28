let doc = document;
//create block
let el = '<div class=" extra__left-block extra-left-block" ><div class="extra-left-block__header-box"><h3 class="extra-left-block__title">Маленькая переговорная</h3><span class="material-icons">help_outline</span></div><div class="extra-left-block__wrapper"><img class="extra-left-block__img" src="img/drop-section-one.png" alt=""></div></div><div class="extra__right-block extra-right-block"><form action="#" name="extraForm" class="extra-right-block__form ex-form"><div class="ex-form__up"><div class="ex-form__up-wrapper"><div class="ex-form__area-inp-box"><div class="ex-form__inp-title">                     Выберете площадь помещения</div><div class="ex-form__area-inp number"><button name="in" class="number-minus" type="button"><span class="material-icons">remove</span></button><input type="text" min="0" value="1 м²" readonly><button name="in" class="number-plus" type="button"><span class="material-icons">add</span></button></div></div><div class="ex-form__input-box"><label for="ex-formOne" class="ex-form__inp-title">Введите название помещения</label><input type="text" name="ex-name" id="ex-formOne" class="ex-form__input"></div></div><div class="delete"><div class="delete__box"><span class="material-icons">delete</span></div></div></div><div class="ex-form__down"><div class="ex-form__down-box"><label for="notesOne" class="ex-form__down-title">Примечания</label>               <textarea class="ex-form__down-textarea" name="notes" id="notesOne" cols="71" rows="6"></textarea></div><button class="ex-form__down-button">Добавить</button></div></form></div>'
// --/create block--
let mainF = () => {
   doc.querySelectorAll('.number').forEach(item => {
      let input = item.querySelector('input')
      let minus = item.querySelector('.number-minus')
      let plus = item.querySelector('.number-plus')
      let num = 1;
      minus.onclick = () => {
         if (num > 0) {
            num--
            if (input.getAttribute('type') === 'number') {
               input.value = num
            } else {
               input.value = `${num} м²`
            }
         }
      }
      plus.onclick = () => {
         num++
         if (input.getAttribute('type') === 'number') {
            input.value = num
         } else {
            input.value = `${num} м²`
         }
      }
   })
   let deleteItem = document.querySelectorAll('.extra__item');
   deleteItem.forEach(item => {
      let delet = item.querySelector('.delete__box');
      delet.onclick = () => {
         item.remove()
      }
   })
}
mainF()
let rooms = doc.querySelector('[data-room]');
let roomsIndex = doc.querySelectorAll('[data-roomInput]');
roomsIndex.forEach(item => {
   let input = item.querySelector('input')
   let minus = item.querySelector('.number-minus')
   let plus = item.querySelector('.number-plus')
   let num = 1;
   let resul = 0;
   minus.onclick = () => {
      if (num > 0) {
         num--
         input.value = num
         roomsIndex.forEach(k => {
            let input = k.querySelector('input')
            resul += +input.value
         })
         rooms.innerText = resul;
         resul = 0
      }
   }
   plus.onclick = () => {
      num++
      input.value = num
      roomsIndex.forEach(k => {
         let input = k.querySelector('input')
         resul += +input.value
      })
      rooms.innerText = resul;
      resul = 0
   }
})
//roomOne
let roomsOne = doc.querySelector('[data-roomOne]');
let roomsOneIndex = doc.querySelectorAll('[data-roomOneIndex]');
roomsOneIndex.forEach(item => {
   let input = item.querySelector('input')
   let minus = item.querySelector('.number-minus')
   let plus = item.querySelector('.number-plus')
   let num = 1;
   let resul = 0;
   minus.onclick = () => {
      if (num > 0) {
         num--
         input.value = num
         roomsOneIndex.forEach(k => {
            let input = k.querySelector('input')
            resul += +input.value
         })
         roomsOne.innerText = resul;
         resul = 0
      }
   }
   plus.onclick = () => {
      num++
      input.value = num
      roomsOneIndex.forEach(k => {
         let input = k.querySelector('input')
         resul += +input.value
      })
      roomsOne.innerText = resul;
      resul = 0
   }

})
//calc ad
let adBlocks = doc.querySelectorAll('.ad-block');
let typeRoom = doc.querySelectorAll('.advan-menu');
adBlocks.forEach(block => {
   block.onclick = () => {
      //remove
      adBlocks.forEach(block => block.classList.remove('ad-active'))
      typeRoom.forEach(item => item.classList.remove('advan-menu--active'))
      //active
      block.classList.add('ad-active');
      typeRoom.forEach(item => {
         if (item.getAttribute('data-menu') === block.getAttribute('data-advan')) {
            item.classList.add('advan-menu--active')
         }
      })
   }
})
let inputValue = doc.querySelector('.button__input-hidden')
let buttons = doc.querySelectorAll('.right-block__button')
buttons.forEach(btn => {
   btn.onclick = () => {
      buttons.forEach(k => k.classList.remove('ad-active'));
      btn.classList.add('ad-active');
      inputValue.value = btn.name
   }
})
let modal = doc.querySelector('.modal')
let openBtns = doc.querySelectorAll('[data-modal]')
let closeBtns = doc.querySelectorAll('[data-close]')


openBtns.forEach((btn) => {
   btn.onclick = () => {
      modal.classList.add('show', 'fade')
   }
})

closeBtns.forEach((btn) => {
   btn.onclick = () => {
      modal.classList.remove('show', 'fade')
   }
})
//focus block 
let blocks = doc.querySelectorAll('.type-im');
let inputValueBlock = doc.querySelectorAll('.block__input-hidden')
blocks.forEach(block => {
   block.onclick = () => {
      blocks.forEach(k => k.classList.remove('focus-type'));
      block.classList.add('focus-type');
      inputValueBlock.value = block.getAttribute('data-name');

   }
})
//tulpit

let tulpitBlocks = doc.querySelectorAll('.advan-menu__item-wrapper');

tulpitBlocks.forEach(block => {
   let tulpit = block.querySelector('.tulpit');
   let open = block.querySelector('[data-tulpitOpen]');
   let mainBlock = block.querySelector('.advan-menu__item');
   open.onmouseenter = (e) => {
      e.stopPropagation();
      tulpit.style.display = 'block';
      mainBlock.style.display = 'none';
   }
   tulpit.onmouseleave = (e) => {
      e.stopPropagation();
      tulpit.style.display = 'none';
      mainBlock.style.display = 'flex';
   }
})


// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
      }
   };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
   const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
   const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
   const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
   const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
   // Клик по кнопке. Открыть/Закрыть select
   dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      this.classList.add('dropdown__button--active');
      dropDownBtn.querySelector('span').classList.toggle('dropdown__button--rotate');
   });

   // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
   dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
         e.stopPropagation();
         dropDownBtn.innerHTML = this.innerText + ' <span class="material-icons dropdown__button--rotate" >expand_more</span>';
         dropDownBtn.focus();
         dropDownInput.value = this.dataset.value;
         dropDownList.classList.remove('dropdown__list--visible');
         dropDownBtn.querySelector('span').classList.remove('dropdown__button--rotate');
         //update
         doc = document;
         //create block
         let newBlock = doc.createElement('div');
         newBlock.innerHTML = el;
         newBlock.classList.add('extra__item');
         newBlock.classList.add('mt-big');
         doc.querySelector('.extra__container').appendChild(newBlock);
         let title = newBlock.querySelector('.extra-left-block__title');
         title.innerText = this.innerText
         mainF();
      });
   });

   // Клик снаружи дропдауна. Закрыть дропдаун
   doc.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
         dropDownBtn.classList.remove('dropdown__button--active');
         dropDownList.classList.remove('dropdown__list--visible');
         dropDownBtn.querySelector('span').classList.remove('dropdown__button--rotate')
      }
   });

   // Нажатие на Tab или Escape. Закрыть дропдаун
   doc.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
         dropDownBtn.classList.remove('dropdown__button--active');
         dropDownList.classList.remove('dropdown__list--visible');
         dropDownBtn.querySelector('span').classList.remove('dropdown__button--rotate')
      }
   });
})

