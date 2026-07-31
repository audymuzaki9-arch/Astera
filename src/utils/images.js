const VIDEO_EXT = ['mp4', 'mov', 'webm', 'ogg', 'm4v'];

function getType(src) {
  const ext = src.split('.').pop().toLowerCase();
  return VIDEO_EXT.includes(ext) ? 'video' : 'image';
}

export function getJourneyMedia(journey) {
  const list = [];

  const push = (src, alt) => {
    if (src) list.push({ src, alt, type: getType(src) });
  };

  push(journey.image, journey.title);
  push(journey.heroImage, journey.title);

  if (Array.isArray(journey.storyImages)) {
    journey.storyImages.forEach((src, i) => {
      push(src, journey.storyCaptions?.[i] || journey.title);
    });
  }

  push(journey.asideImage, journey.title);
  push(journey.pullQuote?.image, journey.title);

  if (Array.isArray(journey.videos)) {
    journey.videos.forEach((src) => {
      push(src, journey.title);
    });
  }

  if (Array.isArray(journey.gallery)) {
    journey.gallery.forEach((src) => {
      push(src, journey.title);
    });
  }

  const seen = new Set();
  return list.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}
