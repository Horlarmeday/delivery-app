DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees
(employeeID int NOT NULL PRIMARY KEY,
lastName nvarchar(20) NOT NULL,
firstName nvarchar(10) NOT NULL,
title nvarchar(30) NOT NULL,
titleOfCourtesy nvarchar(25) NOT NULL,
birthDate datetime NOT NULL,
hireDate datetime NOT NULL,
address nvarchar(60) NOT NULL,
city nvarchar(15) NOT NULL,
region nvarchar(15) NULL,
postalCode nvarchar(10) NOT NULL,
country nvarchar(15) NOT NULL,
homePhone nvarchar(24) NOT NULL,
extension nvarchar(4) NOT NULL,
photo varbinary(max) NOT NULL,
notes nvarchar(max) NOT NULL,
reportsTo int NULL,
photoPath nvarchar(255) NOT NULL
CONSTRAINT FK_Employees FOREIGN KEY (reportsTo) REFERENCES Employees(employeeID),
);