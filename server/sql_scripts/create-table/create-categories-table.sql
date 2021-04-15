DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories
(categoryID int NOT NULL PRIMARY KEY,
categoryName nvarchar(15) NOT NULL,
description nvarchar(max) NULL,
picture nvarchar(max) NOT NULL);