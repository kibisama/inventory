import React from 'react';
import { TreeItem2, useTreeItem2Utils } from '@mui/x-tree-view';
import MyTreeItemLabel from '../molecules/MyTreeItemLabel';
import MyTreeItemLabelInput from '../molecules/MyTreeItemLabelInput';
import StyledTreeItemContent from '../molecules/StyledTreeItemContent';

const MyTreeItem = React.forwardRef((props, ref) => {
  const [_error, set_Error] = React.useState(null);
  const { interactions, status, publicAPI } = useTreeItem2Utils({
    itemId: props.itemId,
    children: props.children,
  });
  const item = publicAPI.getItem(props.itemId);

  const handleContentDoubleClick = (event) => {
    event.defaultMuiPrevented = true;
  };
  const handleInputBlur = (event) => {
    event.defaultMuiPrevented = true;
  };
  const handleInputKeyDown = (event) => {
    event.defaultMuiPrevented = true;
  };
  // Package Item 클릭시 NDC 클립보드에 저장
  const handleOnClick = (event) => {
    if (item.hierarchy === 2 && item.ndc11) {
      window.navigator.clipboard.writeText(item.ndc11);
    }
  };
  return (
    <TreeItem2
      {...props}
      ref={ref}
      slots={{
        label: MyTreeItemLabel,
        labelInput: MyTreeItemLabelInput,
        content: StyledTreeItemContent,
      }}
      slotProps={{
        label: {
          item: item,
          editable: status.editable,
          editing: status.editing,
          onDoubleClick: handleContentDoubleClick,
          onClick: handleOnClick,
          toggleItemEditing: interactions.toggleItemEditing,
        },
        labelInput: {
          item: item,
          onBlur: handleInputBlur,
          onKeyDown: handleInputKeyDown,
          handleCancelItemLabelEditing:
            interactions.handleCancelItemLabelEditing,
          handleSaveItemLabel: interactions.handleSaveItemLabel,
          _error,
        },
      }}
    />
  );
});

export default MyTreeItem;
