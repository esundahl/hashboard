
build: components
	@component build --dev -o ../server/public -n app

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
