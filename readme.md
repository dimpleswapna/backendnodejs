sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance0.azurecr.io \
  --docker-username=perseverance0 \
  --docker-password= 8vOyoNSE03nyvD1yOn3b56YLeRZbkcTl1Q5aBZlTm5+ACRDSh796\

