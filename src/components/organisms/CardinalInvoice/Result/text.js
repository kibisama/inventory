const textGenerator = (activeStep, data = {}) => {
  const {
    missingItems,
    extraItems,
    priceChangedItems,
    expiringItems,
    selfCheckItems,
  } = data;
  console.log(data);
  let texts = [];
  switch (activeStep) {
    case 0:
      if (missingItems?.length > 0) {
        texts.push('Following item(s) are not scanned:');
        for (
          let i = 0;
          i < (missingItems.length < 3 ? missingItems.length : 3);
          i++
        ) {
          texts.push(
            `* ${missingItems[i].item} | ${missingItems[i].tradeName} | ${missingItems[i].cost} (${missingItems[i].qty})`,
          );
        }
        if (missingItems.length > 3) {
          texts.push(`... and ${missingItems.length - 3} more items`);
        }
      }
      if (data.extraItems?.length > 0) {
        texts.push(
          'Following item(s) are scanned but not listed in the invoice:',
        );
        for (
          let i = 0;
          i < (extraItems.length < 3 ? extraItems.length : 3);
          i++
        ) {
          texts.push(
            `* ${extraItems[i].item} | ${extraItems[i].tradeName} | ${extraItems[i].cost} (${extraItems[i].qty})`,
          );
        }
        if (extraItems.length > 3) {
          texts.push(`... and ${extraItems.length - 3} more items`);
        }
      }
      break;
    case 1:
      if (priceChangedItems.length > 0) {
        texts.push('Following item(s):');
      }
      break;
    case 2:
      if (expiringItems.length > 0) {
        texts.push(
          'Following item(s) have a short expiration date (less than one year):',
        );
      }
      break;
    case 3:
      if (selfCheckItems.length > 0) {
        texts.push('Please review following OTC items manually:');
        for (
          let i = 0;
          i < (selfCheckItems.length < 10 ? selfCheckItems.length : 10);
          i++
        ) {
          texts.push(
            `* ${selfCheckItems[i].item} | ${selfCheckItems[i].tradeName} | ${selfCheckItems[i].cost} (${selfCheckItems[i].qty})`,
          );
        }
        if (selfCheckItems.length > 10) {
          texts.push(`... and ${selfCheckItems.length - 10} more items`);
        }
      }
      break;
    default:
  }
  if (texts.length === 0) {
    texts.push('Clear');
  }
  return texts;
};

export default textGenerator;
