
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Infovelvora LLC</title>
        <meta name="description" content="Infovelvora LLC - Modern Business Solutions" />
      </Head>
      <main className="p-10 text-center">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Infovelvora LLC</h1>
        <p className="mt-5 text-lg text-gray-700">Your trusted partner for global e-commerce solutions.</p>
      </main>
    </div>
  );
}
    