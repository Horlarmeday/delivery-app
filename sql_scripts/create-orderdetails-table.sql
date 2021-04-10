DROP TABLE IF EXISTS OrderDetails;
CREATE TABLE OrderDetails
(OrderID int NOT NULL,
ProductID int NOT NULL,
UnitPrice decimal(15,4) NOT NULL,
Quantity smallint NOT NULL,
Discount real NOT NULL,
CONSTRAINT FK_OrdersOrderDetails FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
CONSTRAINT FK_ProductOrderDetails FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
);