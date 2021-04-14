DROP TABLE IF EXISTS EmployeeTerritories;
CREATE TABLE EmployeeTerritories
(employeeID int NOT NULL,
territoryID nvarchar(20) NOT NULL,
CONSTRAINT FK_EmployeeTerritoriesEmployees FOREIGN KEY (employeeID) REFERENCES Employees(employeeID),
CONSTRAINT FK_EmployeeTerritoriesTerritory FOREIGN KEY (territoryID) REFERENCES Territories(territoryID),
);