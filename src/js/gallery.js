/**
 * Gallery Module - Auto-loads images from src/assets/photos/
 * Handles dynamic image loading using Vite's import.meta.glob
 */

const Gallery = (() => {
  // Initialize gallery when DOM is ready
  const init = () => {
    const galleryTrack = document.getElementById("gallery-track");
    
    if (!galleryTrack) {
      console.warn("Gallery track element not found");
      return;
    }

    // Use import.meta.glob with relative path pattern
    // The path is relative to the project root (where vite.config.js is)
    const images = import.meta.glob(
      "../assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
      { 
        eager: true,
        import: 'default'
      }
    );

    // Get array of image URLs
    const imageUrls = Object.values(images);

    // Safety check: only proceed if images exist
    if (imageUrls.length === 0) {
      console.info("No images found in src/assets/photos/");
      return;
    }

    // Clear any existing content first
    galleryTrack.innerHTML = '';

    // Create gallery items for each image
    imageUrls.forEach((imageUrl) => {
      if (!imageUrl) return; // Skip invalid entries

      const item = document.createElement("div");
      item.classList.add("gallery__item");

      const img = document.createElement("img");
      img.src = imageUrl;
      img.loading = "lazy"; // Improve performance
      img.alt = "Gallery image";

      item.appendChild(img);
      galleryTrack.appendChild(item);
    });

    console.log(`Gallery loaded with ${imageUrls.length} images`);
  };

  // Public API
  return {
    init
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Gallery.init);
} else {
  Gallery.init();
}