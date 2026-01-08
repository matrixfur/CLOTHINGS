import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24">
      <Image
        src="/box-image.jpg"
        alt="Kraft Box"
        width={800}
        height={800}
        priority
      />
    </main>
  );
}