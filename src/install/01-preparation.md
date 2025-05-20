# 🧰 Préparation – Matériel & Pré-install

## 🔌 Ce qu’il te faut (sinon tu fais semblant)

- Raspberry Pi 5 (évidemment)
- Alim 5V/5A USB-C **officielle** (pas un vieux chargeur de téléphone)
- Carte microSD **UHS-I** ou SSD NVMe + adaptateur USB 3.2
- Clavier, souris, écran HDMI
- Ethernet ou Wi-Fi (spoiler : Ethernet > Wi-Fi)
- PC avec baloche pour flasher l’OS (et Balena Etcher)

## 📦 Téléchargement image Ubuntu

Va là : <https://ubuntu.com/download/raspberry-pi>

Choisis **Ubuntu Server 22.04 LTS** pour arm64 (le Desktop = souffrance inutile).

## 💣 Formatage de la carte microSD

Utilise [**Raspberry Pi Imager**](https://www.raspberrypi.com/software/) ou [**Balena Etcher**](https://etcher.balena.io/) :

- Sélectionne l’image `.img.xz` téléchargée
- Flash sur carte microSD ou SSD
- Éjecte proprement (pas comme un sauvage)

## 📎 (Optionnel mais utile) Config initiale `user-data`

Sur la partition `system-boot` du média flashé :
Crée un fichier `user-data` (cloud-init) pour préconfigurer :

```yaml
#cloud-config
users:
  - name: tonuser
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: users, admin
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...
```
