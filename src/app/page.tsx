"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Upload } from "lucide-react";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          accept="image/*"
        />
        {image ? (
          <div className="w-full h-auto max-w-sm rounded-lg border-[3px] border-black bg-white p-2 shadow-none overflow-hidden">
            <Image
              src={image}
              alt="Uploaded image"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full h-80 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-50">
            <p className="text-gray-500">No image selected</p>
          </div>
        )}
        <Button onClick={handleClick} className="mt-4">
          <Upload className="mr-2 h-4 w-4" />
          {image ? "Replace Image" : "Upload Image"}
        </Button>
      </div>
    </main>
  );
}
