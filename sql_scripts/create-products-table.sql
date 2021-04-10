DROP TABLE IF EXISTS Products;
CREATE TABLE Products
(ProductID int NOT NULL PRIMARY KEY,
ProductName nvarchar(40) NOT NULL,
SupplierID int NOT NULL,
CategoryID int NOT NULL,
QuantityPerUnit nvarchar(20) NOT NULL,
UnitPrice decimal(15,4) NOT NULL,
UnitsInStock smallint NOT NULL,
UnitsOnOrder smallint NOT NULL,
ReorderLevel smallint NOT NULL,
Discontinued tinyint NOT NULL,
CONSTRAINT FK_ProductSuppliers FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID),
CONSTRAINT FK_ProductCategories FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID));
