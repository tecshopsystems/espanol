<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      $sql = "SELECT * FROM asociados WHERE Clave = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $inactive = $row['inactivo']; 
      $count = mysqli_num_rows($result);
      // If result matched $myusername and $mypassword, table row must be 1 row
	 	
      if($count == 1) {
         
        // session_register("myusername");
        
          $_SESSION['clave'] = $row['clave'];
         $_SESSION['login_user'] = $myusername;
         header("location: index.html");
       
      }else {
           header("location: ../login.html");
         $error = "Tú usuario es invalido";
      }
   }
?>