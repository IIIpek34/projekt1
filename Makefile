# Makefile
install: # установка зависимостей
	npm install
srart: # запуск приложения
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
