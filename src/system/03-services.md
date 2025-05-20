# 🛠️ Services et Daemons – Prends le contrôle du sous-sol

Un Raspberry mal géré, c’est un squat de services inutiles qui bouffent ta RAM. Voici comment mettre de l’ordre.

## 🔍 Lister les services actifs

```bash
systemctl list-units --type=service --state=running
```

> Pour voir qui tourne sans ton autorisation.

## 📛 Désactiver les boulets au démarrage

```bash
sudo systemctl disable <service>
```

Remplace `<service>` par le nom du service (genre `bluetooth.service`, `ModemManager.service`, etc.)

💡 Utilise `systemctl list-unit-files` pour voir tous les services _et_ leur statut d’activation.

## 🚀 Activer un service au boot

```bash
sudo systemctl enable <service>
```

Utile pour des trucs comme `docker.service` ou ton serveur web auto-lancé.

## 💣 Stopper un service sans attendre l’apocalypse

```bash
sudo systemctl stop <service>
```

Tu veux tuer un daemon ? Fais-le proprement.

## 🔄 Redémarrer un service après une modif

```bash
sudo systemctl restart <service>
```

Typiquement après avoir modifié un fichier de conf.

## 🔒 Checker un service en détail

```bash
systemctl status <service>
```

T’as une erreur ? Ce sera affiché ici. Ou alors c’est toi l’erreur.

## 🧼 Nettoyage : services inutiles à virer (exemples)

```bash
sudo systemctl disable avahi-daemon
sudo systemctl disable ModemManager
sudo systemctl disable bluetooth
```

_Si t’as pas de réseau local mDNS, de modem 3G ou de périphérique Bluetooth, vire-moi ça._

> Un bon Pi, c’est un Pi qui tourne que ce que tu lui dis. Pas une auberge pour démons inutiles.
