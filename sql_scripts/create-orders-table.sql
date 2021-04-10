DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders
(OrderID int NOT NULL PRIMARY KEY,
CustomerID nchar(5) NOT NULL,
EmployeeID int NOT NULL,
OrderDate datetime NOT NULL,
RequiredDate datetime NOT NULL,
ShippedDate datetime NULL,
ShipVia int NOT NULL,
Freight decimal(15,4) NOT NULL,
ShipName nvarchar(40) NOT NULL,
ShipAddress nvarchar(60) NOT NULL,
ShipCity nvarchar(15) NOT NULL,
ShipRegion nvarchar(15) NULL,
ShipPostalCode nvarchar(10) NOT NULL,
ShipCountry nvarchar(15) NOT NULL,
CONSTRAINT FK_CustomersOrders FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
CONSTRAINT FK_EmployeesOrders FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
CONSTRAINT FK_ShippersOrders FOREIGN KEY (ShipVia) REFERENCES Shippers(ShipperID)
);