import GalleryCard from './GalleryCard';

interface GalleryItem {
  title: string;
  date?: string;
  image: string;
  alt: string;
  href: string;
  onClick?: () => void;
  tags?: string[];
  height?: 'short' | 'medium' | 'tall';
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
      <div 
        className="itemList"
        style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          boxSizing: 'border-box'
        }}
      >
        <div 
          id="masonry-container" 
          className="masonry clearfix"
          style={{
            paddingLeft: '15px',
            paddingRight: '15px',
            boxSizing: 'border-box'
          }}
        >
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <GalleryCard
              title={item.title}
              date={item.date}
              image={item.image}
              alt={item.alt}
              href={item.href}
              onClick={item.onClick}
              tags={item.tags}
              height={item.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}