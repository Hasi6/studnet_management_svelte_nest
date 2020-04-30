import React, { FC } from "react";
import fileUploadFirebase from "fileupload_firebase";
import AuthorizedWrapper from "../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper";
import { storage } from "../../config/firebase";

const Home: FC = (): JSX.Element => {
  const setLoading = (data: any) => {
    console.log(data);
  };

  const setError = (err: string) => {
    console.log(err);
  };

  const success = (urls: string[]) => {
    console.log(urls);
  };

  const uploadFile = (file: File[]) => {
    fileUploadFirebase(storage, file, "test", setLoading, success, setError);
  };

  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>
      <div className="alertDiv"></div>
      <input
        multiple={true}
        type="file"
        onChange={(e: any) => {
          const files = e.target.files;
          uploadFile(Array.from(files));
        }}
      />
    </AuthorizedWrapper>
  );
};

export default Home;
