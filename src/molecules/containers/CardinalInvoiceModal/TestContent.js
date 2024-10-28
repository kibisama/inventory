import React from 'react';
import MyDatePicker from '../../../atoms/MyDatePicker';
import dayjs from 'dayjs';
import * as mongodAPI from '../../../lib/api/mongod';
import { Button } from '@mui/material';

const TestContent = () => {
  const [date, setDate] = React.useState(dayjs());
  const [data, setData] = React.useState({
    invoiceNumbers: [],
  });
  const [result, setResult] = React.useState({
    extraItems: [],
    missingItems: [],
    expiringItems: [],
  });
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await mongodAPI.getCardinalInvoice(
          date.format('MM-DD-YYYY'),
        );
        console.log(data);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [date]);
  const handleChange = (value) => {
    setDate(value);
  };
  const handleRunReport = async () => {
    try {
      const { data } = await mongodAPI.postCardinalInvoice(
        date.format('MM-DD-YYYY'),
      );
      setResult(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyDatePicker
        slotProps={{ textField: { size: 'small' } }}
        onChange={handleChange}
        label="Invoice Date"
        value={date}
      />
      {data?.invoiceNumbers?.length > 0
        ? `invoice found: ${data}`
        : 'invoice not found'}
      {data?.duplicatesWithDifferentPrices?.length > 0
        ? `Some items have different prices: ${data.duplicatesWithDifferentPrices}`
        : null}
      {data?.invoiceNumbers?.length > 0 ? (
        <Button children="Run Report" onClick={handleRunReport} />
      ) : (
        <Button children="Find invoice" />
      )}
      {result.extraItems.length > 0
        ? `extra items: ${result.extraItems}`
        : null}
      {result.missingItems.length > 0
        ? `missing items: ${result.missingItems.map((v) => v.ndc)}`
        : null}
      {result.expiringItems.length > 0
        ? `expiring items: ${result.expiringItems}`
        : null}
    </>
  );
};

export default TestContent;
