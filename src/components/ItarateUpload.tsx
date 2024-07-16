import React, { useState, ChangeEvent, FormEvent } from "react";

const IterateUpload: React.FC = () => {
    const [singleFile, setSingleFile] = useState<string[]>([]);

    const uploadSingleFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray: string[] = Array.from(files).map((file) => URL.createObjectURL(file));
            setSingleFile((prevFiles) => [...prevFiles, ...fileArray]);
        }
    };

    const uploadFiles = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(singleFile);
    };

    const removeImage = (index: number) => {
        setSingleFile((prevFiles) =>
            prevFiles.filter((_, fileIndex) => fileIndex !== index)
        );
    };

    return (
        <form onSubmit={uploadFiles}>
            <div className="container">
                <h1 className="mb-3">Add Image one by one</h1>
                <div className="form-group multi-preview">
                    <div className="row">
                        {singleFile.length !== 0 &&
                            singleFile.map((url, index) => (
                                <div key={index} className="col-md-2">
                                    <div className="img-block bg-gray">
                                        <img className="img-fluid2" src={url} alt="..." />
                                        <span
                                            className="remove_img"
                                            onClick={() => removeImage(index)}
                                        >
                                            X
                                        </span>
                                    </div>
                                </div>
                            ))}
                        {singleFile.length < 4 && (
                            <div className="col-md-2">
                                <div className="form-group">
                                    <div className="upload-btn-wrapper">
                                        <button className="image-btn">+</button>
                                        <input
                                            type="file"
                                            name="myfile"
                                            multiple
                                            onChange={uploadSingleFiles}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <button type="submit" className="btn btn-danger btn-block">
                    Upload
                </button>
            </div>
        </form>
    );
};

export default IterateUpload;
