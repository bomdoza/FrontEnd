
const ImagesSection = ({ imageUrls }) => {

  return (       
        <div className="container mx-auto my-8">
            <div className="flex overflow-auto justify-center">
                <div className="flex flex-row ">
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Image ${index + 1}`} className="rounded-lg w-96 h-64 object-cover mx-3" />
                    ))}
                </div>
            </div>
        </div>
  );
};

export default ImagesSection;
