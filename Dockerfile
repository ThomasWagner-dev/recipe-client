FROM node:18-alpine AS node

WORKDIR /app
COPY . .
RUN npm install && npm install @angular/cli -g
RUN ng build --prod

FROM nginx:alpine:stable
COPY --from=node /app/dist/prj-basics-final /usr/share/nginx/html
