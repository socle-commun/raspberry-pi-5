# ⚔️ Aliases Utiles – Raccourcis pour warriors fainéants

Parce que taper 36 caractères pour `ls -lah` c’est bien…  
Mais appuyer sur 2 touches, c’est mieux.

## 📂 Navigation & Système

```bash
alias ll='ls -lah --color=auto'
alias la='ls -A'
alias ..='cd ..'
alias ...='cd ../..'
alias c='clear'
alias reload='source ~/.zshrc'
```

## 🔧 Package & mises à jour

```bash
alias update='sudo apt update && sudo apt upgrade -y'
alias install='sudo apt install'
alias remove='sudo apt remove'
alias cleanup='sudo apt autoremove && sudo apt autoclean'
```

## 🐳 Docker

```bash
alias dps='docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"'
alias dclean='docker system prune -af --volumes'
alias dlogs='docker logs -f'
alias dstop='docker stop $(docker ps -q)'
alias drm='docker rm $(docker ps -a -q)'
```

## 🐙 Git

```bash
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gpo='git push origin'
alias gl='git log --oneline --graph --decorate --all'
```

## 🔥 Réseau & debug

```bash
alias ports='sudo lsof -i -P -n | grep LISTEN'
alias ipinfo='ip a && ip r'
alias pingg='ping 8.8.8.8'
alias speed='speedtest-cli'
```

## ☠️ À utiliser avec précaution

```bash
alias fuck='sudo $(fc -ln -1)'
alias rmf='rm -rf'
alias poweroff='sudo poweroff'
alias reboot='sudo reboot'
```

💡 Mets ces aliases dans `~/.zshrc` ou `~/.bash_aliases` selon ton shell.

> Avec ça, tu codes plus vite. Pas mieux, mais plus vite. Et des fois, c’est déjà pas mal.
