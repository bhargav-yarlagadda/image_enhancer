
import { useRef, useState, ChangeEvent,useContext } from "react";
import '../styles/instagram.css'
import { FilterContext } from "../App";
const Image: React.FC = () => {
    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const {filterClass} = useContext(FilterContext)
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]); // Set the File object directly
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
            <div>
                {/* Enabled only when image is uploaded and present */}
                <button disabled={!imageFile} className="bg-blue-800 px-5 py-2 font-normal rounded-md w-full">
                    Download Image
                </button>
            </div>
        </div>
    );
};

export default Image;