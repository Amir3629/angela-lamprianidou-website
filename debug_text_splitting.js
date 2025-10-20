// Debug script to find text splitting issues in MediaGallerySeparated component
console.log('=== DEBUGGING TEXT SPLITTING ===');

// Simulate the component logic
const title = 'Are you the person you want to be';
const description = `This 10-day workshop culminates in a live performance, exploring personal transformation through movement and mantra. Each participant selects a personal mantra — a phrase or set of words that reflect the person they wish to become.
Each word in the mantra is embodied through movement. We deconstruct syntax, isolate language, and recompose it through choreographic sequences. The process transforms language into living rhythm, with each movement carrying the weight, texture, and quality of intention.
Through repetition, rhythm, and variation, we search for the elixir — the meeting point between life and art, between who we are and who we aspire to be.
The workshop will be held at Boouze, Athens, concluding in a shared public performance where these personal mantras are brought to life.`;

const additionalInfo = `This workshop is part of Angela's ongoing research into the relationship between language, movement, and personal transformation. It combines her expertise in choreography, body work, and energy healing to create a unique space for participants to explore their authentic selves through movement and mantra.`;

// Check if title is a string or JSX element containing "Biography"
const isBioPage = typeof title === 'string' ? title === 'Angela Lamprianidou' : 
                 (title && typeof title === 'object' && 'props' in title && 
                  title.props && typeof title.props.children === 'object' && 
                  title.props.children.some && title.props.children.some((child) => 
                    child && typeof child === 'object' && child.props && 
                    child.props.children && typeof child.props.children === 'object' && 'length' in child.props.children &&
                    Array.isArray(child.props.children) && child.props.children.some((grandchild) => 
                      grandchild && typeof grandchild === 'object' && grandchild.props && 
                      grandchild.props.children === 'Biography'
                    )
                  ));

console.log('Title:', title);
console.log('Is Bio Page:', isBioPage);

// Function to split text into first part and rest
const splitText = (text) => {
  if (!text) return { firstPart: '', restPart: '' };
  
  const charLimit = title === 'Jaw Release Workshop' ? 1200 : (isBioPage ? 2000 : 800);
  
  console.log('Character limit being used:', charLimit);
  console.log('Description length:', text.length);
  
  // If text is less than the limit, don't split - put everything in first part
  if (text.length <= charLimit) {
    console.log('Text is under limit, no splitting needed');
    return { firstPart: text, restPart: '' };
  }
  
  console.log('Text is over limit, splitting at:', charLimit);
  
  // Only split if text is longer than the limit
  const firstPart = text.substring(0, charLimit);
  const lastSpaceIndex = firstPart.lastIndexOf(' ');
  const shortText = lastSpaceIndex > 0 ? firstPart.substring(0, lastSpaceIndex) : firstPart;
  const restText = text.substring(shortText.length).trim();
  
  console.log('First part length:', shortText.length);
  console.log('Rest part length:', restText.length);
  console.log('First part ends with:', shortText.substring(shortText.length - 50));
  console.log('Rest part starts with:', restText.substring(0, 50));
  
  return { firstPart: shortText, restPart: restText };
};

const { firstPart, restPart } = splitText(description || '');

console.log('=== RESULTS ===');
console.log('First part:', firstPart);
console.log('Rest part:', restPart);
console.log('Additional info:', additionalInfo);

// Check what triggers the second section
const videos = []; // No videos in this case
const showSecondSection = videos.length > 0 || (restPart && description && description.length > 1100) || (additionalInfo && description && description.length > 950);

console.log('=== SECOND SECTION TRIGGERS ===');
console.log('Has videos:', videos.length > 0);
console.log('Has rest part and description > 1100:', restPart && description && description.length > 1100);
console.log('Has additional info and description > 950:', additionalInfo && description && description.length > 950);
console.log('Will show second section:', showSecondSection);
