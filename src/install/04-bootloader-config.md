# 🧬 Configuration du bootloader – Sculptons la bête

## 🧨 Pourquoi modifier ?

- Pour booter sur un SSD (et pas une microSD de clown)
- Pour désactiver l’HDMI si t’en as pas besoin (gain de watts)
- Pour éteindre **vraiment** ton Pi à l’arrêt (et pas juste le faire dormir comme un hamster)

## 🛠 Édition du bootloader config

```bash
sudo -E rpi-eeprom-config --edit
```

Change (ou ajoute) ces lignes :

```ini
BOOT_ORDER=0xf41
DISABLE_HDMI=1
POWER_OFF_ON_HALT=1
WAKE_ON_GPIO=1
```

## 🧠 Explications rapides

- `BOOT_ORDER=0xf41` : USB > SD > Network > Repeat or die
- `DISABLE_HDMI=1` : HDMI OFF (utile en headless)
- `POWER_OFF_ON_HALT=1` : éteint vraiment l’alim
- `WAKE_ON_GPIO=1` : autorise réveil via pin GPIO (si t’es un bricoleur)

### 🔁 Sauvegarde & Reboot

```bash
sudo reboot
```

Et voilà. T’as sculpté ton bootloader comme un chirurgien binaire.
Pas de retour en arrière. Pas de pitié.
