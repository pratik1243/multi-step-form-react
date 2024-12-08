import React from "react";
import fileImgIcon from "../../assets/images/file-img-icon.png";
import fileErrorIcon from "../../assets/images/file-error-icon.svg";
import { formatFileSize } from "../../assets/validation/onSubmitValidFunc";

const FileUpload = ({
  fileLabel = null,
  fileTypes,
  filesProps,
  onChange,
  onRemoveFiles,
}) => {
  const { fileUpload, setFileUpload } = filesProps;

  const onFileChange = (e) => {
    if (e.target.files.length !== 0) {
      let files = e.target.files[0];
      let bytesInMB = 1024 * 1024;
      let fileSize = 20 * bytesInMB;

      if (
        fileTypes.includes(files.type) &&
        (files.size < fileSize || files.size <= fileSize)
      ) {
        setFileUpload({
          ...fileUpload,
          file_name: files.name,
          file_size: formatFileSize(files.size),
          file_uploaded: true,
          file_uploaded_error: false,
        });
        onChange && onChange(files);
      } else {
        setFileUpload({
          ...fileUpload,
          file_name: "",
          file_size: "",
          file_uploaded: false,
          file_uploaded_error: true,
        });
      }
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
    onRemoveFiles && onRemoveFiles();
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
        <>
          <div className="file-uploaded-section file-upload-error">
            <div className="file-upload-inner-sec">
              <img src={fileErrorIcon} className="file-error-icon" />
              <span>Upload Failed</span>
            </div>

            <div className="remove-file-btn" onClick={removeFile}></div>
          </div>
          <span className="file-error-txt">
            Note:- File format should be image only and size should be less than
            20mb
          </span>
        </>
      ) : (
        <div className="file-section">
          <input
            type="file"
            className="file-div"
            onChange={onFileChange}
            onDrop={onFileChange}
          />
          <span className="file-txt1">
            Drag & Drop or{" "}
            <span style={{ color: "#2c7cff" }}>Upload image</span>
          </span>
          <span className="file-txt2">
            (max file size 20mb, format jpeg, png, jpg)
          </span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
