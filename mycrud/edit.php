<?php
// including the database connection file
include_once("config.php");

if(isset($_POST['update']))
{	
	$id = $_POST['id'];
	
	$productName=$_POST['Pname'];
	$price=$_POST['price'];
	$stocks=$_POST['stocks'];
	$category=$_POST['category'];
	$supplier=$_POST['supplier']	
	
	if(empty($pName) || empty($price) || empty($stocks) || empty($catergory) || empty($supplier)) {
				
		if(empty($productName)) {
			echo "<h4 class=\"text-danger\">Product Name field is empty.</h4><br/>";
		}
		
		if(empty($price)) {
			echo "<h4 class=\"text-danger\">Price field is empty.</h4><br/>";
		}
		
		if(empty($stocks)) {
			echo "<h4 class=\"text-danger\">Stocks field is empty.</h4><br/>";
		}
		if(empty($category)) {
			echo "<h4 class=\"text-danger\">Category field is empty.</h4><br/>";
		}
		if(empty($supplier)) {
			echo "<h4 class=\"text-danger\">Supplier field is empty.</h4><br/>";
		}
		
		//link to the previous page
		echo "<br/><a class=\"btn btn-primary\" href='javascript:self.history.back();'>Go Back</a>";
	} else { 
		// if all the fields are filled (not empty) 
			
		//insert data to database		
		$sql = "INSERT INTO tbl_products(productname, price, stocks, category, supplier) VALUES(:productname, :price, :stocks, :category, :supplier )";
		$query = $dbConn->prepare($sql);
				
		$query->bindparam(':productName', $pName);
		$query->bindparam(':price', $price);
		$query->bindparam(':stocks', $stocks);
		$query->bindparam(':category', $category);
		$query->bindparam(':supplier', $supplier);
		$query->execute();
		
		
				
		//redirectig to the display page. In our case, it is index.php
		header("Location: index.php");
	}
}
?>
<?php
//getting id from url
$id = $_GET['id'];

//selecting data associated with this particular id
$sql = "SELECT * FROM users WHERE id=:id";
$query = $dbConn->prepare($sql);
$query->execute(array(':id' => $id));

while($row = $query->fetch(PDO::FETCH_ASSOC))
{
	$name = $row['name'];
	$age = $row['age'];
	$email = $row['email'];
}
?>
<html>
<head>	
	<title>Edit Data</title>
</head>

<body>
	<a href="index.php">Home</a>
	<br/><br/>
	
	<form name="form1" method="post" action="edit.php">
		<table border="0">
			<tr> 
				<td>Name</td>
				<td><input type="text" name="name" value="<?php echo $name;?>"></td>
			</tr>
			<tr> 
				<td>Age</td>
				<td><input type="text" name="age" value="<?php echo $age;?>"></td>
			</tr>
			<tr> 
				<td>Email</td>
				<td><input type="text" name="email" value="<?php echo $email;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>
</body>
</html>
