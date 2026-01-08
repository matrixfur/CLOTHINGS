import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/BOX_page-0001.jpg"
        alt="Kraft Box"
        width={800}
        height={800}
        priority
      />
    </main>
  );
}
