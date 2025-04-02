'use server';

import { productSchema } from '@/lib/validation';
import { getProductByName } from '@/lib/server-utils';
import { createProduct } from '@/lib/server-utils';
import { revalidatePath } from 'next/cache';

// Po wysłaniu formularza, stworzy się nowy obiekt FormData, który przekażemy do funkcji addProductAction.
export async function addProductAction(_: unknown, formData: unknown) {
  if (formData instanceof FormData) {
    const productData = Object.fromEntries(formData);
    const validationResult = productSchema.safeParse(productData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return { errors, message: '' };
    }

    // wyciągamy dane z obiektu validationResult.data
    const { name, price, description, imageURL } = validationResult.data;

    try {
      const product = await getProductByName(name);

      if (product) {
        const message = 'Dany produkt już istnieje.';
        return { errors: {}, message };
      }

      await createProduct({ name, price, description, imageURL });
      // Po dodaniu produktu, wywołujemy funkcję revalidatePath, która odświeży całą stronę.
      revalidatePath('/');

      const message = 'Produkt został dodany.';
      return { errors: {}, message };
    } catch (error) {
      console.error('Błąd podczas dodawania produktu:', error);
      const message = 'coś poszło nie tak, spróbuj ponownie';
      return { errors: {}, message };
    }
  } else {
    console.error('Błąd podczas dodawania produktu:');
    const message = 'coś poszło nie tak, spróbuj ponownie';
    return { errors: {}, message };
  }
}
