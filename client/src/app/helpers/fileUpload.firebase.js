export const fileUploadFirebase = async (
  storage,
  files,
  path,
  setPercentage,
  success,
  setErrors
) => {
  let urls = [];
  await files.map(file => {
    storage()
      .ref(`${path}/${file.name}`)
      .put(file)
      .on(
        "state_changed",
        snapshot => {
          const percentage = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercentage(percentage);
        },
        error => {
          setErrors(error.message);
          return null;
        },
        async () => {
          // error
          await storage()
            .ref(`${path}/`)
            .child(file.name)
            .getDownloadURL()
            .then(async url => {
              urls = [...urls, url];
              if (files.length === urls.length) {
                success();
                return urls;
              }
            })
            .catch(err => setErrors(err.message));
        }
      );
  });
};
