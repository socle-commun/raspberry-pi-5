# 🌐 Réseau & SSH – Connecte-toi comme un roi

## 🧠 Fixer une IP statique (si t’as pas envie de chercher ton Pi pendant 30 minutes)

Édite Netplan (remplace `eth0` et `192.168.x.x` selon ton réseau) :

```bash
sudo nano /etc/netplan/01-netcfg.yaml
```

```yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.50/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
```

Applique :

```bash
sudo netplan apply
```

## 🔎 Trouver ton Pi sur le réseau

Si t’es trop paresseux pour fixer une IP, installe **avahi** pour le retrouver via `hostname.local` :

```bash
sudo apt install avahi-daemon
```

Tu pourras le ping :

```bash
ping raspberrypi.local
```

(ou `ubuntu.local`, selon l’image)

## 🗝️ Activer et sécuriser SSH

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

Vérifie qu’il écoute :

```bash
ss -tlnp | grep ssh
```

Ajoute ta clé publique si tu veux pas te taper les mots de passe à chaque fois :

```bash
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

## 🔥 Interdire l’authentification par mot de passe (quand t’es un vrai)

Édite sshd_config :

```bash
sudo nano /etc/ssh/sshd_config
```

Active :

```text
PasswordAuthentication no
PermitRootLogin no
```

Puis :

```bash
sudo systemctl restart ssh
```

Voilà. T’as un accès distant. Propre. Rapide. Et pas (trop) troué.
