window.addEventListener("DOMContentLoaded", () => {

  const galleryTrack = document.getElementById("gallery-track");

  if (!galleryTrack) {
    console.error("Gallery track not found");
    return;
  }

  const images = import.meta.glob(
    "../assets/photos/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG}",
    {
      eager: true,
    }
  );

  console.log("Loaded Images:", images);

  Object.values(images).forEach((image) => {

    const item = document.createElement("div");

    item.classList.add("gallery__item");

    const img = document.createElement("img");

    img.src = image.default;

    item.appendChild(img);

    galleryTrack.appendChild(item);

  });

});