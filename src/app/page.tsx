
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg border-[3px] border-black bg-white p-2 shadow-none overflow-hidden">
        <Image
          src="https://picsum.photos/seed/image/400/400"
          alt="Placeholder image"
          width={400}
          height={400}
          className="object-contain w-full h-full"
          data-ai-hint="placeholder image"
        />
      </div>
    </main>
  );
}
