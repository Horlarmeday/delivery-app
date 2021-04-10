DROP TABLE IF EXISTS Territories;
CREATE TABLE Territories
(TerritoryID int NOT NULL PRIMARY KEY,
TerritoryDescription nchar(50) NOT NULL,
RegionID int NOT NULL
CONSTRAINT FK_Region FOREIGN KEY (RegionID) REFERENCES Region(RegionID),
);