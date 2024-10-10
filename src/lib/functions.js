/**
 *
 * @param {string} dataMatrix
 * @returns {Object}
 */
export const parseDataMatrix = (dataMatrix) => {
  const gtin = dataMatrix.match(/(?<=\(01\))\d{14}/)?.[0];
  const lot = dataMatrix.match(/(?<=\(10\))([a-zA-Z0-9]{1,20})(\\x1d)?/)?.[0];
  const exp = dataMatrix.match(/(?<=\(17\))\d{6}/)?.[0];
  const sn = dataMatrix.match(/(?<=\(21\))([a-zA-Z0-9]{1,20})(\\x1d)?/)?.[0];
  return { gtin, lot, exp, sn };
};
/**
 *
 * @param {Object} data
 * @returns {Object}
 */
export const generateDrugTrees = (data) =>
  data.map((v) => {
    return {
      id: v._id,
      label: v.generic_name,
      children: v.families.map((w) => {
        return {
          id: w._id,
          label: `${w.brand_name_base}+${w.strength[0]}`, // 0.1.1 버전에서는 name이다
          children: w.alternatives.map((x) => {
            return {
              id: x._id,
              label: x.manufacturer_name,
            };
          }),
        };
      }),
    };
  });
