DROP TABLE IF EXISTS Suppliers;
CREATE TABLE Suppliers
(SupplierID int NOT NULL PRIMARY KEY,
CompanyName nvarchar(40) NOT NULL,
ContactName nvarchar(30) NOT NULL,
ContactTitle nvarchar(30) NOT NULL,
Address nvarchar(60) NOT NULL,
City nvarchar(15) NOT NULL,
Region nvarchar(15) NULL,
PostalCode nvarchar(10) NOT NULL,
Country nvarchar(15) NOT NULL,
Phone nvarchar(24) NOT NULL,
Fax nvarchar(24) NULL,
HomePage longtext NULL);