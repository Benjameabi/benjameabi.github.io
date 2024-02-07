'use strict';

{
  let robertJordan = [
    'the_eye_of_the_world',
    'the_great_hunt',
    'the_dragon_reborn',
    'the_shadow_rising',
    'the_fires_of_heaven',
    'lord_of_chaos',
    'the_gathering_storm',
    'the_path_of_daggers',
    'knife_of_dreams',
    'towers_of_midnight',
  ];

  // console.log(robertJordan);

 function getRobertJordan(books) {
  const ulElement = document.createElement('ul');

   for (let i = 0; i < books.length; i++) {
     const liElement = document.createElement('li');
    liElement.textContent = books[i];
     ulElement.appendChild(liElement);
        }

        return ulElement;
  }

  const container = document.getElementById('container');
 if (container) {
       container.appendChild(getRobertJordan(robertJordan));
 } else {
  console.error("Container element with ID 'container' not found.");
 }

   const booksInformation = {
  'the_eye_of_the_world': {
    title: 'The Eye of the World',
    language: 'English',
    author: 'Robert Jordan',
  },
  'the_great_hunt': {
    title: 'The Great Hunt',
    language: 'English',
    author: 'Robert Jordan',
  },
  'the_dragon_reborn': {
    title: 'The Dragon Reborn',
    language: 'English',
    author: 'Robert Jordan',
  },
  'the_shadow_rising': {
    title: 'The Shadow Rising',
    language: 'English',
    author: 'Robert Jordan',
  },
  'the_fires_of_heaven': {
    title: 'The Fires of Heaven',
    language: 'English',
    author: 'Robert Jordan',
  },
  'lord_of_chaos': {
    title: 'Lord of Chaos',
    language: 'English',
    author: 'Robert Jordan',
  },
  'a_crown_of_swords': {
    title: 'A Crown of Swords',
    language: 'English',
    author: 'Robert Jordan',
  },
  'the_path_of_daggers': {
    title: 'The Path of Daggers',
    language: 'English',
    author: 'Robert Jordan',
  },
  'knife_of_dreams': {
    title: 'Knife of Dreams',
    language: 'English',
    author: 'Robert Jordan',
  },
  'crossroads_of_twilight': {
    title: 'Crossroads of Twilight',
    language: 'English',
    author: 'Robert Jordan',
  },
  };

  // console.log(booksInformation['the_eye_of_the_world']);

  function displayBookInfo(bookID, booksInfo) {
    const bookInfo = booksInfo[bookID];
    if (bookInfo) {
      const container = document.getElementById('container');

      const titleHeading = document.createElement('h2');
      titleHeading.textContent = bookInfo.title;

      const languagePara = document.createElement('p');
      languagePara.textContent = 'Language: ' + bookInfo.language;

      const authorPara = document.createElement('p');
      authorPara.textContent = 'Author: ' + bookInfo.author;

      container.appendChild(titleHeading);
      container.appendChild(languagePara);
      container.appendChild(authorPara);
    } else {
      console.error("Book information not found for book ID: " + bookID);
    }
  }

  // Example usage
  // displayBookInfo('the_eye_of_the_world', booksInformation);

  function covers(books) {
    let bookCovers = {};
    for (let i of books) {
      bookCovers[i] = `img/${i}.jpg`;
    }
    return bookCovers;
  }

  function setImages(books) {
    let bookCovers = covers(books);
    let keys = Object.keys(bookCovers);
    let listItems = document.querySelectorAll('li');
    for (let item of listItems) {
      for (let key of keys) {
        if (item.textContent === key) {
          let img = document.createElement('img');
          img.src = bookCovers[key];
          img.alt = key;
          item.insertBefore(img, item.firstChild);
          break;
        }
      }
    }
  }
}
  // Example usage
  // setImages(robertJordan);
  const container = document.createElement('div');
  container.id = 'container';

  document.body.appendChild(container);

  robertJordan.forEach((book) => {
    displayBookInfo(book, booksInformation);
  });

  setImages(robertJordan);
