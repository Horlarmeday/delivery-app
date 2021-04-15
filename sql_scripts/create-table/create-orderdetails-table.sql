DROP TABLE IF EXISTS OrderDetails;
CREATE TABLE OrderDetails
(orderID int NOT NULL,
productID int NOT NULL,
unitPrice decimal(15,4) NOT NULL,
quantity smallint NOT NULL,
discount real NOT NULL,
CONSTRAINT FK_OrdersOrderDetails FOREIGN KEY (orderID) REFERENCES Orders(orderID),
CONSTRAINT FK_ProductOrderDetails FOREIGN KEY (productID) REFERENCES Products(productID),
);