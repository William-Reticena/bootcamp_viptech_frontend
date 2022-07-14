const countNumberNotes = (total) => {
  const bankNotes = [100, 50, 20, 10, 5, 2, 1];
  let j = 0;
  const obj = [0, 0, 0, 0, 0, 0, 0];
  const notes = [];

  while (j < bankNotes.length) {
    if (total >= bankNotes[j]) {
      total -= bankNotes[j];
      obj[j]++;
    } else {
      j++;
    }
  }

  obj.forEach((item, index) => {
    if (item > 0)
      return notes.push({ bankNote: bankNotes[index], amount: item });
  });

  return notes;
};

export default countNumberNotes;
