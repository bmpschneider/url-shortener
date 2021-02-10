sudo apt-get update
sudo apt-get upgrade
sudo apt install nodejs
sudo apt install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 14.15.4
cd url-shortener
npm install
sudo apt install mysql-server
sudo mysql_secure_installation
root
root




sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;
exit;
sudo mysql -uroot -proot
CREATE USER urlshortener@localhost IDENTIFIED BY 'urlshortener';
CREATE DATABASE urlshortener;
GRANT ALL ON urlshortener.* TO urlshortener@localhost IDENTIFIED BY 'urlshortener';
FLUSH PRIVILEGES;
exit;
npx sequelize-cli db:migrate
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000
sh start.sh