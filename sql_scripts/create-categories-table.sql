DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories
(CategoryID int NOT NULL PRIMARY KEY,
CategoryName nvarchar(15) NOT NULL,
Description nvarchar(max) NULL,
Picture varbinary(max) NOT NULL);