DROP TABLE IF EXISTS EmployeeTerritories;
CREATE TABLE EmployeeTerritories
(EmployeeID int NOT NULL,
TerritoryID nvarchar(20) NOT NULL,
CONSTRAINT FK_Territory FOREIGN KEY (EmployeeID) REFERENCES Territories(TerritoryID)
);