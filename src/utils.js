export const randomNum = () => {
  const min = 1;
  const max = 50;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const randomOperation = () => {
  const arr = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * arr.length);
  return arr[operation];
};
