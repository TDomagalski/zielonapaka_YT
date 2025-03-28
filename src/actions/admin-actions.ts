'use server';

// Po wysłaniu formularza, stworzy się nowy obiekt FormData, który przekażemy do funkcji addProductAction.
export async function addProductAction(formData: unknown) {
  const productData = Object.fromEntries(formData);

  console.log(productData);
}
