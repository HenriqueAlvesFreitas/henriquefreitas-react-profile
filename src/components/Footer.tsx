import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f0f1e] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            © 2025 Henrique Freitas. 
          </p>
          <p className="text-gray-500">
            Senior Full Stack Software Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
