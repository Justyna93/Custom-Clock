const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
	const files = [
		'./dist/custom-clock/runtime.js',
		'./dist/custom-clock/polyfills.js',
		'./dist/custom-clock/scripts.js',
		'./dist/custom-clock/main.js',
	]

	await fs.ensureDir('elements');

	await concat(files, 'elements/custom-clock.js');

	await fs.copyFile('./dist/custom-clock/styles.css', 'elements/styles.css');

})()