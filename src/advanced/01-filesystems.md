# 🧬 Filesystems avancés – ZFS / BTRFS, l’élite du stockage

Tu veux jouer avec les grands ? Bienvenue dans la ligue des systèmes de fichiers intelligents.

## 🥊 ZFS vs BTRFS – Choisis ton poison

| Critère        | ZFS                           | BTRFS                           |
| -------------- | ----------------------------- | ------------------------------- |
| Stabilité      | Béton armé (originel Solaris) | Correct, mais encore capricieux |
| Snapshots      | Oui (puissants)               | Oui (plus légers)               |
| RAID           | Géré par ZFS nativement       | Doit passer par mdadm           |
| Compression    | Transparent, ultra propre     | Aussi, mais moins mature        |
| RAM nécessaire | Beaucoup (≥2Go)               | Modeste                         |

> Si t’as un SSD externe rapide + RAM décente → ZFS.  
> Si t’as juste besoin de snapshots simples → BTRFS.

## 🧪 Installer ZFS

```bash
sudo apt install zfsutils-linux
```

Créer un pool ZFS :

```bash
sudo zpool create ztank /dev/sdX
```

Remplace `/dev/sdX` par ton disque (attention, il sera _effacé_).

Créer un dataset pour `/home` :

```bash
sudo zfs create ztank/home
sudo rsync -av /home/ /ztank/home/
```

Modifier `/etc/fstab` ou monter via `zfs set mountpoint=/home ztank/home`

## 🧪 Installer BTRFS

```bash
sudo apt install btrfs-progs
```

Formatage d’un disque :

```bash
sudo mkfs.btrfs -f /dev/sdX
```

Montage avec options utiles :

```bash
sudo mount -o compress=zstd,autodefrag /dev/sdX /mnt/data
```

Créer un snapshot :

```bash
sudo btrfs subvolume snapshot /mnt/data /mnt/data_snap_$(date +%F)
```

## 💡 Astuces Pro

- Tu veux faire des snapshots auto ? Utilise `cron` ou `systemd timers`.
- Pour BTRFS : crée des sous-volumes `@`, `@home`, `@log` pour séparer les données comme un chef.
- Pour ZFS : surveille `zpool status` et `zfs list` régulièrement.

> Si tu sais pas ce que tu fais, t’es à deux commandes d’un carnage.
> Mais si tu maîtrises, c’est la Rolls du filesystem. À toi de voir.
