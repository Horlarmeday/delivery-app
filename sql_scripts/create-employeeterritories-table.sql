DROP TABLE IF EXISTS EmployeeTerritories;
CREATE TABLE EmployeeTerritories
(EmployeeID int NOT NULL,
TerritoryID nvarchar(20) NOT NULL,
CONSTRAINT FK_EmployeeTerritoriesEmployees FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
CONSTRAINT FK_EmployeeTerritoriesTerritory FOREIGN KEY (TerritoryID) REFERENCES Territories(TerritoryID),
);