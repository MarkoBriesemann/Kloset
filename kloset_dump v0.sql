create database IF NOT EXISTS kloset;

CREATE USER 'me2'@'localhost' IDENTIFIED BY 'st';
GRANT SELECT, INSERT ON account TO me2@'localhost'  IDENTIFIED BY 'st';

create table account (id INT AUTO_INCREMENT PRIMARY KEY,name varchar(20),pic_add varchar(50));

INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',   '/images/images/M_Tee_Decontracte.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',     '/images/images/M_Chemise_Decontracte.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_Chemise_Habille.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',   '/images/images/M_Gilet_Decontracte.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_Pull_Habille.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_Pull_Sport.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_T_Habille.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_Short_Sport.png');
INSERT INTO account (id,name,pic_add) VALUES ('', 'Peter',    '/images/images/M_Tee_Decontracte.png');
