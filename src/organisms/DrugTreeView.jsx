import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setExpandedItems,
  setRegisterItems,
} from '../reduxjs@toolkit/treeSlice';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import * as mongodAPI from '../lib/api/mongod';
import MyTreeItem from './MyTreeItem';
import { registerItemId } from '../lib/functions';

const DrugTreeView = () => {
  const dispatch = useDispatch();
  const onExpandedItemsChange = React.useCallback(
    (e, itemIds) => {
      dispatch(setExpandedItems(itemIds));
    },
    [dispatch],
  );
  const { expandedItems, registerItems } = useSelector((state) => state.tree);
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await mongodAPI.getInv();
        if (data instanceof Array) {
          setResult(data);
          const registerItemIds = registerItemId(data);
          dispatch(setRegisterItems(registerItemIds));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [dispatch]);

  if (result.length === 0) {
    return null;
  }
  return (
    <RichTreeView
      items={result}
      slots={{ item: MyTreeItem }}
      experimentalFeatures={{ labelEditing: true }}
      expandedItems={expandedItems}
      onExpandedItemsChange={onExpandedItemsChange}
      isItemEditable
    />
  );
};

export default DrugTreeView;
