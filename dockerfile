# Используем образ с Node.js
FROM node:14 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости и файлы проекта
COPY package*.json ./
COPY . ./

# Устанавливаем зависимости
RUN yarn install

# Собираем приложение React
RUN yarn build

# Создаем production-ready образ React приложения
FROM nginx:1.21

# Копируем собранное приложение в контейнер
COPY --from=build /app/build /usr/share/nginx/html

# Порт, на котором будет доступен фронтенд (80 по умолчанию для nginx)
EXPOSE 80

# Команда для запуска nginx
CMD ["nginx", "-g", "daemon off;"]