CREATE USER caUser WITH PASSWORD = 'SSWDCA@2';
grant select,insert,update,delete on object::dbo.AppUser to caUser;

grant select,insert,update,delete on object::dbo.Artist to caUser;

grant select,insert,update,delete on object::dbo.Genre to caUser;

grant select,insert,update,delete on object::dbo.Album to caUser;
