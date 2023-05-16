drop table users;
CREATE TABLE `users` (
                         `id` int(11) NOT NULL,
                         `name` varchar(255) NOT NULL,
                         `email` varchar(255) NOT NULL,
                         `job_title` varchar(255) NOT NULL
);



ALTER TABLE `users`
    ADD PRIMARY KEY (`id`);
ALTER TABLE `users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

insert into users values(1,'react','react@react.com','react official');
insert into users values(2,'redux','redux@react.com','redux official');
select * from users;