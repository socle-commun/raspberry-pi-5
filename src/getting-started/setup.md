# Getting started - Setup

## 1. ⚙️ **Bootloader configuration aux petits oignons**

On va jouer avec la **config de l’EEPROM** comme un chirurgien cardiaque sous stéroïdes.

```bash
sudo -E rpi-eeprom-config --edit
```

Modifie intelligemment (ou copie comme un abruti) :

```ini
BOOT_ORDER=0xf41
DISABLE_HDMI=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=1
```

**Explications pour pas mourir idiot** :

- `0xf41` = USB → SD → Network (parce que t’as pas de NVMe, hein ?)
- `POWER_OFF_ON_HALT` = coupe l’alim à l’arrêt (sinon ça reste sous tension comme un zombie idiot)
- `WAKE_ON_GPIO` = pour te réveiller à distance comme un ninja

---

## 2. 🧠 **Montage SSD NVMe + USB 3.2** (pas pour les fragiles)

Tu veux **booter sur un SSD**, hein ?
Alors t’oublies le Samsung T7 (bridage thermal) et tu prends un **Kingston NV2 ou Crucial P3** dans un **boîtier avec chipset JMicron ou Realtek**, pas ASM.

⚠️ Liste noire : UGREEN, ORICO, Aukey. = brûlure de doigts et corruption de données.

```bash
sudo apt install udisks2 nvme-cli
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT
```

Formate en ext4, clone ton rootfs avec `rsync`, update `/etc/fstab`, change `cmdline.txt`.
T’as pas compris ? Je t’explique **si t’as les tripes**.

---

## 3. 🐳 **Docker comme un patron (rootless et sécurisé)**

Tu vas pas tourner `docker` en root comme un touriste, hein ?

```bash
sudo apt install uidmap
dockerd-rootless-setuptool.sh install
```

Ajoute ça à `.bashrc` :

```bash
export PATH=/usr/bin:$PATH
export DOCKER_HOST=unix:///run/user/1000/docker.sock
```

Et tu peux utiliser Docker **comme un adulte**, pas comme un yolo `sudo docker rm -rf /`.

---

## 4. 📈 **Monitoring façon NASA**

### Netdata (parce que htop c’est pour les scouts)

```bash
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

Interface web en temps réel. Ressources, température, usage disque, swap. Tu verras la lente agonie de ton système en technicolor.

---

## 5. 🛡️ **Sécurité (parce que tu t’es cru invincible)**

```bash
sudo apt install ufw fail2ban
sudo ufw allow ssh
sudo ufw enable
```

- `fail2ban` : pour défoncer les bots russes avant qu’ils ne t’installent un mineur Monero.
- `ufw` : parce que laisser tous les ports ouverts, c’est du suicide assisté.

---

## 6. 🎯 **ZFS ou BTRFS – système de fichiers avancé**

Tu veux des snapshots ? Des volumes dynamiques ? Tu veux **jouer avec les grands** ?

```bash
sudo apt install zfsutils-linux
```

Ou :

```bash
sudo apt install btrfs-progs
```

Utilise sur ton SSD externe ou disque USB3. Mais attention, t’as plus le droit de pleurer quand tu flingues le système.
