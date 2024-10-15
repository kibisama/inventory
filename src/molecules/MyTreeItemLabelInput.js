import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import MyIconButton from '../atoms/MyIconButton';
import StyledLabelInput from './StyledLabelInput';
import { asyncEditInv, setIsUpdated } from '../reduxjs@toolkit/treeSlice';

const style = {
  numberInput: { fontSize: '1rem', width: 100 },
};

const fontStyle = [
  { fontSize: '1.1rem' },
  { fontSize: '1.05rem' },
  { fontSize: '1rem' },
];
const MyTreeItemLabelInput = React.forwardRef(
  (
    {
      item,
      _error,
      handleCancelItemLabelEditing,
      handleSaveItemLabel,
      ...props
    },
    ref,
  ) => {
    const dispatch = useDispatch();
    const { isUpdating, isUpdated, error } = useSelector((state) => state.tree);
    const { hierarchy } = item;
    const [initialLabel, setInitialLabel] = React.useState(props.value);
    const [label, setLabel] = React.useState(props.value);
    const [initialOptQty, setInitialOptQty] = React.useState(
      item.optimalQty ?? 0,
    );
    const [optQty, setOptQty] = React.useState(item.optimalQty ?? 0);
    const [initialPreferred, setInitialPreffered] = React.useState(
      item.preferred,
    );
    const [preferred, setPreffered] = React.useState(item.preferred);
    const handleLabelChange = React.useCallback((e) => {
      setLabel(e.target.value);
    }, []);
    const handleOptQtyChange = React.useCallback((e) => {
      setOptQty(e.target.value);
    }, []);
    const handlePreferredChange = React.useCallback(() => {
      setPreffered((prev) => !prev);
    }, []);
    const reset = React.useCallback(
      (e) => {
        handleCancelItemLabelEditing(e);
        setLabel(initialLabel);
        setOptQty(initialOptQty);
        setPreffered(initialPreferred);
      },
      [
        handleCancelItemLabelEditing,
        initialLabel,
        initialOptQty,
        initialPreferred,
      ],
    );
    const eventRef = React.useRef(null);
    const save = React.useCallback(
      (e) => {
        if (
          label !== initialLabel ||
          optQty !== initialOptQty ||
          preferred !== initialPreferred
        ) {
          eventRef.current = e;
          dispatch(
            asyncEditInv({
              id: item.id,
              hierarchy,
              name: label,
              preferred,
              optimalQty: optQty,
            }),
          );
        } else {
          handleCancelItemLabelEditing(e);
        }
      },
      [
        dispatch,
        handleCancelItemLabelEditing,
        hierarchy,
        initialLabel,
        initialOptQty,
        initialPreferred,
        item,
        label,
        optQty,
        preferred,
      ],
    );
    const handleOnKeyDown = React.useCallback(
      (e) => {
        if (e.key === 'Enter') {
          // if e.target
          save(e);
        }
        if (e.key === 'Escape') {
          reset(e);
        }
      },
      [save, reset],
    );

    React.useEffect(() => {
      if (isUpdated) {
        setInitialLabel(label);
        setInitialPreffered(preferred);
        setInitialOptQty(optQty);
        item.preferred = preferred;
        item.optimalQty = optQty;
        handleSaveItemLabel(eventRef.current, label);
        dispatch(setIsUpdated(false));
      }
    }, [
      dispatch,
      isUpdated,
      item,
      label,
      optQty,
      preferred,
      handleSaveItemLabel,
    ]);

    return (
      <React.Fragment>
        <StyledLabelInput
          {...props}
          sx={{ ...fontStyle[hierarchy] }}
          onChange={handleLabelChange}
          onKeyDown={handleOnKeyDown}
          value={label}
          type="text"
          ref={ref}
        />
        {hierarchy === 2 && (
          <React.Fragment>
            <StyledLabelInput
              {...props}
              sx={style.numberInput}
              onChange={handleOptQtyChange}
              onKeyDown={handleOnKeyDown}
              type="number"
              min={0}
              value={optQty}
              ref={ref}
            />
            {preferred ? (
              <MyIconButton
                variant="star"
                fontSize="small"
                onClick={handlePreferredChange}
                // onKeyDown={handleOnKeyDown}
              />
            ) : (
              <MyIconButton
                variant="starBorder"
                fontSize="small"
                onClick={handlePreferredChange}
                // onKeyDown={handleOnKeyDown}
              />
            )}
          </React.Fragment>
        )}
        {isUpdating ? (
          <CircularProgress size={36} />
        ) : (
          <React.Fragment>
            <MyIconButton
              variant="check"
              disabled={_error}
              fontSize="small"
              onClick={save}
              // onKeyDown={handleOnKeyDown}
            />
            <MyIconButton
              variant="close"
              fontSize="small"
              onClick={reset}
              // onKeyDown={handleOnKeyDown}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  },
);

export default MyTreeItemLabelInput;
