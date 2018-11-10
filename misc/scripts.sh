# dump script

mysqldump  -u root -p --databases aexyn --triggers --routines|sed -e 's/DEFINER=[^ ]* / /'  > db.sql