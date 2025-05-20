# 🚀 Boot NVMe – Parce que la microSD, c’est pour les touristes

## 🧠 Pré-requis matériel

- Un SSD NVMe (genre Kingston NV2, Crucial P3)
- Un boîtier USB 3.2 **avec chipset Realtek ou JMicron** (évite Ugreen & Co)

## 🔍 Identifier ton SSD

```bash
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT
```

Tu dois voir un `/dev/sda` ou équivalent. S’il est pas là : vérifie ton câble, ton chipset, ou ton karma.

## 🧹 Formater le SSD en ext4

```bash
sudo mkfs.ext4 /dev/sda1
sudo mkdir /mnt/nvme
sudo mount /dev/sda1 /mnt/nvme
```

## 📦 Cloner le système actuel

```bash
sudo rsync -aAXv --exclude={'/mnt','/proc','/sys','/dev','/tmp','/run','/media','/lost+found'} / /mnt/nvme
```

## ✍️ Modifier `/boot/firmware/cmdline.txt`

Repère la ligne avec `root=UUID=...` ou `root=/dev/...`
Remplace par :

```text
root=/dev/sda1 rootfstype=ext4 rootwait
```

## 🧷 Modifier `/etc/fstab`

Monte `/` sur le bon disque :

```bash
UUID=$(blkid -s UUID -o value /dev/sda1)
```

Et édite :

```bash
sudo nano /mnt/nvme/etc/fstab
```

Ajoute ou modifie :

```text
UUID=ton_uuid / ext4 defaults,noatime 0 1
```

## 🔁 Reboote en priant

```bash
sudo reboot
```

Si ça boote pas ? C’est que t’as été nul. Reviens ici, relis. Et corrige.
