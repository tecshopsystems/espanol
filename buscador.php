
<?php
//Archivo de conexión a la base de datos
require('conexion.php');

$servername = "localhost";
$username = "tecshops_selectt";
$password = "Anabantha666";
$dbname = "tecshops_sanatorio_blog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$acentos = $conn->query("SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$consultaBusqueda = $_POST['valorBusqueda'];

//Filtro anti-XSS
$caracteres_malos = array("<", ">", "\"", "'", "/", "<", ">", "'", "/");
$caracteres_buenos = array("& lt;", "& gt;", "& quot;", "& #x27;", "& #x2F;", "& #060;", "& #062;", "& #039;", "& #047;");
$consultaBusqueda = str_replace($caracteres_malos, $caracteres_buenos, $consultaBusqueda);

//Variable vacía (para evitar los E_NOTICE)
$mensaje = "";


//Comprueba si $consultaBusqueda está seteado
if (isset($consultaBusqueda)) {

	//Selecciona todo de la tabla mmv001 
	//donde el nombre sea igual a $consultaBusqueda, 
	//o el apellido sea igual a $consultaBusqueda, 
	//o $consultaBusqueda sea igual a nombre + (espacio) + apellido
	$consulta = mysqli_query($conn,  "select * from blog where titulo LIKE '%".$consultaBusqueda."%' OR autor like '%".$consultaBusqueda."%'  OR especialidad like '%".$consultaBusqueda."%'");

    //Obtiene la cantidad de filas que hay en la consulta
	$filas = mysqli_num_rows($consulta);

	//Si no existe ninguna fila que sea igual a $consultaBusqueda, entonces mostramos el siguiente mensaje
	if ($filas === 0) {
		$mensaje = "<p>No hay resultados</p>";
	} else {
		//Si existe alguna fila que sea igual a $consultaBusqueda, entonces mostramos el siguiente mensaje
		//echo 'Resultados <strong>'.$consultaBusqueda.'</strong>';

		//La variable $resultado contiene el array que se genera en la consulta, así que obtenemos los datos y los mostramos en un bucle
		while($resultados = mysqli_fetch_array($consulta)) {
			$id = $resultados['id'];
            $imagen = $resultados['imagen'];
			$autor = $resultados['autor'];
			$titulo = $resultados['titulo'];
            $especialidad = $resultados['especialidad'];
            $fecha = $resultados['fecha'];
             $parte1 = $resultados['parte1'];

			//Output
			$mensaje .= '

			     <div class="col-md-4 col-sm-6 col-xs-12" style="overflow: auto; width: 380px; height: 500px; background-color:#fff; border: 1px solid #fff; margin: 20px auto 15px auto" >
                                <div class="single-latest-blog bg-white" >
                                    <div class="single-latest-blog-img">
                                        <img src="' . $imagen . '" alt="">
                                        <div class="single-latest-blog-date">
                                          
                                            <h6>' . $titulo . '</h6>
                                        </div>
                                        <a class="read-more" href="blogdeta.php?&id=' . $id . '">Ver-completo</a>
                                    </div>
                                    <div class="single-latest-blog-info">

                                        <h4 align="left"><a href="#" align="left">' . $autor . '</a></h4>
                                       
                                        <h6 align="left">' . $especialidad . '
                                        </h6>
                                         <h6 align="left">' . $fecha . '</h6>
                                        <p align="justify">' . $parte1 . '</p>
                                    </div>
                                </div>
                                <br></br>
                            </div>';
  

		};//Fin while $resultados

	}; //Fin else $filas

};//Fin isset $consultaBusqueda

//Devolvemos el mensaje que tomará jQuery
echo $mensaje;
?>



<?php
 /*-   
$input=trim($_POST['input']);
$servername = "localhost";
$username = "tecshops_selectt";
$password = "Anabantha666";
$dbname = "tecshops_sanatorio_blog";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$acentos = $conn->query("SET NAMES 'utf8'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select * from blog where titulo LIKE '%".$input."%' OR autor like '%".$input."%'  OR especialidad like '%".$input."%' order by fecha desc";

$result = $conn->query($sql) or die('NO SE PUDO HACER LA CONSULTA');
if ($result->num_rows > 0) {
					while ($row = $result->fetch_assoc()){
                        $id=$row["id"];
                       
                       
                        echo $id;
                          } } else {
    echo "0 results";
    }
  $_SESSION['arreglo']=$row;
 //header("Location:pruebas.php?".SID);


 -*/
?>

