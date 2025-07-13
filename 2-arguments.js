const name = process.argv.slice(2);
if (name.length === 0) {
	console.log('No argument');
} else if (name.length === 1) {
        console.log('Argument found');
} else {
	console.log('Arguments found');
}
