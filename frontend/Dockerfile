FROM node:16.15.1 
# 2022/7/7 현 시점에서 LTS 버전 

WORKDIR /home/node/app

COPY ./ ./

RUN npm install 
# App을 빌드하는 명령어. 여러개가 올 수 있다 



CMD ["npm", "run", "start"]
# 빌드된 App을 실행하는 명령어 하나만 올 수 있다 

# 이미지 생성 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .

# 컨테이너 생성 & 실행 명령어
# docker run --name {컨테이너명} -p 3000:3000 {이미지명}