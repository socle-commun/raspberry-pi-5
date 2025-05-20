# 📈 Surveillance du système – Regarde ton Pi souffrir en HD

## 🧰 Basique mais utile : `htop` et `lm-sensors`

```bash
sudo apt install htop lm-sensors
```

- `htop` : vue en couleur de l’enfer CPU/RAM
- `sensors` : pour voir ton Pi suer sa dignité thermique

```bash
sensors
```

## 🎛️ Avancé : Netdata (interface web temps réel)

```bash
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

Accès via : `http://<IP>:19999`

- Graphiques live (CPU, RAM, température, disque)
- Alertes configurables (quand ton SSD fond)
- Ultra léger et sexy

## 🔎 Bonus : `glances`

```bash
sudo apt install glances
```

Lance avec :

```bash
glances
```

Vue globale du système. Pratique. Clair. Et ça fait moins honte quand tu partages un screenshot.
