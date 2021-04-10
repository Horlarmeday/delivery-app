DROP TABLE IF EXISTS Employees;
CREATE TABLE Employees
(EmployeeID int NOT NULL PRIMARY KEY,
LastName nvarchar(20) NOT NULL,
FirstName nvarchar(10) NOT NULL,
Title nvarchar(30) NOT NULL,
TitleOfCourtesy nvarchar(25) NOT NULL,
BirthDate datetime NOT NULL,
HireDate datetime NOT NULL,
Address nvarchar(60) NOT NULL,
City nvarchar(15) NOT NULL,
Region nvarchar(15) NULL,
PostalCode nvarchar(10) NOT NULL,
Country nvarchar(15) NOT NULL,
HomePhone nvarchar(24) NOT NULL,
Extension nvarchar(4) NOT NULL,
Photo varbinary(max) NOT NULL,
Notes nvarchar(max) NOT NULL,
ReportsTo int NULL,
PhotoPath nvarchar(255) NOT NULL
CONSTRAINT FK_Employees FOREIGN KEY (ReportsTo) REFERENCES Employees(EmployeeID),
);