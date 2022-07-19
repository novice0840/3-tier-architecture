FROM python:3

WORKDIR /usr/src/app

COPY ./ ./
RUN python -m pip install Django
RUN python manage.py migrate

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]


# 이미지 생성 명령어 (현 파일과 같은 디렉토리에서)
# docker build -t {이미지명} .

# 컨테이너 생성 & 실행 명령어
# docker run --name {컨테이너명} -p 3001:8000 {이미지명}