var sayNode = function () {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';

console.log(oldObject.sayJS());    // Node
console.log(oldObject.sayNode());  // JS
console.log(oldObject.ES6); // Fantastic