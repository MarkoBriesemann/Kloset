create database IF NOT EXISTS kloset;
use kloset;

create table users (USER_ID INT AUTO_INCREMENT PRIMARY KEY, login varchar(20), loginid varchar (70), email varchar(20),password varchar(50), name varchar(20));

INSERT INTO users (USER_ID,login, loginid, email,password,name) VALUES (1, 'password', '', 'peter@gmail.com', 'p','peter');
INSERT INTO users (USER_ID,login, email,password,name) VALUES (1, 'password', 'peter@gmail.com', 'p','peter');

drop table clothes;
create table clothes (id INT AUTO_INCREMENT PRIMARY KEY, USER_ID INT, name varchar(20),pic_add varchar(50),category varchar(20), color varchar(20),event varchar(20));

INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Tee_Decontracte.png','tshirt','white','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Chemise_Decontracte.png','chemise','grey','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Chemise_Habille.png','chemise','black','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Gilet_Decontracte.png','gilet','black','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Pull_Habille.png','pullover','black','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Pull_Sport.png','pullover','grey','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_T_Habille.png','shirt','black','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Short_Sport.png','short','black','leisure');
INSERT INTO clothes (USER_ID,name,pic_add,category, color,event) VALUES (1, 'Peter', '/images/images/M_Short_Habille.png','tshirt','grey','leisure');


CREATE USER 'me2'@'localhost' IDENTIFIED BY 'st';
GRANT SELECT, INSERT ON clothes TO me2@'localhost'  IDENTIFIED BY 'st';
