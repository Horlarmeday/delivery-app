DROP TABLE IF EXISTS Shippers;
CREATE TABLE Shippers
(shipperID int NOT NULL PRIMARY KEY,
companyName nvarchar(40) NOT NULL,
phone nvarchar(24) NOT NULL);