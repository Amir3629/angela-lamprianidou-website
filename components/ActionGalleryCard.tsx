import Image from 'next/image';

interface ActionGalleryCardProps {
  title: string;
  date?: string;
  image: string;
  alt: string;
  href?: string;
  onClick?: () => void;
  tags?: string[];
  height?: 'short' | 'medium' | 'tall';
}

export default function ActionGalleryCard({ 
  title, 
  date, 
  image, 
  alt, 
  href, 
  onClick,
  tags = [],
  height = 'medium'
}: ActionGalleryCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const content = (
    <div className="block group">
      <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 w-full">
        {/* Image - Individual size based on original image */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={image}
            alt={alt}
            width={300}
            height={200}
            className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </div>
        
        {/* Content - Dynamic height based on text */}
        <div className="p-3">
          {/* Title Only */}
          <h3 className="website-title text-gray-900  transition-colors text-left leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );

  if (href && href !== "#") {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer" onClick={handleClick}>
          {content}
        </a>
      );
    } else {
      return (
        <a href={href} className="cursor-pointer" onClick={handleClick}>
          {content}
        </a>
      );
    }
  } else {
    return (
      <div className="cursor-pointer" onClick={handleClick}>
        {content}
      </div>
    );
  }
}