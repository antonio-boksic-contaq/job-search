const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length; // 1, 2, 3 % 4 ==> 1, 2, 3
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
