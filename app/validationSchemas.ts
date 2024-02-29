import { z } from "zod";

export const authSchema = z.object({
  password: z.string().min(4),
  email: z.string().email(),
});
export type FormFields = z.infer<typeof authSchema>;
