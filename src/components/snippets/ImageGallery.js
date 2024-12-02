// ImageGallery.js
const ImageGallery = ({ images }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Main image */}
        <div className="col-span-2 row-span-2">
          <img src={images[0]} alt="Main Hotel" className="w-full h-full object-cover rounded-lg" />
        </div>
  
        {/* Smaller images with fixed height */}
        {images.slice(1, 5).map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className="w-full h-full object-cover rounded-lg" />
        ))}
  
        {/* Overlay image */}
        <div className="relative">
          <img src={images[5]} alt="Image 5" className="w-full h-full object-cover rounded-lg" />
          <span className="absolute inset-0 bg-opacity-50 text-white flex items-center justify-center text-lg font-semibold">
            <div className="py-1 px-2 bg-red-700 opacity-60 rounded-xl text-[8px] md:text-lg">
              See all 15 images
            </div>
          </span>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  