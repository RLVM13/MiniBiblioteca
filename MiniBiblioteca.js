//Fase 1

const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }];// viene de un "servidor externo"


  let lista = "<div>";

  for (let i = 0; i < books.length; i++) {
    lista += `<article>
              <p><strong>Autor: </strong>${books[i].author}</p>
              <p><strong>Ciudad: </strong>${books[i].country}</p>
              <p><strong>Imagen: </strong>${books[i].imageLink}</p>
              <p><strong>Lenguaje: </strong>${books[i].language}</p>
              <p><strong>Enlace: </strong>${books[i].link}</p>
              <p><strong>Página: </strong>${books[i].pages}</p>
              <p><strong>Título: </strong>${books[i].title}</p>
              <p><strong>Año: </strong>${books[i].year}</p>
            </article>`
  }
    lista += "</div>";
  document.getElementById("container").innerHTML = lista;

/*
const padre = document.getElementById("div");
const hijo = document.createElement("div");
const hijo2 = document.createElement("article");
const texto1 = document.createTextNode("<p><strong>Autor: </strong>${books[i].author}</p>\n");
texto1 += document.createTextNode("<p><strong>Ciudad: </strong>${books[i].country}</p>\n");
texto1 += document.createTextNode("<p><strong>Imagen: </strong>${books[i].imageLink}</p>\n");
texto1 += document.createTextNode("<p><strong>Lenguaje: </strong>${books[i].language}</p>\n");
texto1 += document.createTextNode("<p><strong>Enlace: </strong>${books[i].link}</p>\n");
texto1 += document.createTextNode("<p><strong>Página: </strong>${books[i].pages}</p>\n");
texto1 += document.createTextNode("<p><strong>Título: </strong>${books[i].title}</p>\n");
texto1 += document.createTextNode("<p><strong>Año: </strong>${books[i].year}</p>\n");

function Nodos(objeto) {
  for (let i = 0; i < objeto.length; i++) {
    const hijo = document.createElement("div");
    const texto = document.createTextNode(objeto[i]);
    hijo.appendChild(texto);
    padre.appendChild(hijo);
  }
  return;
}

Nodos(books);
*/