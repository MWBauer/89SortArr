var a=[10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
document.writeln("<h1>Sorting an Array</h1>");
outputArray("Data items in original order: ", a);
a.sort(compareIntegers);
outputArray("Data items in ascending order: ", a);
function outputArray(heading, theArray) {
    document.writeln("<p>" + heading + theArray.join("") + "</p>");
}
function compareIntegers(value1, value2) {
    return parseInt(value1) - parseInt(value2);    
}
