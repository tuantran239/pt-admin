set -e

rm -rf /etc/nginx/sites-enabled/ptadmin.site
  
sudo ln -s /etc/nginx/sites-available/ptadmin.site /etc/nginx/sites-enabled/

nginx -t

sudo systemctl reload nginx