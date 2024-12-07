import React from "react";
import fileImgIcon from "../../assets/images/file-img-icon.png";
import fileErrorIcon from "../../assets/images/file-error-icon.svg";


const FileUpload = ({ fileLabel = null, fileTypes, filesProps }) => {
  const { fileUpload, setFileUpload } = filesProps;

  const onFileChange = (e) => {
    const files = e.target.files[0];

    if (fileTypes.includes(files.type)) {
      setFileUpload({
        ...fileUpload,
        file_name: files.name,
        file_size: files.size,
        file_uploaded: true,
      });
    } else {
      setFileUpload({
        ...fileUpload,
        file_name: "",
        file_size: "",
        file_uploaded: false,
        file_uploaded_error: true,
      });
    }
  };

  const removeFile = () => {
    setFileUpload({
      ...fileUpload,
      file_name: "",
      file_size: "",
      file_uploaded: false,
      file_uploaded_error: false,
    });
  };

  return (
    <div className="file-main-section">
      <label className="file-label">{fileLabel}</label>
      {fileUpload.file_uploaded ? (
        <div className="file-uploaded-section">
          <div className="file-upload-inner-sec">
            <img src={fileImgIcon} className="file-img-icon" />
            <div>
              <span className="file-name">{fileUpload.file_name}</span>
              <span className="file-size">{fileUpload.file_size}</span>
            </div>
          </div>

          <div className="remove-file-btn" onClick={removeFile}></div>
        </div>
      ) : fileUpload.file_uploaded_error ? (
        <div className="file-uploaded-section file-upload-error">
          <div className="file-upload-inner-sec">
            <img src={fileErrorIcon} className="file-error-icon" />
            <span>Upload Failed</span>
          </div>

          <div className="remove-file-btn" onClick={removeFile}></div>
        </div>
      ) : (
        <div className="file-section">
          <input
            type="file"
            className="file-div"
            onChange={onFileChange}
            onDrop={onFileChange}
          />
          <span className="file-txt1">Drag & Drop or Upload image</span>
          <span className="file-txt2">
            (max file size 20mb, format jpeg, png, jpg)
          </span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
