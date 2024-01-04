use db;
create table users (
    user_id INT AUTO_INCREMENT,
    user_name TEXT,
    user_created_at DATETIME,
    PRIMARY KEY(user_id)
);

INSERT INTO users (user_name, user_created_at) VALUES ("test_user", now());