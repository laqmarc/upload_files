<?php
// INPUT
// name of uploaded file 
$filename = $_FILES['file']['name'];

// Choose folder uploads 
$location = "uploads/".$filename;

// Save the uploaded file to the local filesystem 
if (move_uploaded_file($_FILES['file']['tmp_name'], $location) ) { 
  echo 'Success'; 
} else { 
  echo 'Failure'; 
}

?>