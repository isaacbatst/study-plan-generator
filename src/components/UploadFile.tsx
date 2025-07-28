"use client";

import { useMemo } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

type UploadFileProps = {
  onFileAccepted: (file: File) => void;
  selectedFile: File | null;
};

export default function UploadFile({ onFileAccepted, selectedFile }: UploadFileProps) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ 
    accept: { "application/pdf": [] }, 
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0]);
      }
    }
  });
  
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  ) as DropzoneRootProps;

  return (
    <section className="container">
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {!selectedFile ? (
            <p>
              Arraste o PDF do Plano de Ensino aqui, ou clique para selecionar
            </p>
          ) : (
            <ul>
              <li>{selectedFile.name}</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

