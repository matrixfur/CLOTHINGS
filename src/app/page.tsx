import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl">
        <Image
          src="/4ARTH-KRAFT BOX_page-0001.jpg"
          alt="Kraft Box"
          width={800}
          height={800}
          priority
          className="h-auto w-full rounded-lg object-contain shadow-2xl"
        />
      </div>
    </main>
  );
}
