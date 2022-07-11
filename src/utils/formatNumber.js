const formatNumber = (number = 1.56) => {
  if (number % 1) {
    if (number.toString().split(".")[1].length > 1)
      return number.toString().replace(".", ",");

    return number.toString().replace(".", ",") + "0";
  }

  return `${number},00`;
};

export default formatNumber;
