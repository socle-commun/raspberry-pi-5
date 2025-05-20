# ☸️ Stack Kubernetes Minimal – Cluster maison ou cauchemar sur ARM ?

T’as envie de souffrir ? T’es au bon endroit. Kubernetes sur Pi5, c’est possible. Mais faudra transpirer du YAML.

---

## 🚨 Pré-requis techniques

- Ubuntu 22.04 minimal, à jour
- Docker ou containerd fonctionnel
- Au **moins 2 Go de RAM**
- Un swap bien réglé ou désactivé (ZRAM recommandé)
- Connexion stable (tu vas télécharger des trucs lourds)

## 🧱 Option 1 : k3s – Kubernetes version "light"

> k3s = kubeadm sous stéroïdes pour machines modestes

### 📦 Installation rapide

```bash
curl -sfL https://get.k3s.io | sh -
```

⚠️ Si tu veux utiliser Docker comme runtime (au lieu de containerd) :

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--docker" sh -
```

### ✅ Vérification

```bash
sudo k3s kubectl get nodes
```

## 🧱 Option 2 : MicroK8s (Canonical)

> Plus lourd, mais bien intégré à Ubuntu

```bash
sudo snap install microk8s --classic
sudo usermod -a -G microk8s $USER
newgrp microk8s
```

Vérifie :

```bash
microk8s status --wait-ready
microk8s kubectl get nodes
```

## 📦 Déploiement d’un pod test

```bash
microk8s kubectl create deployment whoami --image=traefik/whoami
microk8s kubectl expose deployment whoami --type=NodePort --port=80
```

Liste le port exposé :

```bash
microk8s kubectl get services
```

## 📈 Interfaces utiles

- [Lens](https://k8slens.dev/) – GUI pour Kubernetes (depuis ton PC)
- [K9s](https://k9scli.io/) – Terminal TUI pour Kubernetes (nerd friendly)

## 🛠️ Tips Pro

- Active les modules utiles (microk8s) :

```bash
microk8s enable dns dashboard ingress metrics-server
```

- Ajoute `~/.kube/config` pour utiliser `kubectl` sans te faire mal :

```bash
mkdir -p ~/.kube
microk8s config > ~/.kube/config
```

## ⚠️ T’es pas prêt pour ça si…

- Tu piges pas les namespaces
- Tu sais pas ce qu’est un ingress
- Tu crois qu’un `deployment.yaml` se fait au pif

> Kubernetes sur Raspberry, c’est comme un katana pour couper des oignons : ça marche, mais faut savoir s’en servir.
