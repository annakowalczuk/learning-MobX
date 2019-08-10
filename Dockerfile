FROM node:8 as base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000

COPY package.json package-lock.json ./
RUN npm install
COPY .gitignore .gitlab-ci.yml ./
COPY public ./public
COPY src ./src
CMD ["npm", "start"]
