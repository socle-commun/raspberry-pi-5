# ⚡ Premier démarrage – l’instant de vérité

## 🚀 Boot initial

- Insère la carte SD ou branche ton SSD
- Alimente le RPi5
- Croise les doigts, tu devrais voir le prompt `Ubuntu login:` (sinon, t’as foiré un truc)

## 🔑 Connexion initiale

Si t’as pas fait de cloud-init :

- User : `ubuntu`
- Pass : `ubuntu`
- Obligation de changer le mot de passe à la première connexion

## 🔄 Mise à jour immédiate

Oui, **IMMÉDIATE**, ou tu risques d’avoir des paquets obsolètes plus vieux que Windows XP.

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

## 🧽 Ménage post-install

```bash
sudo apt autoremove --purge
sudo apt clean
```

## 👁️ Vérifie les infos système

```bash
uname -a
lsblk
neofetch
```

Si `neofetch` n’est pas là :

```bash
sudo apt install neofetch
```

Et là tu respires. T’as passé le boot. Tu fais partie des vivants. Pour l’instant.
