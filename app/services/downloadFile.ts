const downloadFile = (url: string) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = file;
      a.download = "filename.jpeg";
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    });
};

export default downloadFile;
