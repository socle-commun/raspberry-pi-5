import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  base: "/raspberry-pi-5/",
  lang: "fr-FR",
  title: "Raspberry Pi 5",
  description: "Un guide d'installation, de configuration et de paramétrage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Installation",
        items: [
          { text: "Préparation de l'installation", link: "/install/01-preparation" },
          { text: "Premier démarrage", link: "/install/02-first-boot" },
          { text: "Mise à jour du firmware", link: "/install/03-update-firmware" },
          { text: "Configuration du bootloader", link: "/install/04-bootloader-config" }
        ]
      },
      {
        text: "Configuration",
        items: [
          { text: "Réseau & SSH", link: "/setup/01-network" },
          { text: "Utilisateurs & Sécurité SSH", link: "/setup/02-users-ssh" },
          { text: "Docker rootless", link: "/setup/03-docker-rootless" },
          { text: "Boot sur NVMe", link: "/setup/04-nvme-boot" }
        ]
      },
      {
        text: "Système",
        items: [
          { text: "Surveillance du système", link: "/system/01-monitoring" },
          { text: "Pare-feu & Fail2Ban", link: "/system/02-security" },
          { text: "Services et Daemons", link: "/system/03-services" }
        ]
      },
      {
        text: "Avancé",
        items: [
          { text: "Filesystem avancé (ZFS/BTRFS)", link: "/advanced/01-filesystems" },
          { text: "Conteneurs & Portainer", link: "/advanced/02-containers" },
          { text: "Stack Kubernetes minimal", link: "/advanced/03-k8s-stack" }
        ]
      },
      {
        text: "Extras",
        items: [
          { text: "Tweaks CLI", link: "/extras/01-cli-tweaks" },
          { text: "Alias utiles", link: "/extras/02-aliases" },
          { text: "Backup & Restore", link: "/extras/03-backup-restore" }
        ]
      }
    ],

    sidebar: [
      {
        text: "Installation",
        link: "/install",
        collapsed: false,
        items: [
          { text: "Préparation de l’installation", link: "/install/01-preparation" },
          { text: "Premier démarrage", link: "/install/02-first-boot" },
          { text: "Mise à jour du firmware", link: "/install/03-update-firmware" },
          { text: "Configuration du bootloader", link: "/install/04-bootloader-config" }
        ]
      },
      {
        text: "Configuration",
        link: "/setup",
        collapsed: false,
        items: [
          { text: "Réseau & SSH", link: "/setup/01-network" },
          { text: "Utilisateurs & Sécurité SSH", link: "/setup/02-users-ssh" },
          { text: "Docker rootless", link: "/setup/03-docker-rootless" },
          { text: "Boot sur NVMe", link: "/setup/04-nvme-boot" }
        ]
      },
      {
        text: "Système",
        link: "/system",
        collapsed: false,
        items: [
          { text: "Surveillance du système", link: "/system/01-monitoring" },
          { text: "Pare-feu & Fail2Ban", link: "/system/02-security" },
          { text: "Services et Daemons", link: "/system/03-services" }
        ]
      },
      {
        text: "Avancé",
        link: "/advanced",
        collapsed: false,
        items: [
          { text: "Filesystem avancé (ZFS/BTRFS)", link: "/advanced/01-filesystems" },
          { text: "Conteneurs & Portainer", link: "/advanced/02-containers" },
          { text: "Stack Kubernetes minimal", link: "/advanced/03-k8s-stack" }
        ]
      },
      {
        text: "Extras",
        link: "/extras",
        collapsed: false,
        items: [
          { text: "Tweaks CLI", link: "/extras/01-cli-tweaks" },
          { text: "Alias utiles", link: "/extras/02-aliases" },
          { text: "Backup & Restore", link: "/extras/03-backup-restore" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
})
