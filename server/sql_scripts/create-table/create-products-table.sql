DROP TABLE IF EXISTS Products;
CREATE TABLE Products
(productID int NOT NULL PRIMARY KEY,
productName nvarchar(40) NOT NULL,
supplierID int NOT NULL,
categoryID int NOT NULL,
quantityPerUnit nvarchar(20) NOT NULL,
unitPrice decimal(15,4) NOT NULL,
unitsInStock smallint NOT NULL,
unitsOnOrder smallint NOT NULL,
reorderLevel smallint NOT NULL,
discontinued tinyint NOT NULL,
CONSTRAINT FK_ProductSuppliers FOREIGN KEY (supplierID) REFERENCES Suppliers(supplierID),
CONSTRAINT FK_ProductCategories FOREIGN KEY (categoryID) REFERENCES Categories(categoryID));
