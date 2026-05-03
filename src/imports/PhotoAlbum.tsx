// В середині PhotoAlbum.tsx
const photos = [
  { url: '/gallery-1.jpg', alt: 'Ми у парку' },
  { url: '/gallery-2.jpg', alt: 'Момент пропозиції' },
  { url: '/gallery-3.jpg', alt: 'Наші каблучки' }
];

export default function PhotoAlbum() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <img 
              key={index}
              src={photo.url} 
              alt={photo.alt}
              className="w-full rounded-lg shadow-sm hover:scale-[1.02] transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
}