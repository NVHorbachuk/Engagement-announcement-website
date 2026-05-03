export default function EngagementHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Фон - тут буде твоє головне фото */}
      <div className="absolute inset-0 bg-[url('/hero-photo.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" /> {/* Затемнення для читабельності */}
      </div>

      <div className="relative text-center text-white px-4">
        <span className="text-sm uppercase tracking-[0.5em] mb-4 block animate-fade-in">
          We're Engaged!
        </span>
        <h1 className="text-6xl md:text-8xl font-serif mb-6 italic">
          Nazarii & Tetiana
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase">
          February 14, 2025
        </p>
      </div>
    </section>
  );
}