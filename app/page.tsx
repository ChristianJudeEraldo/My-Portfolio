import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      <p className="text-foreground/60">Testing my Next.js 15 + Tailwind v4 Portfolio.</p>
    </main>
  );
}