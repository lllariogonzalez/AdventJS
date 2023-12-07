function manufacture(gifts, materials) {
  let regex = new RegExp(`^[${materials}]+${"$"}`);
  return gifts.filter(regex.test.bind(regex));
}