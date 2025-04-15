import Image from 'next/image';
import SignupButton from '../buttons/signup-button';
import Link from 'next/link';

export default function SignupForm() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 my-16 lg:my-32">
      <form className="max-w-lg mx-auto border border-gray-200 p-8 rounded-lg shadow-lg shadow-gray-200/50">
        <div className="mb-4 bg-green-200 p-3 w-max mx-auto rounded-full">
          <Image
            className="size-12"
            src="icon.svg"
            alt="logo"
            width={0}
            height={0}
            unoptimized={true}
          />
        </div>
        <h1 className="text-3xl font-medium text-gray-950 mb-8 text-center">
          Rejestracja 🔐
        </h1>
        <div className="flex flex-col gap-1 mb-4">
          <label
            className="text-gray-950 font-medium text-sm"
            htmlFor="username"
          >
            Nazwa użytkownika
          </label>
          <input
            className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
            type="text"
            name="username"
            id="username"
            placeholder="John Smith"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-gray-950 font-medium text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
            type="text"
            name="email"
            id="email"
            placeholder="adres@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <label
            className="text-gray-950 font-medium text-sm"
            htmlFor="password"
          >
            Hasło
          </label>
          <input
            className="text-base border border-gray-200 py-2 px-4 rounded-lg text-gray-950 placeholder:text-gray-500 shadow-lg shadow-gray-200/50"
            type="password"
            name="password"
            id="password"
            placeholder="Hasło"
            required
          />
        </div>
        <SignupButton />
        <p className="text-sm text-center text-gray-700">
          Masz już konto?{' '}
          <Link className="text-green-700 underline" href="/login">
            Zaloguj się
          </Link>
        </p>
      </form>
    </section>
  );
}
