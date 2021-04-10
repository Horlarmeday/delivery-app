DROP TABLE IF EXISTS CustomerCustomerDemo;
CREATE TABLE CustomerCustomerDemo
(CustomerID nchar(5) NOT NULL,
CustomerTypeID nchar(10) NOT NULL,
CONSTRAINT FK_Customers FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
CONSTRAINT FK_CustomerType FOREIGN KEY (CustomerTypeID) REFERENCES CustomerDemographics(CustomerTypeID)
);