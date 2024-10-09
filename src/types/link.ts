import { z } from 'zod';

// TODO: add statisticts (open, lastOpenedAt, etc)
export const LinkSchema = z.object({
  id: z.string().min(1),
  sourceUrl: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type Link = z.infer<typeof LinkSchema>;
