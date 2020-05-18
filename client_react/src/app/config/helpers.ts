// Convert Blob To A File
export const convertFile = (theBlob: any, fileName: string): File[] => {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return [theBlob];
};