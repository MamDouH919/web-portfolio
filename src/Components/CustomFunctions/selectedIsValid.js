export const selectedIdIsValid = (data, id) => {
  const handeldData =data[Object.keys(data)[0]]
  return handeldData.some((i) => i.id === id);
};
