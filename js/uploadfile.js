async function uploadFile() {
  //formdata
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    await fetch('upload.php', {
        method: "POST",
        body: formData
    });

    sweet();

    setTimeout(function() {
        location.reload();
      }, 3000);
}

function displayUpload(){
      //Show the upload button
      let uploadbutton = document.getElementById('upload-button');
      // removing the class
      uploadbutton.classList.remove('hidden');
      
    }
