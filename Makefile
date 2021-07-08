# Makefile
install: # установка зависимостей
	npm install
startCalc:
	npx babel-node src/bin/brain-calc.js
startEven:
	npx babel-node src/bin/brain-even.js
start: # запуск приложения
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
