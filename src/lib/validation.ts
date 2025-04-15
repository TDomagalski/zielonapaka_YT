// zod służy do walidacji danych
import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().trim().min(3).max(50),
  price: z.coerce.number().int().min(1).max(1000),
  description: z.string().trim().min(3).max(2000),
  imageURL: z.string().url().max(2048),
});

export const SignupSchema = z.object({
  username: z.string().trim().min(3).max(20),
  email: z.string().toLowerCase().email().max(100),
  password: z.string().min(3).max(100),
});
