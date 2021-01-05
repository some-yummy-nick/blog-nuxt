<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About</h1>
        <div class="about__text">
          <p>
            Современный блог на nuxt.js + vue.js с рендерингом и админкой, полным SEO и небольшой CRM системой внутри,
            которая будет показывать все комментарии с возможностью сменять статус "опубликован/не опубликован", а также
            удалять "спам"
          </p>
        </div>
        <!--<img class="about__image" src="@/assets/img/about.jpg" alt="">-->
        <img class="about__image" src="/img/about.jpg" alt="">
        <ul class="about__list">
          <li>SSR для приложений</li>
          <li>Полная SEO оптимизация</li>
          <li>Авторизация и Регистрация пользователей</li>
          <li>Защита админ панели</li>
          <li>Работа с token`ами - JWT</li>
          <li>Локальное хранилише</li>
          <li>Хранение сессий</li>
          <li>Markdown разметка</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'about',
    head() {
      let title = 'About my SSR blog',
        description = 'About my SSR blog! With Nuxt.js',
        type = 'site';

      return {
        title,
        meta: [
          {hid: 'description', name: 'description', content: description},
          {hid: 'og:description', name: 'og:description', content: description},
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'og:type', name: 'og:type', content: type},
        ]
      }
    },
  }
</script>

<style lang="scss">
  .about {
    &__list {
      li {
        &:before {
          content: '\2013';
          display: inline-block;
          margin-right: .625rem;
        }
      }
    }

    &__image,
    &__text {
      margin-bottom: 10px;
    }

    &__text {
      text-align: center;
    }
  }
</style>
