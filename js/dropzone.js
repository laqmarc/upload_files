(function () {
    // get the dropzone
    var dropzone = document.getElementById('dropzone');
    
    var upload = function (files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            x;

        //append multiple files
        for (x = 0; x < files.length; x = x + 1) {
            formData.append('file[]', files[x]);
        }

        // open php
        xhr.open('post', 'dragupload.php');

        //send data
        xhr.send(formData);

        sweet();

    };

    // dropzone events
    dropzone.ondrop = function (e) {
        e.preventDefault();
        this.className = 'dropzone';
        upload(e.dataTransfer.files);
    };

    dropzone.ondragover = function () {
        this.className = 'dropzone hoverfile';
        return false;
    };

    dropzone.ondragleave = function () {
        this.className = 'dropzone';
        return false;
    };
}());