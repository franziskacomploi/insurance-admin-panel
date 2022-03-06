export const compare = (x, y) => {
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
  return 0;
};

export const getPageItems = (data, perPage) => {
  const copiedData = [...data];
  const pages = data.length / perPage;
  const result = [];

  for (let i = 0; i < pages; i++) {
    result.push(copiedData.slice(perPage * i, perPage * (i + 1)));
  }
  return result;
};
