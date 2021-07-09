# Makefile
install: # установка зависимостей
	npm install
startPrime:
	npx babel-node src/bin/brain-prime.js
startProgression:
	npx babel-node src/bin/brain-progression.js
startGcd:
	npx babel-node src/bin/brain-gcd.js
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
