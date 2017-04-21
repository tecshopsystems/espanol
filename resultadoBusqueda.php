<?php
    //Archivo de conexión a la base de datos
$servername = "localhost";
$username = "tecshops_selectt";
$password = "Anabantha666";
$dbname = "tecshops_sanatorio_blog";
$conn = new mysqli($servername, $username, $password, $dbname);
$acentos = $conn->query("SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


//Pedimos todos los datos
$consulta = mysqli_query($conn, "select * from laboratorio ");

//Mostramos los datos
while($resultados = mysqli_fetch_array($consulta)) {
	  $examen = $resultados['Examen'];
			$preparacion = $resultados['Preparacion'];
			$muestra = $resultados['Muestra'];
            $volumen = $resultados['Volumen'];
            $metodologia = $resultados['Metodologia'];
			$estabilidad = $resultados['Estabilidad'];
			$entrega = $resultados['Entrega'];
            $acreditado = $resultados['Acreditado'];

	//Output
$mensaje .= ' 
             <div class="col-md-4 col-sm-6 col-xs-12" style="overflow: auto; width: 380px; height: 650px; background-color:#fff; border: 1px solid #fff; margin: 20px auto 15px auto" >   
             
                                    <div class="single-price-table-head">
                                          <h4><a><img src="img/logo/footer-logo.png" alt="reflex"></a></h4>
                                          <h4>'.$examen.'</h4>
                                         <div class="single-pricing-table-body">
                                       
                                        <h5>Preparación:  '.$preparacion.'</h5>
                                        <h5>Muestra: '.$muestra.'</h5>
                                        <h5>Volumen: '.$volumen.'</h5>
                                           <h5>Metodología:  '.$metodologia.'</h5>
                                        <h5>Estabilidad: '.$estabilidad.'</h5>
                                        <h5>Entrega: '.$entrega.'</h5>
                                           <h5>Acreditado: '.$acreditado.'</h5>
                                        
                                    </div> 
                </div> </div>';
  

		//Fin while $resultados

	//Fin else $filas

};//Fin isset $consultaBusqueda

//Devolvemos el mensaje que tomará jQuery
echo $mensaje;
?>


