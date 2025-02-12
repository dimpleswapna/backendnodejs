sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance.azurecr.io \
  --docker-username=perseverance \
  --docker-password=2D/j53l0UmUb3kYy5TkOsc3Hmc+TLQafssPz7agN8o+ACRDRVi6h\

