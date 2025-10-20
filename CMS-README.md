# Angela Lamprianidou - CMS System

## 🎯 Overview

This is a simplified Content Management System (CMS) designed specifically for Angela Lamprianidou's website. It provides an easy-to-use interface for managing media content (images and videos) without requiring technical knowledge.

## 🔐 Access

**URL:** `/admin`  
**Password:** `angela2024`

## 📋 Available Management Sections

### 1. Page Media Management (`/admin/edit/[pageId]`)
- **Purpose:** Manage images and videos for specific pages
- **Features:**
  - Add new images and videos via URL
  - Edit media titles and descriptions
  - Remove media items
  - Preview media before saving
  - Support for both image and video content
- **What Angela can change:**
  - Add new performance photos and videos
  - Update media titles and descriptions
  - Remove outdated media
  - Organize media for each page

### 2. News & Dates Management (`/admin/edit/news-dates`)
- **Purpose:** Manage news items, events, and announcements
- **Features:**
  - Add new news items with titles, dates, and locations
  - Edit detailed descriptions and information
  - Add links to external pages
  - Toggle active/inactive status
  - Preview news items before saving
- **What Angela can change:**
  - Add upcoming performances and workshops
  - Update event details and dates
  - Add registration links
  - Organize events by date
  - Show/hide specific news items

## 🚀 Key Features

### User-Friendly Interface
- Clean, intuitive design matching the website aesthetic
- Easy-to-use forms with clear labels
- Preview functionality for media content
- Responsive design works on all devices

### Media Management
- **Image Support:** Add images via URL
- **Video Support:** Add videos via URL (YouTube, Vimeo, etc.)
- **Media Metadata:** Set titles and alt text for accessibility
- **Preview Mode:** See how media will appear before saving

### Security
- Password-protected access
- Form validation
- Safe data handling

## 📝 How to Use

### Getting Started
1. Navigate to `/admin`
2. Enter password: `angela2024`
3. Select a page to manage media for
4. Add or edit media items
5. Click "Save Changes" to apply

### Adding New Media
1. Click "Add Media" button
2. Enter the image or video URL
3. Select the media type (Image or Video)
4. Add a title and alt text
5. Click "Save Changes"

### Editing Existing Media
1. Find the media item you want to edit
2. Update the URL, title, or alt text
3. Click "Save Changes"

### Removing Media
1. Find the media item you want to remove
2. Click the "Remove" button
3. Click "Save Changes"

### Managing News & Dates
1. Go to the News & Dates page in the admin panel
2. Click "Add News Item" to create a new event
3. Fill in the title, date, location, and descriptions
4. Add optional links for registration or more information
5. Toggle active/inactive status to show/hide items
6. Click "Save Changes" to apply updates

## 🎨 Content Guidelines

### Media URLs
- **Images:** Use direct image URLs (e.g., from your website, Google Drive, etc.)
- **Videos:** Use YouTube or Vimeo URLs for best compatibility
- **File Formats:** JPG, PNG for images; MP4, WebM for videos

### Media Organization
- **Titles:** Use descriptive titles for each media item
- **Alt Text:** Provide meaningful descriptions for accessibility
- **Order:** Arrange media to tell your story effectively

## 🔧 Technical Notes

### File Structure
```
/app/admin/
├── page.tsx                 # Main admin dashboard
└── edit/[pageId]/page.tsx   # Media management for specific pages
```

### Data Storage
- Currently uses mock data (in-memory)
- In production, would connect to a database
- All changes are temporary until backend integration

### Security
- Password protection on admin routes
- Form validation and sanitization
- Safe handling of user input

## 🚀 Future Enhancements

### Planned Features
- **File Upload:** Direct image upload instead of URL input
- **Database Integration:** Persistent data storage
- **Media Optimization:** Automatic image compression and optimization
- **User Management:** Multiple admin users
- **Backup System:** Automatic content backups
- **Version History:** Track content changes
- **SEO Management:** Meta tags and descriptions
- **Email Integration:** Contact form management

### Integration Options
- **Headless CMS:** Integration with Strapi, Contentful, or Sanity
- **Database:** PostgreSQL or MongoDB
- **File Storage:** AWS S3 or Cloudinary
- **Authentication:** NextAuth.js or Auth0

## 📞 Support

If you need help with the CMS system:
1. Check this README for guidance
2. Contact the developer for technical issues
3. Test changes on a staging environment first

## 🎯 Quick Reference

### Most Common Tasks
1. **Adding Gallery Images:** Admin → Gallery → Add New Image
2. **Updating Performance Info:** Admin → Performances → Edit
3. **Changing Contact Info:** Admin → Contact & Bio → Contact Information
4. **Adding Press Coverage:** Admin → Press → Add New Press Item
5. **Changing Backgrounds:** Admin → Backgrounds → Edit Background

### Important Notes
- Always preview changes before saving
- Keep backup copies of important content
- Test changes on the live site after saving
- Contact information changes affect multiple pages

---

**Last Updated:** September 2024  
**Version:** 1.0.0  
**Developer:** AI Assistant