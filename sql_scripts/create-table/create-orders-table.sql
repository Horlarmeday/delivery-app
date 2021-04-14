DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders
(orderID int NOT NULL PRIMARY KEY,
customerID nchar(5) NOT NULL,
employeeID int NOT NULL,
orderDate datetime NOT NULL,
requiredDate datetime NOT NULL,
shippedDate datetime NULL,
shipVia int NOT NULL,
freight decimal(15,4) NOT NULL,
shipName nvarchar(40) NOT NULL,
shipAddress nvarchar(60) NOT NULL,
shipCity nvarchar(15) NOT NULL,
shipRegion nvarchar(15) NULL,
shipPostalCode nvarchar(10) NOT NULL,
shipCountry nvarchar(15) NOT NULL,
CONSTRAINT FK_CustomersOrders FOREIGN KEY (customerID) REFERENCES Customers(customerID),
CONSTRAINT FK_EmployeesOrders FOREIGN KEY (employeeID) REFERENCES Employees(employeeID),
CONSTRAINT FK_ShippersOrders FOREIGN KEY (shipVia) REFERENCES Shippers(shipperID)
);