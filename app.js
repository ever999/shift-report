// function generateInput() {
//     // Створюємо елемент <input>
//     var formElementTwo = document.querySelectorAll('.form-group')[2];
//     var inputElement = document.createElement("input");
    
//     // Додаємо атрибути до елементу
//     inputElement.setAttribute("type", "number");
//     inputElement.setAttribute("class", "form-control");
//     inputElement.setAttribute("id", "money");
//     inputElement.setAttribute("placeholder", "99 злотих");
//     inputElement.setAttribute("required", "");
  
//     // Створюємо кнопку видалення
//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "x";
//     deleteButton.setAttribute("class", "delete-button");
//     deleteButton.setAttribute("onclick", "deleteInputElement(this)");

//     // Додаємо елементи до контейнера
    
    
//     // Додаємо створений елемент до документу (якщо бажаємо вставити його в інший елемент, можна змінити document на бажаний батьківський елемент)
//     formElementTwo.appendChild(deleteButton);
//     formElementTwo.appendChild(inputElement);
//   }
  

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (mins === 0) {
      return `${hours} год`;
    } else {
      return `${hours} год ${mins} хв`;
    }
  }

  // Отримуємо елементи з DOM
  const timeSlider = document.getElementById('timeSlider');
  const timeDisplay = document.querySelector('.timeDisplay');

  // Оновлюємо значення повзунка при завантаженні сторінки
  timeDisplay.textContent = minutesToTime(timeSlider.value);

  // Слухаємо зміни значення повзунка
  timeSlider.addEventListener('input', function() {
    const minutes = parseInt(this.value, 10);
    timeDisplay.textContent = minutesToTime(minutes);
  });


  
  function copyFormData() {
    // Отримати всі елементи input і label у формі
    const formElements = document.querySelectorAll('form input, form label');

    // Створити змінну для збереження тексту
    let copiedText = '';

    // Пройтися по всіх елементах форми та зібрати текст
    for (let i = 0; i < formElements.length - 1; i++) {
        const element = formElements[i];
        if (element.tagName === 'INPUT') {
            copiedText += `${element.value}\n`;
        } else if (element.tagName === 'LABEL') {
            copiedText += `${element.textContent}`;
        }
    }
    copiedText += document.querySelectorAll('span')[0].textContent 


    // Скопіювати текст у буфер обміну
    navigator.clipboard.writeText(copiedText)
        .then(() => alert('Текст успішно скопійовано!'))
        .catch(err => console.error('Не вдалося скопіювати текст: ', err));
}