import client from './client';

export const getInv = () => client.get('/inv');
export const editInv = (body) => client.post('/inv/edit', body);
export const scanInv = (body) => client.post('/inv/scan', body);
