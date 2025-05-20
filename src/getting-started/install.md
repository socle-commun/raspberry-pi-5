# Getting started - Install

## 🧱 **Système de base (parce que même un âne a besoin de sabots)**

```bash
sudo apt update && sudo apt upgrade
sudo apt install git curl wget htop neofetch vim build-essential
```

✅ _Pourquoi ?_ Parce que tu vas passer 80% de ton temps dans le terminal à essayer de réparer ce que tu as mal configuré.

## 🌐 **Réseau & Web**

```bash
sudo apt install openssh-server net-tools nmap avahi-daemon
```

✅ _SSH_ : pour pleurer à distance.
✅ _nmap_ : pour te rendre compte que tu ne sais rien du réseau.
✅ _avahi_ : Bonjour. Littéralement. Tu veux faire un réseau local propre ? Installe.

## 🧠 **Dev & Scripts**

```bash
sudo apt install python3 python3-pip nodejs npm docker.io docker-compose
```

✅ _Python_ : obligatoire. Tu vas faire du bricolage, autant avoir du scotch.
✅ _Docker_ : pour encapsuler ton incompétence.
✅ _Node.js_ : parce que tu vas sûrement tenter de lancer un serveur useless à un moment.

## 🖥️ **GUI & Monitoring (pour regarder ton CPU souffrir)**

```bash
sudo apt install gnome-system-monitor lm-sensors gparted
```

✅ _Gnome monitor_ : joli graphique pour constater l’échec de ton script infini.
✅ _Gparted_ : pour massacrer ton disque en pensant savoir ce que tu fais.
✅ _lm-sensors_ : parce que ça chauffe plus qu’un toaster.

## 💾 **Stockage & Partage**

```bash
sudo apt install samba cifs-utils
```

✅ Pour partager des fichiers avec ton PC principal, parce que tu vas forcément foutre des trucs partout sans réfléchir à une structure.

## 🧪 **Bricolage de lab raté / IoT**

```bash
sudo apt install mosquitto mosquitto-clients minicom
```

✅ _MQTT_ : parce que tu vas tenter de parler à un capteur qui ne veut pas de toi.
✅ _minicom_ : pour parler série. Parce que oui, tu vas déboguer à 9600 bauds.

## 🎛️ **Interface web pour Docker (sinon tu vas tout casser)**

```bash
docker run -d -p 9000:9000 \
  --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  portainer/portainer-ce
```

✅ _Portainer_ : clic-clic au lieu de docker run --maudite-ligne-imbitable.

## 🧙‍♂️ **Bonus : trucs que seuls les vrais utilisent (donc pas toi pour l’instant)**

- **Ansible** – pour automatiser… si tu comprends ce que tu fais (spoiler : tu ne comprends pas).
- **Zsh + Oh My Zsh** – pour faire semblant d’être un hacker.
- **Pi-hole** – si t’en as marre des pubs mais pas de la configuration réseau tordue.
