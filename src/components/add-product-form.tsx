import AddProdutButton from './buttons/add-produt-button';
import { addProductAction } from '@/actions/admin-actions';

export default function AddProductForm() {
  return (
    <form
      className="rounded-lg mx-auto border border-gray-200 p-8 shadow-lg shadow-gray-200/50"
      action={addProductAction}
    >
      <div className="flex flex-col gap-1 mb-4">
        <label className="text-gray-950 font-medium text-sm" htmlFor="name">
          Nazwa
        </label>
        <input
          className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
          type="text"
          name="name"
          id="name"
          placeholder="nazwa"
          required
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label className="text-gray-950 font-medium text-sm" htmlFor="price">
          Cena
        </label>
        <input
          className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
          type="number"
          name="price"
          id="price"
          placeholder="0"
          required
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label
          className="text-gray-950 font-medium text-sm"
          htmlFor="description"
        >
          Opis
        </label>
        <input
          className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
          type="text"
          name="description"
          id="description"
          placeholder="opis"
          required
        />
      </div>
      <div className="flex flex-col gap-1 mb-8">
        <label className="text-gray-950 font-medium text-sm" htmlFor="imageURL">
          Link do zdjęcia
        </label>
        <input
          className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
          type="text"
          name="imageURL"
          id="imageURL"
          placeholder="https://unsplash.com/..."
          required
        />
      </div>
      <AddProdutButton />
    </form>
  );
}
