export const getData = async (filePath, fileType) => {
  try {
    const response = await fetch(filePath);
    console.log("getData:" + response.persons);
    switch (fileType.toUpperCase()) {
      case "JSON":
        return response.json();
      default:
        return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
