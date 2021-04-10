DROP TABLE IF EXISTS Shippers;
CREATE TABLE Shippers
(ShipperID int NOT NULL PRIMARY KEY,
CompanyName nvarchar(40) NOT NULL,
Phone nvarchar(24) NOT NULL);