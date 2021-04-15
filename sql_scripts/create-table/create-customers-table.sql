DROP TABLE IF EXISTS Customers;
CREATE TABLE Customers
(customerID nchar(5) NOT NULL PRIMARY KEY,
companyName nvarchar(40) NOT NULL,
contactName nvarchar(30) NOT NULL,
contactTitle nvarchar(30) NOT NULL,
address nvarchar(60) NOT NULL,
city nvarchar(15) NOT NULL,
region nvarchar(15) NULL,
postalCode nvarchar(10) NOT NULL,
country nvarchar(15) NOT NULL,
phone nvarchar(24) NOT NULL,
fax nvarchar(24) NULL);