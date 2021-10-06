import React from 'react';

export const translations = {
  ru: {
    title: 'Emoji Critic',
    navigation: {
      home: 'Домой',
      overview: 'Обзор эмодзи',
      aboutMe: 'Обо мне',
      aboutUs: 'О нас',
    },
    texts: {
      home: {
        title: 'Emoji Critic — всё об эмодзи',
        subtitle: '#1 среди авторов обзоров на эмодзи в этом году!'
      },
      aboutMe: {
        buttons: {
          myStory: 'Моя история',
          myHobby: 'Моё хобби',
          myContacts: 'Контактная информация'
        },
        myStory: 'Я человек с простой мечтой — поделиться своими знаниями в области эмодзи с миром!',
        myHobby: `Кроме бесконечной любви к эмодзи и их рецензированию, я люблю путешествия, научную фантастику и пинг-понг. 
        По секрету скажу, я призёр одного крупного турнира по пинг-понгу. Возможно, вы слышали о нём.`,
        myContacts: 'Пока я не даю комментариев СМИ, но вы всё равно следите за новостями!'
      },
      aboutUs: {
        buttons: {
          story: 'История приложения',
          mission: 'Наша миссия'
        },
        story: {
          title: 'История приложения',
          text: `Приложение было создано в незапамятном 2020 году. 
          Коллектив Emoji Critic благодарит бабушку, без доброй поддержки которой проект был бы невозможен.`
        },
        mission: {
          title: 'Наша миссия',
          text: `Мы стремимся повысить уровень дискурса в сообществе пользователей эмодзи, 
          а также повысить качество профессиональной критики и рецензирования эмодзи.`
        }
      }
    },
    backButton: 'Назад',
  },
  en: {
    title: 'Emoji Critic',
    navigation: {
      home: 'Home',
      overview: 'Emoji Reviews',
      aboutMe: 'About Me',
      aboutUs: 'About Us',
    },
    texts: {
      home: {
        title: 'Emoji Critic — All About Emojis',
        subtitle: 'The #1 Destination for Emoji Reviews on the World Wide Web Since 2020!'
      },
      aboutMe: {
        buttons: {
          myStory: 'My Story',
          myHobby: 'Hobbies',
          myContacts: 'My Contact Info'
        },
        myStory: 'I’m just a simple person with a simple dream - to share my emoji expertise with the world!',
        myHobby: `In addition to my love of emoji criticism, I have a number of additional hobbies. 
        For example, I love to travel to new places, reading science fiction, and ping pong. As a matter of fact, a few years ago, I won a major ping pong competition. 
        Perhaps you heard about it.`,
        myContacts: 'I’m not taking media requests at the moment. Stay tuned!'
      },
      aboutUs: {
        buttons: {
          story: 'Site History',
          mission: 'Site Mission',
        },
        story: {
          title: 'Site History',
          text: `This site was founded back in 2020 thanks to a generous donation from Nana.`
        },
        mission: {
          title: 'Site Mission',
          text: `We aim to increase the level of intellectural discourse within the emoji community, 
          while also elevating the quality of professional emoji critisim.`
        }
      }
    },
    backButton: 'Назад',
  },
}
export const TranslationContext = React.createContext();
