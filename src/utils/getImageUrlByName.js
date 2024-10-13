
export const getImageUrl = (imageName) => {
  const images = import.meta.glob('@/assets/*');
  const imagePath = `/src/assets/${imageName}`;

  if (images[imagePath]) {
    return images[imagePath]().then((module) => module.default);
  } else {
    console.error(`Image ${imageName} not found.`);
    return null;
  }
};
