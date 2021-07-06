# Makefile
install: # установка зависимостей
	npm install
start: # запуск приложения
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
