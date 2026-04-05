// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Insert a lightweight SVG, CSS spinner, or a simple "Loading Log Pose..." text here */}
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}