import { z } from 'zod';

export const CreateLinkDtoSchema = z.object({
  url: z.string().url().describe('The URL to shorten'),
});
export type CreateLinkDto = z.infer<typeof CreateLinkDtoSchema>;
