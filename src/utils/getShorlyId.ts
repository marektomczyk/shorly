import { nanoid } from 'nanoid';

export function getShorlyId(): string {
  const random = (Math.random() * 100).toFixed();
  return nanoid(4) + random + nanoid(4);
}
