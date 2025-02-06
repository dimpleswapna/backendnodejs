sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance.azurecr.io \
  --docker-username=perseverance \
  --docker-password=SnoJ3SLfJlfcQ+Ltm4h5HF8CCIJsjo+AZK9roKqsp3+ACRDJz60B\

