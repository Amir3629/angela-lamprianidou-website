'use client';

import { useState, useEffect } from 'react';
import MediaGallerySeparated from './MediaGallerySeparated';
import Header from './Header';
import { getPageData, PageData } from '../lib/cms-data';

interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  title?: string;
  caption?: string;
  credit?: string;
}

interface DynamicPageProps {
  slug: string;
  fallbackTitle: string;
  fallbackDescription: string;
  fallbackAdditionalInfo: string;
  fallbackPhotographer: string;
  fallbackImageSize: 'small' | 'medium' | 'large' | 'xlarge';
  fallbackMediaItems: MediaItem[];
}

export default function DynamicPage({
  slug,
  fallbackTitle,
  fallbackDescription,
  fallbackAdditionalInfo,
  fallbackPhotographer,
  fallbackImageSize,
  fallbackMediaItems
}: DynamicPageProps) {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extract page ID from slug
    const pageId = slug.split('/').pop() || slug;
    
    // Try to load from CMS data
    const cmsData = getPageData(pageId);
    if (cmsData) {
      setPageData(cmsData);
    }
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  // Use CMS data if available, otherwise use fallback data
  const title = pageData?.title || fallbackTitle;
  const description = pageData?.description || fallbackDescription;
  const additionalInfo = pageData?.additionalInfo || fallbackAdditionalInfo;
  const photographer = pageData?.photographer || fallbackPhotographer;
  const imageSize = pageData?.imageSize || fallbackImageSize;
  const mediaItems = pageData?.mediaItems || fallbackMediaItems;

  return (
    <div className="min-h-screen bg-white text-black website-font white-bg font-variation-1 media-screen-small angela-typography">
      <Header />
      <MediaGallerySeparated
        mediaItems={mediaItems}
        title={title}
        description={description}
        additionalInfo={additionalInfo}
        photographer={photographer}
        imageSize={imageSize}
      />
    </div>
  );
}
