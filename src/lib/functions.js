/**
 *
 * @param {string} dataMatrix
 * @returns {Object}
 */
export const parseDataMatrix = (dataMatrix) => {
  const gtin = dataMatrix.match(/(?<=\(01\))\d{14}/)?.[0];
  const lot = dataMatrix.match(/(?<=\(10\))([^(]{1,20})/)?.[0];
  const exp = dataMatrix.match(/(?<=\(17\))\d{6}/)?.[0];
  const sn = dataMatrix.match(/(?<=\(21\))([^(]{1,20})/)?.[0];
  return { gtin, lot, exp, sn };
};
/**
 *
 * @param {Array} treeItems
 * @returns {[Array]}
 */
export const registerItemId = (treeItems) => {
  let level = 0;
  const itemIds = [];
  const register = (item) => {
    if (item.children?.length) {
      if (!itemIds[level]) {
        itemIds[level] = [];
      }
      itemIds[level].push(item.id);
      level++;
      item.children.forEach(register);
    } else {
      level = 0;
    }
  };
  treeItems.forEach(register);
  return itemIds;
};
