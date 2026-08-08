const arr = ["hello", "my", "name", "samir", "name"]
arr.forEach(function (item, index) {
    console.log(`item: ${item}, index: ${index}`);
    
});

const new_arr = arr.map((item, index) => {
    const new_item = "new" + item;
    return new_item;
});

console.log(new_arr);

const name = arr.find((item, index) => item == "name");
console.log(name);

const names = arr.filter((item, index) => item == "name");
console.log(names);

console.log(arr.includes("new"));//false
console.log(arr.includes("hello"));//true
