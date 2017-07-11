run: kill build
  docker-compose run -p 3000:3000 app node ${app}

build:
  docker build -t vazina/coltcamp:latest .

kill:
    docker-compose kill || true
    docker-compose rm || true
