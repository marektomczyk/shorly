import { z } from 'zod';

// TODO: add statisticts (open, lastOpenedAt, etc)
export const LinkSchema = z.object({
  id: z.string(),
  sourceUrl: z.string(),
  createdAt: z.date(),
});
export type Link = z.infer<typeof LinkSchema>;
