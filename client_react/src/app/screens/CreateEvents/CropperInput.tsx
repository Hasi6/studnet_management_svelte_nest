import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

interface propTypes {
  imagePreview: string;
  setImage: Function;
}

class CropperInput extends Component<propTypes> {
  cropper: any = createRef();

  public cropImage = () => {
    const { setImage } = this.props;
    if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
      return;
    }

    this.cropper.current.getCroppedCanvas().toBlob((blob: any) => {
      setImage(blob);
    }, "image/jpeg");
  };

  render() {
    return (
      <Cropper
        ref={this.cropper}
        src={this.props.imagePreview}
        style={{ height: 200, width: 200 }}
        preview="#image"
        aspectRatio={16 / 9}
        viewMode={1}
        dragMode="move"
        guides={false}
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage}
      />
    );
  }
}

export default CropperInput;
