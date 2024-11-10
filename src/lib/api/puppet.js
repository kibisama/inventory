import client from './client';

export const findCardinalInvoice = (date) =>
  client.post(`/cardinal/invoice/find/${date}`);
