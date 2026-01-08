import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <Image
        src="/kraft-box.jpg"
        alt="4ARTH Kraft Box"
        width={800}
        height={600}
      />
    </main>
  );
}
