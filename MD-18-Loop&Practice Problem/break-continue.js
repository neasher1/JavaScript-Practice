var items = [10, 20, 30, 40, 56, 60, 700, 80, 90, 100000];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item > 50) {
        continue;
    }
    console.log(item);
}
console.log("\n");

var items = [10, 20, 30, 40, 50, 60, 700, 80, 90, 100000];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 50) {
        break;
    }
    console.log(item);
}