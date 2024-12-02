import { z } from 'zod';

export const consultationFormSchema = z.object({
  name: z.string().min(1, { message: `Name is required` }).max(255),
  email: z.string().email({ message: `Invalid email address` }),
  phone: z.string().min(10, { message: `Please provide a valid phone number!` }).max(15)
});