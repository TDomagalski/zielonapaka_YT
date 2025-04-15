'use server';

import { createUser, getUserByEmail } from '@/lib/server-utils';
import { SignupSchema } from '@/lib/validation';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function signupAction(_: unknown, formData: unknown) {
  if (formData instanceof FormData) {
    const signupData = Object.fromEntries(formData);
    const validationResult = SignupSchema.safeParse(signupData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return { errors, message: '' };
    }

    const { username, email, password } = validationResult.data;

    try {
      const user = await getUserByEmail(email);

      if (user) {
        const message = 'Użytkownik o podanym adresie email już istnieje!';
        return { errors: {}, message };
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = await createUser({ username, email, passwordHash });
    } catch (error) {
      console.log(error);
      const message = 'Coś poszło nie tak. Spróbuj ponownie.';
      return { errors: {}, message };
    }
  } else {
    const message = 'Coś poszło nie tak. Spróbuj ponownie.';
    return { errors: {}, message };
  }

  redirect('/');
}
