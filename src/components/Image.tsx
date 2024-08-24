
import { useRef, useState, ChangeEvent,useContext,useEffect } from "react";
import '../styles/instagram.css'
import { FilterContext } from "../App";
const Image: React.FC = () => {
    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const {filterClass,customFilter,tabFilter} = useContext(FilterContext)
    const [filterStyle, setFilterStyle] = useState<string>("");
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]); // Set the File object directly
        }
    };
    useEffect(() => {
      // Construct the filter string based on customFilter
      const newFilterStyle = `contrast(${customFilter.contrast}%) brightness(${customFilter.brightness}%) saturate(${customFilter.saturate}%) sepia(${customFilter.sepia}%) grayscale(${customFilter.gray}%)`;
      setFilterStyle(tabFilter === "instaFilter" ? filterClass : newFilterStyle);
    }, [customFilter, filterClass, tabFilter]);

  const handleDownload = () => {
    if (imageFile) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(imageFile);
      img.style.filter = filterStyle;

      // Create a canvas to get the data URL of the image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "filtered-image.png";
          link.click();
        }
      };
    }
  };
    // Render the image if imageFile is set
    const renderImage = () => {
        if (imageFile) {
            return (
                <figure className="flex items-center justify-center w-full h-full">
                    <img
                        src={URL.createObjectURL(imageFile)}
                        alt="Uploaded Preview"
                        className={` ${filterClass} max-w-full max-h-full  object-contain`}
                        style={{filter:filterStyle}}
                    />
                </figure>
            );
        }
        return <p className="text-center text-gray-700">Upload Image</p>; // Default text
    };

    return (
        <div className="relative">
            <div
                onClick={() => {
                    uploadInputRef.current && uploadInputRef.current.click();
                }}
                className="bg-[#9e9b9b] h-[20rem] w-[20rem] md:w-[600px] cursor-pointer flex items-center justify-center mb-10 rounded-md text-black font-bold overflow-hidden"
            >
                {renderImage()}
                <input
                    onChange={handleChangeInput}
                    ref={uploadInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                />
            </div>
            <div className="flex gap-2 flex-col" >
                {/* Enabled only when image is uploaded and present */}
                <button disabled={!imageFile} onClick={handleDownload} className="bg-blue-800 cursor-pointer hover:bg-blue-900 px-5 py-2 font-normal rounded-md w-full">
          Download Image
        </button>
        <button disabled={!imageFile}  onClick={()=>{
            setImageFile(null)
        }} className="bg-red-800 hover:bg-red-900 cursor-pointer px-5 py-2 font-normal rounded-md w-full">
          Discard Image
        </button>
            </div>
        </div>
    );
};

export default Image;