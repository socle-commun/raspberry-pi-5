# 👤 Utilisateurs & Sécurité SSH – Parce que root, c’est pour les lâches

## 👶 Créer un utilisateur propre

```bash
sudo adduser tonuser
sudo usermod -aG sudo tonuser
```

✅ Tu crées un humain numérique. Et tu lui files le pouvoir de te trahir (aka sudo).

## 🔐 Configuration `.ssh` personnalisée

```bash
su - tonuser
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

Ajoute ta clé publique **RSA/ED25519** dedans. Pas un copier-coller foireux sorti d’un tuto de 2007.

## 🚫 Supprimer le droit root en SSH (parce que t’as pas besoin d’un bazooka pour ouvrir une porte)

Dans `/etc/ssh/sshd_config` :

```bash
PermitRootLogin no
AllowUsers tonuser
```

Puis :

```bash
sudo systemctl restart ssh
```

## 🧹 Facultatif mais pas débile : désactiver l’ancien user `ubuntu`

```bash
sudo deluser ubuntu
sudo rm -rf /home/ubuntu
```

> Voilà. Maintenant tu bosses avec un user clean.  
> Et t’as mis un pare-feu autour de ta session.  
> Moins tu touches à root, plus tu dors tranquille.
