sudo apt-get update
sudo apt-get upgrade
sudo apt install nodejs
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000