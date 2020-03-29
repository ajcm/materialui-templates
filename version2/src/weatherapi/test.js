var arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];

var result = new Map(arr.map(i => [i.key, i.val]));

// When using TypeScript, need to specify type:
// var result = arr.map((i): [string, string] => [i.key, i.val])

// Unfortunately maps don't stringify well.  This is the contents in array form.
console.log("Result is: " + JSON.stringify([...result])); 


