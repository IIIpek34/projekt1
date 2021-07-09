export const randomNum = (min = 1, max = 50) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const randomElementArray = (arr) => {
  const operation = Math.floor(Math.random() * arr.length);
  return arr[operation];
};
