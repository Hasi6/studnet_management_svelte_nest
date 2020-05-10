import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

interface propTypes {
  imagePreview: string;
}

class CropperInput extends Component<propTypes> {
  cropper: any = createRef();

  render() {
    return (
      <Cropper
        ref={this.cropper}
        src={this.props.imagePreview}
        style={{ height: 200, width: 200 }}
        preview=".img-preview"
        aspectRatio={16 / 9}
        viewMode={1}
        dragMode="move"
        guides={false}
        scalable={true}
        crop={this._crop.bind(this)}
      />
    );
  }
}

export default CropperInput;
