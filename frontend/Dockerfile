# Stage 1
FROM node:22-alpine AS node
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/gifunny-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
