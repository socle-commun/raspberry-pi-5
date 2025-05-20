# 🔐 Pare-feu & Fail2Ban – Laisse pas entrer n’importe qui

## 🔥 UFW – Pare-feu simple mais costaud

```bash
sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

💡 `ufw status verbose` pour voir les règles en place.

## 🚫 Bloque les tentatives de connexion douteuses avec Fail2Ban

```bash
sudo apt install fail2ban
```

Crée une copie propre du fichier de config :

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Édite `jail.local` pour SSH :

```ini
[sshd]
enabled = true
port    = ssh
filter  = sshd
logpath = /var/log/auth.log
maxretry = 5
```

Redémarre le service :

```bash
sudo systemctl restart fail2ban
```

## 🔍 Vérification des bans

```bash
sudo fail2ban-client status sshd
```

Si tu vois des IPs bannies, c’est que t’as fait ton taf.

> Avec ça, seuls les bons passent. Les autres prennent un mur numérique dans la face.
