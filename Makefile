run: kill build
	docker-compose up -d

build:
	docker build -t vazina/colt-camp:latest .

kill:
	docker-compose kill || true
	docker-compose rm -f || true
