DROP TABLE IF EXISTS Territories;
CREATE TABLE Territories
(territoryID nvarchar(20) NOT NULL PRIMARY KEY,
territoryDescription nchar(50) NOT NULL,
regionID int NOT NULL,
CONSTRAINT FK_RegionTerritories FOREIGN KEY (regionID) REFERENCES Region(regionID),
);