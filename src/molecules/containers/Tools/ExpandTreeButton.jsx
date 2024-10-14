import React from 'react';
import MyIconButton from '../../../atoms/MyIconButton';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedItems } from '../../../reduxjs@toolkit/treeSlice';

const ExpandTreeButtons = () => {
  const dispatch = useDispatch();
  const { registerItems, expandedItems } = useSelector((state) => state.tree);
  let totalLength = 0;
  registerItems.forEach((v) => {
    totalLength += v.length;
  });
  const expand = React.useCallback(() => {
    // if (expandedItems.length === 0) {
    //   dispatch(setExpandedItems(registerItems[0]));
    //   return;
    // }
    // const _registerItems = JSON.parse(JSON.stringify(registerItems));
    // for (let i = _registerItems.length - 1; i > -1; i--) {
    //   if (expandedItems.some((v) => _registerItems[i].includes(v))) {
    //     break;
    //   } else if (
    //     _registerItems.flat().every((v) => expandedItems.includes(v))
    //   ) {
    //     break;
    //   }
    //   _registerItems.pop();
    // }
    dispatch(setExpandedItems(registerItems.flat()));
  }, [dispatch, registerItems]);
  const collapseAll = React.useCallback(() => {
    dispatch(setExpandedItems([]));
  }, [dispatch]);
  return (
    <React.Fragment>
      {expandedItems.length === totalLength ? (
        <MyIconButton variant="unfoldLess" onClick={collapseAll} />
      ) : (
        <MyIconButton variant="unfoldMore" onClick={expand} />
      )}
    </React.Fragment>
  );
};

export default ExpandTreeButtons;
