const viewFile = (url: string) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    });
};

export default viewFile;
