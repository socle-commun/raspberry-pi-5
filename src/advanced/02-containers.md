# 🐳 Conteneurs & Portainer – Docker, mais sans les larmes

Tu veux lancer des apps dans des cages dorées ? Voici comment utiliser Docker comme un pro… sans toucher au terminal (ou presque).

## 🐳 Docker (rappel) – Installation propre

Si t’as pas encore installé Docker (et rootless tant qu’à faire) :

```bash
sudo apt install docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker
```

Ou en mode rootless : [voir chapitre Docker Rootless](/setup/03_docker_rootless)

## 🔧 Installer Portainer – L’interface web du dockerophile fainéant

```bash
docker volume create portainer_data

docker run -d -p 8000:8000 -p 9000:9000 \
  --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce
```

💡 Accès sur ton navigateur : `http://<ip-du-pi>:9000`

## ⚙️ Premiers conteneurs utiles

### 🔁 Watchtower – MàJ auto de tes conteneurs

```bash
docker run -d --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower
```

### 🔗 Traefik ou Nginx Proxy Manager – Pour jouer avec les noms de domaine locaux

> ⚠️ Pour utilisateurs avancés. Sinon tu vas juste casser tous tes reverse proxy comme un gland.

## 📁 Docker Compose – Pour pas tout taper à la main

Exemple : `docker-compose.yml`

```yaml
version: "3.3"
services:
  whoami:
    image: traefik/whoami
    ports:
      - "8080:80"
```

Et tu lances :

```bash
docker-compose up -d
```

## 🧪 Teste ton setup

- Accès Portainer : `http://<ip>:9000`
- Lancement conteneur test : `docker run hello-world`
- Vérifie dans Portainer que ça s’affiche bien

> Docker sans Portainer c’est comme un scalpel sans chirurgien.
> Avec Portainer, même un stagiaire peut presque faire un DevOps (presque).
