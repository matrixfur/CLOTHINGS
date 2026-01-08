
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg border-[3px] border-black bg-white p-2 shadow-none overflow-hidden">
        <Image
          src="https://picsum.photos/seed/1/800/600"
          alt="Placeholder image"
          width={800}
          height={600}
          className="object-contain w-full h-full"
          data-ai-hint="placeholder image"
        />
      </div>
    </main>
  );
}
