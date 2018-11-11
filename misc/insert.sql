insert into company (name,labour_type_id,enterprise_type_id)values('Amax',1,1)
insert into company_location (address1,address2,city,zip,state_id,company_id) values('Noida','Noida','Noida','122001',1,2);

insert into user_company_notification_link(user_id,company_id,status) values(1,2,'ALLOWED')