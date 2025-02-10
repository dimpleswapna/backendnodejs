sudo usermod -aG docker $USER

sudo usermod -aG root $USER

sudo chmod 777 /var/run/docker.sock


kubectl create secret docker-registry registry-creds \
  --docker-server=perseverance0.azurecr.io \
  --docker-username=perseverance0 \
  --docker-password=ysHmhax88ktqFcK8+Epcjeaoa050OBQ2P2j8Qul0Cv+ACRAizwRe\

