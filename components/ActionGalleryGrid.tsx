import ActionGalleryCard from './ActionGalleryCard';

interface ActionGalleryGridProps {
  items: Array<{
    title: string;
    date?: string;
    image: string;
    alt: string;
    href?: string;
    onClick?: () => void;
    tags?: string[];
    height?: 'short' | 'medium' | 'tall';
  }>;
}

export default function ActionGalleryGrid({ items }: ActionGalleryGridProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
      {items.map((item, index) => (
        <div key={index} className="break-inside-avoid mb-3">
          <ActionGalleryCard 
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
  );
}