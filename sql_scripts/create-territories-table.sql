DROP TABLE IF EXISTS Territories;
CREATE TABLE Territories
(TerritoryID nvarchar(20) NOT NULL PRIMARY KEY,
TerritoryDescription nchar(50) NOT NULL,
RegionID int NOT NULL,
CONSTRAINT FK_RegionTerritories FOREIGN KEY (RegionID) REFERENCES Region(RegionID),
);