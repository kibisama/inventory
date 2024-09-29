import client from './client';

export const getInv = () => client.get('/inv');
export const postInv = (body) => client.post('/inv', body);
export const invScan = (body) => client.post('/inv/scan', body);
