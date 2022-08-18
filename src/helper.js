export const shuffle = (array) => {
  let newArr = array;
  let index = array.length,
    randIndex,
    temp;
  while (index !== 0) {
    randIndex = Math.floor(Math.random() * index);
    index--;
    temp = newArr[index];
    newArr[index] = newArr[randIndex];
    newArr[randIndex] = temp;
  }
  return newArr;
};
