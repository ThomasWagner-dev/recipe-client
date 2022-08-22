FROM node:14.18.3 AS node

WORKDIR /app
COPY . .
RUN npm install && npm install @angular/cli -g
RUN ng build --prod

FROM nginx:alpine
COPY --from=node /app/dist/prj-basics-final /usr/share/nginx/html
