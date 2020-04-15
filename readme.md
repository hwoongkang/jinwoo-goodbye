# 진우 굳바이 프로젝트

응원의 한 마디 남기기

React, Express, MongoDB

## Config

dotenv를 사용함  
environment variable에 MONGO_URI 필요  
(개발 환경에서 Mongo DB Atlas 활용중)  
@see: ./server/config/database.js

## Scripts

### install dependencies

- `npm install`
  서버 사이드 모듈 설치
- `npm install:client`
  클라이언트 모듈 설치

### development

- `npm run server`
  개발 환경 express
- `npm run client`
  개발 환경 react
- `npm run dev`
  위 두 개 커맨드 동시에

### production

- `npm run build:server`
  babel transpiling for express
- `npm run build:client`
  react-scripts build
- `npm run build`
  both of above commands
