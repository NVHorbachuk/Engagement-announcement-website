const photos = [1, 2, 3, 4, 5, 6]; 

export default function PhotoAlbum() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm uppercase tracking-[0.3em] text-gray-400 mb-12">
          Gallery
        </h3>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((id) => (
            <div key={id} className="relative group overflow-hidden bg-gray-100">
              <img 
                src={`/gallery-${id}.jpg`} 
                alt="Moment" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}