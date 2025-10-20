// Debug script to check actual component behavior
console.log('=== CHECKING ACTUAL COMPONENT BEHAVIOR ===');

// Check if there are videos in the media array
const areYouThePersonMedia = [
  { src: "/_DSC9563f.jpg", type: "image" },
  { src: "/_DSC9668R.jpg", type: "image" },
  { src: "/_DSC9677DD.jpg", type: "image" },
  { src: "/_DSC9677Y.jpg", type: "image" },
  { src: "https://vimeo.com/manage/videos/199875881", type: "video" }
];

const videos = areYouThePersonMedia.filter(item => item.type === 'video');
console.log('Videos found:', videos.length);
console.log('Video sources:', videos.map(v => v.src));

const description = `This 10-day workshop culminates in a live performance, exploring personal transformation through movement and mantra. Each participant selects a personal mantra — a phrase or set of words that reflect the person they wish to become.
Each word in the mantra is embodied through movement. We deconstruct syntax, isolate language, and recompose it through choreographic sequences. The process transforms language into living rhythm, with each movement carrying the weight, texture, and quality of intention.
Through repetition, rhythm, and variation, we search for the elixir — the meeting point between life and art, between who we are and who we aspire to be.
The workshop will be held at Boouze, Athens, concluding in a shared public performance where these personal mantras are brought to life.`;

const additionalInfo = `This workshop is part of Angela's ongoing research into the relationship between language, movement, and personal transformation. It combines her expertise in choreography, body work, and energy healing to create a unique space for participants to explore their authentic selves through movement and mantra.`;

console.log('Description length:', description.length);
console.log('Additional info length:', additionalInfo.length);

// Check the actual conditions from the component
const hasVideos = videos.length > 0;
const hasRestPart = false; // No rest part since description is under 800 chars
const hasAdditionalInfo = additionalInfo && additionalInfo.length > 0;

console.log('=== SECOND SECTION CONDITIONS ===');
console.log('Has videos:', hasVideos);
console.log('Has rest part:', hasRestPart);
console.log('Has additional info:', hasAdditionalInfo);

// The actual condition from the component
const showSecondSection = hasVideos || (hasRestPart && description && description.length > 1100) || (hasAdditionalInfo && description && description.length > 950);

console.log('Will show second section:', showSecondSection);
console.log('Reason: Videos present =', hasVideos);

if (showSecondSection) {
  console.log('=== SECOND SECTION CONTENT ===');
  console.log('Rest part content:', hasRestPart ? 'YES' : 'NO');
  console.log('Additional info content:', hasAdditionalInfo ? 'YES' : 'NO');
  console.log('Additional info text:', additionalInfo);
}
