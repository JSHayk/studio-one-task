function userDto(data) {
  const { password, ...rest } = data;
  return rest._doc;
}

export default Object.freeze(userDto);
