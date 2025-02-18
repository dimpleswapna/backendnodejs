sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance.azurecr.io \
  --docker-username=perseverance \
  --docker-password=0dHmAcqbxApK+0YYVI/u1qAGAkm/40b8yk+pjKF1QY+ACRDRpMaB\

