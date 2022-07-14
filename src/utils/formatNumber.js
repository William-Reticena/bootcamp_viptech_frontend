const formatNumber = (number) => {
  if (number % 1) {
    if (number.toString().split(".")[1].length > 1) {
      if (number.toString().split(".")[1].length > 2)
        return (
          number.toString().replace(".", ",").split(",")[0] +
          "," +
          number.toString().replace(".", ",").split(",")[1].slice(0, 2)
        );

      return number.toString().replace(".", ",");
    }

    return number.toString().replace(".", ",") + "0";
  }

  return `${number},00`;
};

export default formatNumber;
