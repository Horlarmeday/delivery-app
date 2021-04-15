DROP TABLE IF EXISTS CustomerCustomerDemo;
CREATE TABLE CustomerCustomerDemo
(customerID nchar(5) NOT NULL,
customerTypeID nchar(10) NOT NULL,
CONSTRAINT FK_CustomersDemoCustomer FOREIGN KEY (customerID) REFERENCES Customers(customerID),
CONSTRAINT FK_CustomersDemoCustomerType FOREIGN KEY (customerTypeID) REFERENCES CustomerDemographics(customerTypeID)
);