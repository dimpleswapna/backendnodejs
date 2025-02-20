sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance.azurecr.io \
  --docker-username=perseverance \
  --docker-password=6FTnuqSQFp1sRysyIilNtR+Cc5EAe2hXFewJL1OK5r+ACRAxTc40\

