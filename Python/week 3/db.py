import mysql.connector
from mysql.connector import Error
import pandas as pd
# A function to connect to our mysql server
def create_connection(host_name,user_name,password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = password,
            database= db_name
        )
        print("MySQL connection has been successful")
    except Error as error:
        print(f"Error: {error}")
    return connection
# connection = create_connection("localhost", "root", "","school")
def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Database created successfully")
    except Error as error:
        print(f"Error: {error}")
        
# query = "CREATE database School"
# database = create_database(connection,query)

def execute_query(connection,query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("query succesful")
    except Error as error:
        print(f"Error: {error}")
    

# connection = create_connection("localhost", "root", "","school")
# execute_query(connection,create_table_course)



Create_table_teacher ="""
CREATE TABLE teacher(
    techer_id INT PRIMARY KEY,
    teacher_name,
    teacher_number;
)
"""

create_table_client = """
CREATE TABLE client(
  
   
   client_id  INT PRIMARY KEY,
   client_name  VARCHAR(40) NOT NULL,
   industry  VARCHAR(20) NOT NULL  
)

"""
create_table_course ="""
CREATE TABLE course(
    
   course_id  INT PRIMARY KEY,
   course_name  VARCHAR(40) NOT NULL,
   level  VARCHAR(2),
   start_date  DATE,
   teacher  INT,
   client  INT
   
)
"""
# populating tables
pop_teacher ="""

INSERT INTO teacher VALUES

(1,'Amos','ngisa','1998-10-10','0707474322');


"""
pop_client = """
INSERT INTO client VALUES 
(1,'Allan','Software Development'),
(2,'Shawn','Software Development'),
(3,'Jeremiah','Software Development'),
(4,'Joan','Software Development');

"""
pop_course ="""
INSERT INTO course VALUES

(1,'HTML-CSS','8', '2024-4-20','1','1'),
(2,'HTML-CSS','8', '2024-4-20','1','2'),
(3,'HTML-CSS','8', '2024-4-20','1','3'),
(4,'HTML-CSS','8', '2024-4-20','1','4'),

(5,'Javascript','7', '2024-5-15','1','1'),
(6,'Javascript','7', '2024-5-15','1','2'),
(7,'Javascript','7', '2024-5-15','1','3'),
(8,'Javascript','7', '2024-5-15','1','4'),

(9,'Python','3', '2024-6-14','1','1'),
(10,'Python','3', '2024-6-14','1','3'),

(11,'Java','1','2024-7-20','1','1');


"""

# creating relationship
alter_course = """
ALTER TABLE course
ADD FOREIGN KEY (teacher)
REFERENCES teacher(teacher_id)
ON DELETE SET NULL;

"""
alter_course_again = """
ALTER TABLE course
ADD FOREIGN KEY (client)
REFERENCES client(client_id)
ON DELETE SET NULL;

"""
connection = create_connection("localhost", "root", "","school")

# execute_query(connection,Create_table_teacher)


#  reading data from db
def reading_query(connection,query):
   cursor = connection.cursor()
   result = None
   try:
       cursor.execute(query)
       result = cursor.fetchall()
       return result
   except Error as error:
    print(f"Error:{error}")
    
q1 ="""
    SELECT *
    FROM client;
    
    """
q2 ="""
    SELECT  course.course_id,course.course_name,client.client_name
    FROM course
    JOIN client
    ON course.client = client.client_id
    
    """   
results = reading_query(connection,q1)
    
mylist = []  
    
for result in results:
    results = list(result)
    mylist.append(result)
    # print(result)
    # print(mylist)
    
    # formatting output into pandas dataframe
columns = ["Course_id","Course_name","Client_name"]
data_f = pd.DataFrame(mylist,columns=columns)

# display(data_f)
# print(data_f)  

# updating records
update = """
UPDATE teacher
SET
phone_no = '0705635788'
WHERE teacher_id = 1;

"""  
execute_query(connection, update)
