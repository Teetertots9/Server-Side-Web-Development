CREATE USER webUser WITH PASSWORD = 'Password@12345';
grant select,insert,update,delete on object::dbo.Category to webUser;

grant select,insert,update,delete on object::dbo.Product to webUser;

grant select,insert,update,delete on object::dbo.AppUser to webUser;

grant select,insert,update,delete on object::dbo.Link to webUser;

grant select,insert,update,delete on object::dbo.Topic to webUser