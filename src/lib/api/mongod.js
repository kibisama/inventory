import client from './client';

export const invScan = (body) => client.post('/inv/scan', body);
