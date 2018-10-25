// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((item, index, list) => {
    if (item === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index %d!", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
