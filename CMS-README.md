# Angela Lamprianidou - CMS System

## 🎯 Overview

This is a comprehensive Content Management System (CMS) designed specifically for Angela Lamprianidou's website. It provides an easy-to-use interface for managing all website content without requiring technical knowledge.

## 🔐 Access

**URL:** `/admin`  
**Password:** `angela2024`

## 📋 Available Management Sections

### 1. Gallery Management (`/admin/gallery`)
- **Purpose:** Manage the gallery images displayed on the Gallery page
- **Features:**
  - Add new images with titles and descriptions
  - Edit existing image information
  - Reorder images (drag up/down)
  - Delete images
  - Preview images before saving
- **What Angela can change:**
  - Add new performance photos
  - Update image titles and descriptions
  - Change the order of images
  - Remove outdated images

### 2. Performance Pages (`/admin/performances`)
- **Purpose:** Manage all performance page content
- **Features:**
  - Add new performance pages
  - Edit performance descriptions
  - Manage performance images
  - Add press reviews
  - Link to PDF documents
  - Toggle active/inactive status
- **What Angela can change:**
  - Update performance descriptions
  - Add new performance images
  - Add press reviews and links
  - Create new performance pages
  - Update PDF links

### 3. Contact & Bio (`/admin/contact-bio`)
- **Purpose:** Manage personal information and biography
- **Features:**
  - Update contact information (phone, email, address)
  - Edit biography text
  - Manage education and achievements
  - Update current work information
  - Preview changes before saving
- **What Angela can change:**
  - Update contact details
  - Modify biography text
  - Add new achievements
  - Update current work information

### 4. Press & Reviews (`/admin/press`)
- **Purpose:** Manage press coverage and reviews
- **Features:**
  - Add new press items (reviews, interviews, articles)
  - Filter by type (review, interview, article, coverage)
  - Manage multiple languages
  - Add links to original articles
  - Toggle active/inactive status
- **What Angela can change:**
  - Add new press coverage
  - Update existing press items
  - Organize by type and language
  - Add links to full articles

### 5. Background Images (`/admin/backgrounds`)
- **Purpose:** Manage website background images
- **Features:**
  - Add new background images
  - Assign images to specific pages
  - Preview background images
  - Manage image descriptions
  - Toggle active/inactive status
- **What Angela can change:**
  - Upload new background images
  - Change which pages use which backgrounds
  - Update image descriptions

### 6. Site Settings (`/admin/settings`)
- **Purpose:** Manage global website settings
- **Features:**
  - Update site title and description
  - Manage social media links
  - Control navigation visibility
  - Set maintenance mode
  - Add analytics code
- **What Angela can change:**
  - Update site information
  - Add social media links
  - Show/hide navigation items
  - Enable maintenance mode if needed

## 🚀 Key Features

### User-Friendly Interface
- Clean, intuitive design matching the website aesthetic
- Easy-to-use forms with clear labels
- Preview functionality for most content
- Responsive design works on all devices

### Content Management
- **Gallery Images:** Easy drag-and-drop reordering
- **Performance Pages:** Rich content editing with image management
- **Contact Info:** Simple form-based updates
- **Press Items:** Organized by type and language
- **Backgrounds:** Visual management with page assignments
- **Settings:** Comprehensive site configuration

### Security
- Password-protected access
- Form validation
- Safe data handling

## 📝 How to Use

### Getting Started
1. Navigate to `/admin`
2. Enter password: `angela2024`
3. Choose the section you want to manage
4. Make your changes
5. Click "Save" to apply changes

### Adding New Content
1. Click "Add New [Item]" button
2. Fill in the required information
3. Add optional details (images, links, etc.)
4. Click "Save" to add the item

### Editing Existing Content
1. Find the item you want to edit
2. Click the "Edit" button
3. Make your changes
4. Click "Save" to update

### Deleting Content
1. Find the item you want to delete
2. Click the "Delete" button
3. Confirm the deletion

## 🎨 Content Guidelines

### Images
- **Gallery Images:** Use high-quality performance photos
- **Background Images:** Use images that work well as backgrounds
- **Performance Images:** Use images that represent the specific performance

### Text Content
- **Performance Descriptions:** Write engaging descriptions that capture the essence of each piece
- **Biography:** Keep personal information current and accurate
- **Press Items:** Include relevant quotes or summaries

### Organization
- **Gallery:** Order images to tell a story or show progression
- **Performances:** Keep active performances at the top
- **Press:** Organize by date or importance

## 🔧 Technical Notes

### File Structure
```
/app/admin/
├── page.tsx                 # Main admin dashboard
├── gallery/page.tsx         # Gallery management
├── performances/page.tsx    # Performance management
├── contact-bio/page.tsx     # Contact & bio management
├── press/page.tsx          # Press management
├── backgrounds/page.tsx    # Background management
└── settings/page.tsx       # Site settings
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