import { Component } from '@angular/core';

const API: any = {
  "page": 1,
  "per_page": 10,
  "total": 15,
  "total_pages": 2,
  "results": [
    {
      "_id": "63740fede2c75d8744f80a4a",
      "id": 12,
      "first_name": "Norma",
      "last_name": "Torres Nevárez",
      "username": "norma.torresnevarez",
      "email": "norma.torresnevarez@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a4c",
      "id": 14,
      "first_name": "Graciela",
      "last_name": "Ponce Abeyta",
      "username": "graciela.ponceabeyta",
      "email": "graciela.ponceabeyta@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=graciela.ponceabeyta@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a4d",
      "id": 15,
      "first_name": "Rosa",
      "last_name": "Polanco Melgar",
      "username": "rosa.polancomelgar",
      "email": "rosa.polancomelgar@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=rosa.polancomelgar@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a42",
      "id": 3,
      "first_name": "Emilio",
      "last_name": "Alva Durán",
      "username": "emilio.alva",
      "email": "emilio.alvaduran@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a45",
      "id": 6,
      "first_name": "Débora",
      "last_name": "Banda Alcalá",
      "username": "debora.bandaalcala",
      "email": "debora.bandaalcala@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=debora.bandaalcala@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a43",
      "id": 4,
      "first_name": "Armando",
      "last_name": "Perea Sedillo",
      "username": "armando.pereasedillo",
      "email": "armando.pereasedillo@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a49",
      "id": 10,
      "first_name": "Gonzalo",
      "last_name": "Álvarez Otero",
      "username": "gonzalo.alvarezotero",
      "email": "gonzalo.alvarezotero@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=gonzalo.alvarezotero@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a48",
      "id": 11,
      "first_name": "Raúl",
      "last_name": "Ibarra Echevarría",
      "username": "raul.ibarraechevarria",
      "email": "raul.ibarraechevarria@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=raul.ibarraechevarria@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a4b",
      "id": 13,
      "first_name": "Ernesto",
      "last_name": "Alaníz Corral",
      "username": "ernesto.alanizcorral",
      "email": "ernesto.alanizcorral@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=ernesto.alanizcorral@peticiones.online",
      "password": "user12345"
    },
    {
      "_id": "63740fede2c75d8744f80a3f",
      "id": 9,
      "first_name": "Clemente",
      "last_name": "Alonzo Mayorga",
      "username": "clemente.alonzomayorga",
      "email": "clemente.alonzomayorga@peticiones.online",
      "image": "https://i.pravatar.cc/500?u=clemente.alonzomayorga@peticiones.online",
      "password": "user12345"
    }
  ]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  userLists: [] = API.results
}

