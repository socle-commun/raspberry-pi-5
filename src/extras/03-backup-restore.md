# 🧱 Backup & Restore – Sauvegarde ou crève

Si tu ne sauvegardes pas, t’as _déjà perdu tes données_.  
Voici comment éviter de pleurer sur `/dev/null`.

## 📦 Backup de base avec `rsync`

```bash
rsync -aAXv --delete \
  --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} \
  / /mnt/backup/
```

💡 Utilise une clé USB ou un SSD externe pour `/mnt/backup`.

## 📦 Snapshot BTRFS

```bash
sudo btrfs subvolume snapshot /mnt/data /mnt/backup/snap-$(date +%F)
```

ZFS ? Tu sais déjà faire si t’es ici.

## ⏱️ Automatisation simple avec cron

```bash
crontab -e
```

Ajoute :

```text
0 3 * * * rsync -aAXv --delete / /mnt/backup/ >> /var/log/backup.log 2>&1
```

📌 Sauvegarde tous les jours à 3h du mat, pendant que tu dors comme un lâche.

## ☠️ Restore : on t’explique pas DEUX fois

Depuis une live USB, monte ton disque et :

```bash
rsync -aAXv /mnt/backup/ /mnt/rootfs/
```

Puis reinstalle GRUB si t’as tout cassé, genre :

```bash
sudo grub-install /dev/sdX
sudo update-grub
```

## 🧠 Bonus : outil de l’élite

- [`borg`](https://borgbackup.readthedocs.io/) – compresse, chiffre, déduplique
- [`restic`](https://restic.net/) – rapide, versionné, sexy
- [`duplicity`](http://duplicity.nongnu.org/) – si t’aimes les lignes de commande longues comme l’Enfer

> Tu n’es pas immortel. Tes données non plus. Sauvegarde aujourd’hui ou réécris tout demain.
