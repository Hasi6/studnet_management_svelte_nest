/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useCallback, useEffect } from "react";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
  hasLengthLessThan
} from "revalidate";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import "./CreateEvents.scss";

import { reduxForm, Field } from "redux-form";
import TextInput from "../../components/forms/TextInput";
import { Button, Icon } from "@material-ui/core";
import DataTimeFiled from "../../components/forms/DataTimeFiled";
import { createEvents } from "../../redux/actions/events/events.actions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByPlaceId
} from "react-google-places-autocomplete";

interface propTypes {
  handleSubmit: Function;
  createEvents: Function;
}

const CreateEvents: FC<propTypes> = ({ handleSubmit, createEvents }) => {
  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  const [location, setLocation] = useState({});
  const [files, setFiles] = useState([{ preview: "false" }]);
  const [locationValue, setLocationValue] = useState({
    type: false,
    error: "Enter a valid Location",
    color: "red"
  });
  const onDrop = useCallback(
    acceptedFiles => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*"
  });

  const onSubmit = (e: any) => {
    if (!location) {
      setLocationValue({ ...locationValue, type: true });
    } else {
      setLocationValue({ ...locationValue, type: false });

      const data = { ...e, ...location };
      createEvents(data);
    }
  };

  return (
    <div className="createEvent">
      <h1>Create Events</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field component={TextInput} name="title" label="Title" type="text" />
        <Field
          component={TextInput}
          name="description"
          label="Description"
          multiline={true}
          rows={4}
          type="text"
        />
        {locationValue.type && (
          <p style={{ color: locationValue.color }}>{locationValue.error}</p>
        )}
        <GooglePlacesAutocomplete
          onSelect={async e => {
            let loc: any = { location: e.description };
            const geoMetry = await geocodeByPlaceId(e.place_id);
            loc = { ...loc, ...(await getLatLng(geoMetry[0])) };
            setLocation(loc);
          }}
        />
        <br />
        <br />

        <Field
          component={DataTimeFiled}
          name="dateTime"
          label="Date and Time"
        />
        <br />
        <br />

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <CloudUploadIcon color="secondary" fontSize="large" />
          ) : (
            <CloudUploadIcon fontSize="large" />
          )}
        </div>

        <br />
        <br />
        {files.length > 0 && files[0].preview !== "false" && (
          <img
            src={files[0]?.preview}
            style={{ maxHeight: "200px", maxWidth: "200px" }}
            alt="images"
          />
        )}
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Add Events
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.auth?.user?._id
  };
};

const validate = combineValidators({
  title: composeValidators(
    isRequired({ message: "Title is Required" }),
    hasLengthGreaterThan(3)({
      message: "Title must be between 4"
    }),
    hasLengthLessThan(20)({
      message: "Title must be between 4 and 20 characters"
    })
  )(),
  description: composeValidators(
    isRequired({ message: "Description is Required" }),
    hasLengthGreaterThan(50)({
      message: "Description must be Longer than 50 Characters"
    }),
    hasLengthLessThan(250)({
      message: "Description must be Lower than 250 Characters"
    })
  )(),
  dateTime: isRequired({ message: "Date and Time is Required" })
});

export default connect(null, {
  createEvents
})(reduxForm({ form: "createEventForm", validate })(CreateEvents));
