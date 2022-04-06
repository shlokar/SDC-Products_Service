import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
// components
import Questions from './questions.jsx';

const qaContext = createContext(
  {
    "product_id": "62635",
    "results": [
      {
        "question_id": 543898,
        "question_body": "Libero amet et debitis veniam.",
        "question_date": "2021-06-26T00:00:00.000Z",
        "asker_name": "Rossie_Haag",
        "question_helpfulness": 25,
        "reported": false,
        "answers": {
          "5091083": {
            "id": 5091083,
            "body": "Autem architecto corrupti voluptate.",
            "date": "2021-04-17T00:00:00.000Z",
            "answerer_name": "Kale.Toy67",
            "helpfulness": 6,
            "photos": []
          },
          "5091084": {
            "id": 5091084,
            "body": "Similique velit sint.",
            "date": "2021-01-26T00:00:00.000Z",
            "answerer_name": "Garth_Bechtelar",
            "helpfulness": 12,
            "photos": []
          },
          "5091085": {
            "id": 5091085,
            "body": "Maxime dignissimos eos facere eligendi fuga necessitatibus possimus quo.",
            "date": "2021-10-18T00:00:00.000Z",
            "answerer_name": "Mariano_Buckridge",
            "helpfulness": 18,
            "photos": [
              "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
            ]
          },
          "5091086": {
            "id": 5091086,
            "body": "Distinctio temporibus sunt ipsam sit sed cupiditate.",
            "date": "2021-02-01T00:00:00.000Z",
            "answerer_name": "Titus43",
            "helpfulness": 3,
            "photos": [
              "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091087": {
            "id": 5091087,
            "body": "Adipisci illo magni officiis eos cumque.",
            "date": "2020-11-11T00:00:00.000Z",
            "answerer_name": "Delpha_Hyatt",
            "helpfulness": 3,
            "photos": []
          },
          "5091089": {
            "id": 5091089,
            "body": "Voluptatem nobis repudiandae incidunt a sint officiis.",
            "date": "2021-09-15T00:00:00.000Z",
            "answerer_name": "Jovanny_Block",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091090": {
            "id": 5091090,
            "body": "Aperiam amet et expedita voluptatem odio ut libero.",
            "date": "2021-03-07T00:00:00.000Z",
            "answerer_name": "Brian_Rath25",
            "helpfulness": 13,
            "photos": [
              "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            ]
          },
          "5091091": {
            "id": 5091091,
            "body": "Voluptatibus laboriosam voluptatum impedit et dolorum id recusandae.",
            "date": "2021-09-26T00:00:00.000Z",
            "answerer_name": "Scarlett_Marvin41",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
              "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
            ]
          },
          "5091092": {
            "id": 5091092,
            "body": "Neque et occaecati sed autem.",
            "date": "2021-05-17T00:00:00.000Z",
            "answerer_name": "Keely.Murphy",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091093": {
            "id": 5091093,
            "body": "Rerum unde qui qui dolores modi.",
            "date": "2021-03-25T00:00:00.000Z",
            "answerer_name": "Hannah72",
            "helpfulness": 3,
            "photos": []
          },
          "5091094": {
            "id": 5091094,
            "body": "Harum cupiditate dolorem dolorem sequi non itaque consectetur cumque.",
            "date": "2021-08-12T00:00:00.000Z",
            "answerer_name": "Keven_Marquardt53",
            "helpfulness": 13,
            "photos": []
          },
          "5091095": {
            "id": 5091095,
            "body": "Nisi et labore deserunt dolore mollitia amet totam quaerat dicta.",
            "date": "2021-08-19T00:00:00.000Z",
            "answerer_name": "Henriette.DAmore",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
            ]
          },
          "5091096": {
            "id": 5091096,
            "body": "Repellendus omnis et pariatur et atque et ullam.",
            "date": "2021-11-01T00:00:00.000Z",
            "answerer_name": "Florida82",
            "helpfulness": 9,
            "photos": []
          },
          "5091097": {
            "id": 5091097,
            "body": "Asperiores explicabo eveniet.",
            "date": "2021-04-24T00:00:00.000Z",
            "answerer_name": "Jordy_Mitchell",
            "helpfulness": 6,
            "photos": [
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            ]
          },
          "5091098": {
            "id": 5091098,
            "body": "Quasi officia voluptatem dolor.",
            "date": "2021-08-17T00:00:00.000Z",
            "answerer_name": "Jeffry87",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091099": {
            "id": 5091099,
            "body": "Facere voluptates asperiores tempora voluptatibus.",
            "date": "2021-10-06T00:00:00.000Z",
            "answerer_name": "Harmony.Gleichner",
            "helpfulness": 6,
            "photos": []
          }
        }
      },
      {
        "question_id": 543896,
        "question_body": "Rerum qui vel ut suscipit ab sit ipsum eius expedita.",
        "question_date": "2021-09-10T00:00:00.000Z",
        "asker_name": "Thaddeus.Batz96",
        "question_helpfulness": 25,
        "reported": false,
        "answers": {
          "5091048": {
            "id": 5091048,
            "body": "Libero et possimus et tenetur.",
            "date": "2021-03-01T00:00:00.000Z",
            "answerer_name": "Michael_Nicolas10",
            "helpfulness": 3,
            "photos": [
              "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            ]
          },
          "5091049": {
            "id": 5091049,
            "body": "Odio qui quia.",
            "date": "2021-03-10T00:00:00.000Z",
            "answerer_name": "Johan_Turner",
            "helpfulness": 0,
            "photos": [
              "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091050": {
            "id": 5091050,
            "body": "Et ea facilis.",
            "date": "2021-07-23T00:00:00.000Z",
            "answerer_name": "Greg_Turcotte67",
            "helpfulness": 2,
            "photos": []
          },
          "5091051": {
            "id": 5091051,
            "body": "Rerum sunt ut nihil non temporibus ut dolorem quis est.",
            "date": "2021-08-26T00:00:00.000Z",
            "answerer_name": "Leilani_Prohaska",
            "helpfulness": 5,
            "photos": [
              "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091052": {
            "id": 5091052,
            "body": "Quis ducimus doloremque quos.",
            "date": "2021-06-22T00:00:00.000Z",
            "answerer_name": "Michel_Bauch",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091053": {
            "id": 5091053,
            "body": "Ea sit dolor vel impedit et placeat iusto est et.",
            "date": "2021-03-12T00:00:00.000Z",
            "answerer_name": "Tremayne_Ullrich96",
            "helpfulness": 14,
            "photos": [
              "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            ]
          },
          "5091054": {
            "id": 5091054,
            "body": "Omnis necessitatibus explicabo id sunt sunt voluptatem eveniet cupiditate ipsum.",
            "date": "2021-07-03T00:00:00.000Z",
            "answerer_name": "Lily.Sanford14",
            "helpfulness": 5,
            "photos": [
              "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80",
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091055": {
            "id": 5091055,
            "body": "Neque aut et nobis ducimus pariatur sunt maxime recusandae.",
            "date": "2021-09-17T00:00:00.000Z",
            "answerer_name": "Delaney.Vandervort",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091056": {
            "id": 5091056,
            "body": "Consectetur vel et.",
            "date": "2021-08-21T00:00:00.000Z",
            "answerer_name": "Eloisa_Wintheiser",
            "helpfulness": 5,
            "photos": []
          },
          "5091057": {
            "id": 5091057,
            "body": "Similique ut deleniti ut fugit molestias maiores.",
            "date": "2021-05-07T00:00:00.000Z",
            "answerer_name": "Haleigh93",
            "helpfulness": 0,
            "photos": []
          },
          "5091058": {
            "id": 5091058,
            "body": "Nihil aut tempore quaerat nostrum.",
            "date": "2021-06-20T00:00:00.000Z",
            "answerer_name": "Ena_Zulauf44",
            "helpfulness": 5,
            "photos": []
          },
          "5091059": {
            "id": 5091059,
            "body": "Fuga quaerat impedit ducimus sapiente ducimus mollitia et.",
            "date": "2021-05-27T00:00:00.000Z",
            "answerer_name": "Jabari_Robel",
            "helpfulness": 12,
            "photos": [
              "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            ]
          },
          "5091060": {
            "id": 5091060,
            "body": "Sit culpa cum eius omnis similique atque.",
            "date": "2021-01-14T00:00:00.000Z",
            "answerer_name": "Providenci.Stracke58",
            "helpfulness": 3,
            "photos": []
          },
          "5091061": {
            "id": 5091061,
            "body": "Beatae ea sint aspernatur qui autem.",
            "date": "2021-06-01T00:00:00.000Z",
            "answerer_name": "Jamaal87",
            "helpfulness": 16,
            "photos": []
          },
          "5091062": {
            "id": 5091062,
            "body": "Rem atque laudantium alias at libero quisquam doloremque.",
            "date": "2021-11-02T00:00:00.000Z",
            "answerer_name": "Anibal55",
            "helpfulness": 3,
            "photos": []
          },
          "5091063": {
            "id": 5091063,
            "body": "Dolores quis perferendis expedita dolorem.",
            "date": "2021-08-09T00:00:00.000Z",
            "answerer_name": "Joan.Schmidt69",
            "helpfulness": 15,
            "photos": []
          },
          "5091064": {
            "id": 5091064,
            "body": "Voluptatem saepe vero eum sunt optio natus.",
            "date": "2020-11-29T00:00:00.000Z",
            "answerer_name": "Deon98",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091065": {
            "id": 5091065,
            "body": "Est exercitationem assumenda amet eos architecto reiciendis consectetur.",
            "date": "2021-10-13T00:00:00.000Z",
            "answerer_name": "Katlyn.Conroy",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
            ]
          }
        }
      },
      {
        "question_id": 543891,
        "question_body": "Perspiciatis voluptas ut.",
        "question_date": "2020-11-10T00:00:00.000Z",
        "asker_name": "Bernadette31",
        "question_helpfulness": 25,
        "reported": false,
        "answers": {
          "5091020": {
            "id": 5091020,
            "body": "Sunt iste nihil fugiat ut nam ullam.",
            "date": "2021-07-10T00:00:00.000Z",
            "answerer_name": "Trudie55",
            "helpfulness": 7,
            "photos": []
          },
          "5091021": {
            "id": 5091021,
            "body": "Doloribus dolorem molestiae ea.",
            "date": "2021-04-07T00:00:00.000Z",
            "answerer_name": "Margie.Skiles",
            "helpfulness": 9,
            "photos": [
              "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
              "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
            ]
          }
        }
      },
      {
        "question_id": 543890,
        "question_body": "Non deserunt minus amet eius facilis.",
        "question_date": "2021-03-12T00:00:00.000Z",
        "asker_name": "Clifford2",
        "question_helpfulness": 24,
        "reported": false,
        "answers": {
          "5091001": {
            "id": 5091001,
            "body": "Quae distinctio et minus quos sed.",
            "date": "2021-08-07T00:00:00.000Z",
            "answerer_name": "Francis.Nienow",
            "helpfulness": 19,
            "photos": [
              "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091002": {
            "id": 5091002,
            "body": "Quidem possimus quisquam.",
            "date": "2021-06-04T00:00:00.000Z",
            "answerer_name": "Rebekah.Leuschke",
            "helpfulness": 16,
            "photos": [
              "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
              "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091003": {
            "id": 5091003,
            "body": "Exercitationem perspiciatis sapiente nobis aut quo itaque alias ut.",
            "date": "2021-02-05T00:00:00.000Z",
            "answerer_name": "Constance_Nienow",
            "helpfulness": 4,
            "photos": []
          },
          "5091004": {
            "id": 5091004,
            "body": "Distinctio et et.",
            "date": "2021-03-12T00:00:00.000Z",
            "answerer_name": "Florence_Mertz89",
            "helpfulness": 0,
            "photos": [
              "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
              "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091005": {
            "id": 5091005,
            "body": "Laborum in laboriosam adipisci cupiditate.",
            "date": "2021-03-06T00:00:00.000Z",
            "answerer_name": "Yessenia_Keeling",
            "helpfulness": 11,
            "photos": [
              "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
              "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091006": {
            "id": 5091006,
            "body": "Reprehenderit quia voluptatem aspernatur quis.",
            "date": "2021-06-27T00:00:00.000Z",
            "answerer_name": "Pierce.Daniel",
            "helpfulness": 5,
            "photos": []
          },
          "5091007": {
            "id": 5091007,
            "body": "Aut illum labore sunt et quos assumenda.",
            "date": "2021-10-21T00:00:00.000Z",
            "answerer_name": "Michale96",
            "helpfulness": 19,
            "photos": [
              "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
              "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091008": {
            "id": 5091008,
            "body": "Qui assumenda voluptates officia.",
            "date": "2021-09-06T00:00:00.000Z",
            "answerer_name": "Shaylee.Skiles",
            "helpfulness": 0,
            "photos": []
          },
          "5091009": {
            "id": 5091009,
            "body": "Ea incidunt dicta assumenda consequatur vel maiores vitae id.",
            "date": "2021-04-13T00:00:00.000Z",
            "answerer_name": "Ella.Kiehn",
            "helpfulness": 6,
            "photos": [
              "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            ]
          },
          "5091010": {
            "id": 5091010,
            "body": "Nostrum sequi dolorem totam ea delectus voluptas.",
            "date": "2021-10-07T00:00:00.000Z",
            "answerer_name": "Johathan93",
            "helpfulness": 9,
            "photos": []
          },
          "5091011": {
            "id": 5091011,
            "body": "Eius alias dolor quasi delectus eaque voluptatem.",
            "date": "2021-11-07T00:00:00.000Z",
            "answerer_name": "Ryley.Watsica",
            "helpfulness": 0,
            "photos": [
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091012": {
            "id": 5091012,
            "body": "Alias fugit ducimus sed architecto quis voluptatem autem ad.",
            "date": "2021-02-09T00:00:00.000Z",
            "answerer_name": "Odessa_Gleichner9",
            "helpfulness": 17,
            "photos": [
              "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            ]
          },
          "5091013": {
            "id": 5091013,
            "body": "Unde voluptatum ipsam.",
            "date": "2020-12-08T00:00:00.000Z",
            "answerer_name": "Danial.Carter",
            "helpfulness": 5,
            "photos": []
          },
          "5091014": {
            "id": 5091014,
            "body": "Ut iste eum voluptates voluptas quo.",
            "date": "2021-01-23T00:00:00.000Z",
            "answerer_name": "Elfrieda32",
            "helpfulness": 5,
            "photos": [
              "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091015": {
            "id": 5091015,
            "body": "Eos eveniet labore quae culpa beatae consequuntur delectus.",
            "date": "2021-07-26T00:00:00.000Z",
            "answerer_name": "Ines.Fahey",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
              "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091016": {
            "id": 5091016,
            "body": "Consequatur et repudiandae nisi qui.",
            "date": "2021-05-07T00:00:00.000Z",
            "answerer_name": "Kelvin.Leuschke",
            "helpfulness": 6,
            "photos": []
          },
          "5091017": {
            "id": 5091017,
            "body": "Aperiam voluptatem enim sint quisquam inventore sunt est consequatur sunt.",
            "date": "2021-01-06T00:00:00.000Z",
            "answerer_name": "Jerod28",
            "helpfulness": 0,
            "photos": [
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            ]
          },
          "5091018": {
            "id": 5091018,
            "body": "Non inventore facilis eligendi explicabo dolores soluta laboriosam voluptatum quo.",
            "date": "2020-12-05T00:00:00.000Z",
            "answerer_name": "Selina57",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
              "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5091019": {
            "id": 5091019,
            "body": "Tempora ut temporibus qui suscipit repellendus.",
            "date": "2021-09-03T00:00:00.000Z",
            "answerer_name": "Travis_Swaniawski12",
            "helpfulness": 16,
            "photos": []
          }
        }
      },
      {
        "question_id": 543886,
        "question_body": "Ut est dolor.",
        "question_date": "2020-12-26T00:00:00.000Z",
        "asker_name": "Brooke.Smitham17",
        "question_helpfulness": 24,
        "reported": false,
        "answers": {
          "5090970": {
            "id": 5090970,
            "body": "Dolorem itaque quas delectus quaerat qui tempore similique et.",
            "date": "2021-07-25T00:00:00.000Z",
            "answerer_name": "Declan_Lind56",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            ]
          },
          "5090971": {
            "id": 5090971,
            "body": "Explicabo quod minus dolor et rerum veniam est.",
            "date": "2021-09-20T00:00:00.000Z",
            "answerer_name": "Michele_Dibbert93",
            "helpfulness": 7,
            "photos": [
              "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            ]
          },
          "5090972": {
            "id": 5090972,
            "body": "Vel beatae consequatur repellendus et optio.",
            "date": "2021-07-08T00:00:00.000Z",
            "answerer_name": "Scotty5",
            "helpfulness": 8,
            "photos": [
              "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80",
              "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5090973": {
            "id": 5090973,
            "body": "Iusto suscipit aut sit consequatur assumenda dignissimos repellendus.",
            "date": "2021-01-05T00:00:00.000Z",
            "answerer_name": "Katlyn49",
            "helpfulness": 8,
            "photos": [
              "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5090974": {
            "id": 5090974,
            "body": "Neque iste corrupti eum molestiae est dolores.",
            "date": "2021-06-10T00:00:00.000Z",
            "answerer_name": "Janelle.Gleichner",
            "helpfulness": 0,
            "photos": [
              "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            ]
          },
          "5090975": {
            "id": 5090975,
            "body": "Similique voluptas perferendis eligendi debitis quaerat.",
            "date": "2021-06-19T00:00:00.000Z",
            "answerer_name": "Bertrand74",
            "helpfulness": 2,
            "photos": []
          },
          "5090976": {
            "id": 5090976,
            "body": "Numquam incidunt ut sapiente quis cumque alias alias et.",
            "date": "2021-09-02T00:00:00.000Z",
            "answerer_name": "Eleonore_Volkman",
            "helpfulness": 13,
            "photos": [
              "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
              "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            ]
          },
          "5090977": {
            "id": 5090977,
            "body": "Non id pariatur a dolorum eius.",
            "date": "2021-09-07T00:00:00.000Z",
            "answerer_name": "Cassidy_Thompson45",
            "helpfulness": 2,
            "photos": [
              "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            ]
          },
          "5090978": {
            "id": 5090978,
            "body": "Vero quo aspernatur doloribus itaque sunt libero voluptas odit.",
            "date": "2021-11-04T00:00:00.000Z",
            "answerer_name": "Eudora_Bernhard15",
            "helpfulness": 17,
            "photos": [
              "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            ]
          },
          "5090979": {
            "id": 5090979,
            "body": "Possimus culpa sunt tenetur odit error nesciunt.",
            "date": "2021-03-15T00:00:00.000Z",
            "answerer_name": "Vladimir.Kassulke",
            "helpfulness": 9,
            "photos": []
          },
          "5090980": {
            "id": 5090980,
            "body": "Asperiores nihil laudantium.",
            "date": "2021-07-02T00:00:00.000Z",
            "answerer_name": "Eveline90",
            "helpfulness": 12,
            "photos": [
              "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
            ]
          },
          "5090981": {
            "id": 5090981,
            "body": "Sequi ullam id corrupti voluptatem maiores provident incidunt vero dolorem.",
            "date": "2020-12-17T00:00:00.000Z",
            "answerer_name": "Adela95",
            "helpfulness": 12,
            "photos": [
              "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            ]
          },
          "5090982": {
            "id": 5090982,
            "body": "Quia optio sed fugit aut pariatur tempore aperiam ut itaque.",
            "date": "2021-10-25T00:00:00.000Z",
            "answerer_name": "Alice_Sanford",
            "helpfulness": 2,
            "photos": []
          }
        }
      }
    ]
  }
);

const newQaContext = createContext(
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=62635',
    headers: { authorization: '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' },
  }).then((results) => {
    return results.data
  }),
);

export default function QuestionsAnswers() {
  const questions = useContext(qaContext);

  const storedQuestions = questions.results.map((element) => {
    return <Questions question={element}/>
  });
  const [currentQs, setCurrentQs] = useState([storedQuestions[0], storedQuestions[1]])

  const handleQuestionButtonClick = () => {
    setCurrentQs(storedQuestions)
  }
  return (
    <div>
      <div>
        Questions and Answers
        <input placeholder=" Have a question? Search for answers..." />
        <input type="button" value="search" />
      </div>
      <div>
        {currentQs.map((element) => {
          return element;
        })}
      </div>
      <p />
      <input type="button" value="More Answered Questions" onClick={handleQuestionButtonClick}/>
      <input type="button" value="Add a Question + " />
    </div>
  );
}
