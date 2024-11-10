const textGenerator = (data = {}) => {
  const {
    duplicatesWithDifferentPrices,
    backorderedItems,
    differentQtyShipped,
  } = data;
  console.log(data);
  let texts = [];
  if (duplicatesWithDifferentPrices?.length > 0) {
  }
  if (texts.length === 0) {
    texts.push('Please click Review button to proceed.');
  }

  return texts;
};

export default textGenerator;
