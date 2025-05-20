# 🐳 Docker Rootless – Le conteneur sans superpouvoirs (ni superrisques)

## 🤔 Pourquoi rootless ?

Parce que t’as pas envie qu’un `docker run` foireux efface ton système. Avec rootless, Docker tourne avec les **droits d’un user**, pas de `sudo`.

## 🧱 Installation des prérequis

```bash
sudo apt install uidmap dbus-user-session
```

## 📦 Installer Docker Rootless

```bash
dockerd-rootless-setuptool.sh install
```

Ajoute ensuite dans `~/.bashrc` ou `~/.zshrc` :

```bash
export PATH=/usr/bin:$PATH
export DOCKER_HOST=unix:///run/user/1000/docker.sock
```

Recharge la session :

```bash
source ~/.bashrc
```

## 🧪 Tester que tout roule

```bash
docker run hello-world
```

Si tu vois un message qui parle de baleine et de succès : t’es un dockeriste propre.

## 🔐 Vérification de l’isolation

```bash
ps aux | grep dockerd
```

Tu dois **pas** voir `root` comme propriétaire du démon. Sinon t’as raté ton coup.

## 🗃️ Gestion des droits (optionnel)

Si tu veux que ce Docker rootless survive à un reboot :

```bash
loginctl enable-linger $USER
```

## ⚠️ Limitations

- Pas de ports <1024 sans bidouille (normal, t'es pas root)
- Les volumes peuvent être un peu plus lents

> Mais c’est le prix de la tranquillité. Et si t’aimes pas ça, retourne courir avec `sudo` en slip dans la forêt.
