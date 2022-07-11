const isPlural = (amountNotes, singularWord) => {
  if (singularWord === "item") {
    return amountNotes > 1 ? "itens" : "item";
  }
  return amountNotes > 1 ? `${singularWord}s` : `${singularWord}`;
};

export default isPlural;
