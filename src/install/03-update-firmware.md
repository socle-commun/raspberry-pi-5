# 🧬 Mise à jour du firmware – L’opération à cœur ouvert

## ⚠️ Pourquoi faire ?

- T'as envie d'un boot rapide ?
- D’un HDMI qui fonctionne ?
- De pas te réveiller avec un Pi qui clignote dans le vide ?

Alors **update ton firmware** comme un vrai.

## 🧱 Installation du paquet `rpi-eeprom`

Ubuntu ne le fournit pas par défaut (parce que pourquoi faire simple ?).

```bash
sudo add-apt-repository ppa:ubuntu-raspi2/ppa
sudo apt update
sudo apt install rpi-eeprom
```

## 🔍 Vérification actuelle du firmware

```bash
sudo rpi-eeprom-update
```

Sors pas sans avoir vu :

```text
CURRENT: 2023-xx-xx
LATEST:  2024-xx-xx
```

Si c’est pas à jour, c’est que tu vis dans le passé.

## 🚀 Mise à jour du firmware

```bash
sudo rpi-eeprom-update -a
sudo reboot
```

Et là, tu pries. Mais pas comme une fillette. Comme un admin sérieux.

### 💾 Optionnel (mais vital si tu veux survivre) : clé USB de secours

Télécharge `recovery.bin` ici :
<https://github.com/raspberrypi/rpi-eeprom>

Mets ça sur une clé formatée FAT32, en mode BOOT.
Et garde-la dans ta poche. Comme un talisman contre la stupidité.

### 🧠 Bonus : infos post-reboot

```bash
vcgencmd bootloader_version
```

Si cette commande répond : tu es vivant, et probablement un peu moins nul.
