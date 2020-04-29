import { storage } from "../../config/firebase";

export const fileUploadFirebase = async (files, setPercentage) => {
  let urls = [];
  await files.map(file => {
    storage()
      .ref(`post_images/${file.name}`)
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
          console.log(error);
          return null;
        },
        async () => {
          // error
          await storage()
            .ref(`post_images/`)
            .child(file.name)
            .getDownloadURL()
            .then(async url => {
              urls = [...urls, url];
              if (files.length === urls.length) {
                return urls;
              }
            });
        }
      );
  });
};
