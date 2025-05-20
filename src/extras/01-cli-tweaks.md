# 🧨 CLI Tweaks – Le terminal, mais version boostée

Le shell, c’est ton dojo. Et là, on va l’armer jusqu’aux dents.

## ⚙️ Change ce shell en zsh (parce que bash, c’est pour les stagiaires)

```bash
sudo apt install zsh
chsh -s $(which zsh)
```

Puis redémarre ta session (ou tape `zsh` pour tester).

## 🎩 Installe Oh My Zsh (la crème du zsh)

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Plugins à activer dans `~/.zshrc` :

```bash
plugins=(git docker systemd z sudo)
```

## 🌈 Ajoute un thème qui a de la gueule

Modifie la ligne :

```bash
ZSH_THEME="agnoster"
```

Ou installe `powerlevel10k` :

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

Puis :

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

## 🚀 Histoire, correction, auto-suggestions

Installe ça :

```bash
sudo apt install fzf
```

Puis ajoute :

```bash
source /usr/share/doc/fzf/examples/key-bindings.zsh
source /usr/share/doc/fzf/examples/completion.zsh
```

Et installe :

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
```

Dans `.zshrc` :

```bash
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## 📁 Naviguer comme un dieu avec `zoxide`

```bash
curl -sS https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | bash
```

Ajoute à `.zshrc` :

```bash
eval "$(zoxide init zsh)"
```

Utilisation :

```bash
z /etc
z /home
```

> Tu téléportes partout. Comme un ninja en ligne de commande.

## ⏱️ Gain de temps bonus

Ajoute dans `.zshrc` :

```bash
alias ll='ls -lah --color=auto'
alias gs='git status'
alias please='sudo $(fc -ln -1)'
```

> Ton shell est ton outil de guerre. Le rendre plus rapide, plus précis, plus stylé, c’est pas du luxe.
> C’est de la survie.
