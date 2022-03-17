## UNIT TESTING

- Tell us about different code coverage techniques and how you might use each of them.

  - Statement Coverage
    - ensure that each line of the source code is covered at least once by the tests.
  - Function Coverage
    - All functions that are in the source code get tested during test execution.
  - Condition Coverage
    - Condition Coverage aims at establishing if the tests cover both the values i.e. true, false in case of conditions
  - Branch Coverage
    - ensuring that every branch appearing in each conditional structure gets executed in source code. if. else if, else....

- Interaction-based unit testing.

  - This type of testing can help verify the functionality of code that depends on the interaction between multiple classes or interfaces.

- What are the 3 phases of the test?

  - First, you set some stuff up (“Arrange”)
  - Then, you do something (“Act”)
  - Then, you make sure that what you expected to happen, actually happened. (“Assert”)

- Acceptance and Functional testing =>

  - Acceptance testing => ensure the software actually solves the problem programmers developed
  - Functional testing => focuses on verifying if the software is meeting the requirements.

- Types of White Box Testing

  - Unit testing.
  - Integration testing.
  - Regression testing. ensures an application still functions as expected after any code changes, updates, or improvements.

  - smoke testing (also confidence testing, sanity testing) is preliminary testing to reveal simple failures.

- Smoke Testing is the Surface Level Testing to verify stability of system. Regression Testing is the Deep Level Testing to verify the rationality of system.

- concurency testing
  - for example test the application when ther are multiple users loged in

## RDBMS

- relational database management system
- RDBMS is a concept. And SQL is the language used for communicating with data in an RDBMS.

Inner Join.
Inner join return rows when there is at least one match of rows between the tables.

Right Join.
Right join return rows which are common between the tables and all rows of Right hand side table. Simply, it returns all the rows from the right hand side table even though there are no matches in the left hand side table.

Left Join.
Left join return rows which are common between the tables and all rows of Left hand side table. Simply, it returns all the rows from Left hand side table even though there are no matches in the Right hand side table.

Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database.

A view is a virtual table which consists of a subset of data contained in a table

An index is performance tuning method of allowing faster retrieval of records from the table.

A subquery is a query within another query. The outer query is called as main query, and inner query is called subquery. SubQuery is always executed first, and the result of subquery is passed on to the main query.

DELETE command is used to remove rows from the table, and WHERE clause can be used for conditional set of parameters. Commit and Rollback can be performed after delete statement.
TRUNCATE removes all rows from the table. Truncate operation cannot be rolled back.

TRUNCATE removes all the rows from the table, and it cannot be rolled back. DROP command removes a table from the database and operation cannot be rolled back.

What is a constraint?
Constraint can be used to specify the limit on the data type of table. Constraint can be specified while creating or altering the table statement. Sample of constraint are.

NOT NULL.
CHECK.
DEFAULT.
UNIQUE.
PRIMARY KEY.
FOREIGN KEY.

Cross join defines as Cartesian product where number of rows in the first table multiplied by number of rows in the second table. If suppose, WHERE clause is used in cross join then the query will work like an INNER JOIN.

Online Transaction Processing (OLTP) manages transaction based applications which can be used for data entry, data retrieval and data processing. OLTP makes data management simple and efficient. Unlike OLAP systems goal of OLTP systems is serving real-time transactions.
Example – Bank Transactions on a daily basis.

SQL clause is defined to limit the result set by providing condition to the query. This usually filters some rows from the whole set of records.
Example – Query that has WHERE condition
Query that has HAVING condition.

Select DISTINCT StudentID, StudentName from Student.
Select SUBSTRING(StudentName,1,5) as studentname from student
Select LEFT(Studentname,5) as studentname from student

Which operator is used in query for pattern matching?
LIKE operator is used for pattern matching, and it can be used as -.

% – Matches zero or more characters.
\_(Underscore) – Matching exactly one character.
Example -.

Select _ from Student where studentname like 'a%'
Select _ from Student where studentname like 'ami\_'

SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR/AND/NOT condition2 // IS NOT NULL/IS NULL // column_name IN (value1, value2, ...) // column_name BETWEEN value1 AND value2
GROUP BY column_name(s)
ORDER BY column1, column2, ... ASC|DESC;

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

DELETE FROM table_name WHERE condition;

SELECT MIN(column_name) // MAX() COUNT() AVG() SUM()
FROM table_name
WHERE condition;

SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

## MVC

Architecture an approach to make the developmnet of application simpler.

- model view controller
  - controller => api => receives the request and pass to model
  - model => backend => process the request and return to controller
  - controller => pass data to view
  - view => front end => render the data

## MVVM

it's like MVC, but instead of controller everything starts from view

Model – code that cares about how data is stored
View – code that cares about how data is displayed
Controller – code that cares about how data is created/updated/deleted
ViewModel – code that cares both about how data is stored and how it is displayed

## bash

-- https://gist.github.com/bradtraversy/ac3b1136fc7d739a788ad1e42a78b610

bash --version

echo $SHELL

x.sh => file format for shell

- chmod +x myscript.sh => permission to run the file
- ./x.sh => to run the file
- which bash

## storage technology

- HHD => Hard Disc Drive => affordable, mechanical
- SSD => Solid State Drive => smaller, ease to use, not mechanical - may fail earlier that HDD
  - SATA => single channel - good speed
  - SAS => dual channel - higher speed
  - PCI => much higher speed
- Cloud Computing => in the cloud.

Hard can hold the memory even after outage of electricity but not RAM

- RAM => Random Access Memory -
  - SDRAM
  - DDR
  - DDR2
  - DDR3

DIMM => transfer 64 bytes
SIMM => transfer 32 bytes

HDD => RAM => CPU
HDD => higher RAM => CPU faster because reduce the trave between hard and ram

OPTANE =>

- can hold data without power for a longer time
