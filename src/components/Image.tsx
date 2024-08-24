import { useRef, useState, ChangeEvent } from "react";

const Image = () => {
    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]); // Set the File object directly
        }
    };

    // Render the image if imageFile is set
    const renderImage = () => {
        if (imageFile) {
            return (
                <figure>
                    <img src={URL.createObjectURL(imageFile)} alt="Uploaded Preview" className="object-fit " />
                </figure>
            );
        }
        return null; // Return null if there's no imageFile
    };

    return (
        <div>
        <div
            onClick={() => {
                uploadInputRef.current && uploadInputRef.current.click();
            }}
            className="bg-[#9e9b9b] min-h-[20rem] max-h-[100vh] md:h-auto md:w-[600px] cursor-pointer flex items-center justify-center mb-10 rounded-md  text-black font-bold"
        >
            {imageFile ? renderImage() : <p className="text-center">Upload Image</p>}
            <input
                onChange={handleChangeInput}
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                hidden
            />
        
        </div>
        <div>
            {/* it is enabled only whrn image in uploaded and present */}
            <button  disabled={!imageFile} className="bg-blue-800 px-5 py-2 font-normal rounded-md  w-full" >Download Image</button>
        </div>
        </div>
    );
};

export default Image;
