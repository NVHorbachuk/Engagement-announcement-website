import EngagementHero from '@/imports/EngagementHero'
import TheMoment from '@/imports/TheMoment'
import MeetTheCouple from '@/imports/MeetTheCouple'
import PhotoAlbum from '@/imports/PhotoAlbum'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <EngagementHero />
      <TheMoment />
      <MeetTheCouple />
      <PhotoAlbum />

      <footer className="py-16 bg-white border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
          <p
            className="text-3xl md:text-4xl mb-3"
            style={{
              fontFamily: 'serif',
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--engagement-dark)'
            }}
          >
            Nazarii & Tetiana
          </p>
          <p
            className="text-xs tracking-[0.3em] mb-8 uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Engaged February 14, 2025
          </p>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{
              fontWeight: 'var(--font-weight-light)',
              color: 'var(--muted-foreground)'
            }}
          >
            Thank you for celebrating this special moment with us.<br />
            We're so grateful to share our joy with those we love.
          </p>
        </div>
      </footer>
    </div>
  );
}