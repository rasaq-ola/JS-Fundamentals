const name = process.argv.slice(2);
if (name.length === 0) {
	console.log('No argument');
} else {
	console.log(name);
}
