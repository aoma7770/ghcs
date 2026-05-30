import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0FAFA] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-[#3ECFCF] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
          404
        </div>
        <h1 className="text-3xl font-bold text-[#1A2E3B] mb-3">Page Not Found</h1>
        <p className="text-[#1A2E3B]/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
