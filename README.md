
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# User Service

Этот проект представляет собой сервис для работы с пользователями с использованием NestJS и TypeORM. Сервис включает в себя два основных функционала:

- Обновление флага `problems` у пользователей.
- Подсчет количества пользователей с флагом `problems` равным `true`.

## Требования

Для работы с проектом вам потребуется:

- Node.js версии 14 и выше.
- PostgreSQL или другая совместимая база данных, настроенная для использования с TypeORM.

## Установка и настройка

### Клонирование репозитория

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/your-repository-url
    cd user-service
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Настройте файл `.env` с конфигурацией базы данных:

    ```env
    DB_HOST=
    DB_PORT=
    DB_USER=
    DB_PASSWORD=
    DB_DATABASE=
    ```

4. Убедитесь, что ваша база данных PostgreSQL запущена и доступна.

### Выполнение миграций

1. Выполните миграции для создания таблиц и наполнения базы данных:

    Запустите миграции для создания таблицы пользователей и добавления данных в базу:

    ```bash
    npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d src/database/data-source.ts
    ```

    **Важно:** база данных будет содержать таблицу `user` с 1 миллионом пользователей.

## Запуск проекта

Для запуска сервера выполните команду:

```bash
npm run start
```

Сервис будет доступен по адресу `http://localhost:3000`.

## Миграции
![image](https://github.com/user-attachments/assets/22dd8c21-a54e-4ba9-8337-340dc7f97582)

- **Создание таблицы пользователей** — первая миграция создаёт таблицу `user` с нужными полями.
- **Заполнение таблицы пользователями** — вторая миграция добавляет в таблицу 1 миллион пользователей с случайными данными.
![image](https://github.com/user-attachments/assets/ef4035cb-48b5-4673-a894-64f9706d861d)

## Структура таблицы `user`

Каждый пользователь имеет следующие поля:

- `id` (number): уникальный идентификатор пользователя.
- `firstName` (string): имя пользователя.
- `lastName` (string): фамилия пользователя.
- `age` (number): возраст пользователя.
- `gender` (string): пол пользователя (`male` или `female`).
- `problems` (boolean): флаг, указывающий, есть ли проблемы у пользователя.

![image](https://github.com/user-attachments/assets/a2391ccf-ce5d-4289-af17-ba9927c4ef85)

## API Эндпоинты

### 1. POST /users/reset-problems

### 2. GET /users/count-with-problems

![image](https://github.com/user-attachments/assets/0f85fbf1-1577-4f06-acbc-a66df8afdf00)

## Разработка и тестирование

Для разработки и тестирования можно использовать следующие команды:

- Запуск в режиме разработки:

    ```bash
    npm run start:dev
    ```

- Запуск тестов:

    ```bash
    npm run test
    ```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======

