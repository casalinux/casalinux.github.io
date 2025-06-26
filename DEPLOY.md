# 🚀 Guia de Publicação no GitHub

Este guia te ajudará a publicar o site Casa Linux no GitHub e configurar o GitHub Pages.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js e pnpm instalados

## 🔧 Passos para Publicação

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `casa-linux-site`
4. Marque como "Public"
5. **NÃO** inicialize com README (já temos um)
6. Clique em "Create repository"

### 2. Configurar Git Local

```bash
# Entre no diretório do projeto
cd casa-linux-site

# Inicialize o git (se ainda não foi feito)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🎉 Initial commit: Casa Linux website"

# Adicione o repositório remoto (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/casa-linux-site.git

# Envie para o GitHub
git push -u origin main
```

### 3. Configurar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **GitHub Actions**
4. O workflow já está configurado e será executado automaticamente

### 4. Verificar Deploy

1. Vá na aba **Actions** do seu repositório
2. Aguarde o workflow "Deploy to GitHub Pages" terminar
3. Seu site estará disponível em: `https://SEU-USUARIO.github.io/casa-linux-site/`

## 🔄 Atualizações Futuras

Para fazer atualizações no site:

```bash
# Faça suas alterações nos arquivos
# Depois:

git add .
git commit -m "✨ Descrição da sua alteração"
git push
```

O deploy será automático a cada push na branch `main`.

## 🛠️ Comandos Úteis

```bash
# Testar localmente
pnpm run dev

# Build para produção
pnpm run build

# Visualizar build local
pnpm run preview

# Verificar erros de lint
pnpm run lint
```

## 🌐 URLs Importantes

- **Repositório**: `https://github.com/SEU-USUARIO/casa-linux-site`
- **Site Publicado**: `https://SEU-USUARIO.github.io/casa-linux-site/`
- **Actions**: `https://github.com/SEU-USUARIO/casa-linux-site/actions`

## ⚠️ Observações Importantes

1. **Nome do Repositório**: Se você mudar o nome do repositório, atualize também o `base` no `vite.config.js`
2. **Branch Principal**: Certifique-se de que a branch principal seja `main`
3. **Permissões**: O repositório precisa ser público para GitHub Pages gratuito
4. **Tempo de Deploy**: O primeiro deploy pode levar alguns minutos

## 🆘 Solução de Problemas

### Site não carrega corretamente
- Verifique se o `base` no `vite.config.js` está correto
- Confirme que o nome do repositório está correto

### Workflow falha
- Verifique se todas as dependências estão no `package.json`
- Confirme que não há erros de sintaxe no código

### Imagens não aparecem
- Certifique-se de que as imagens estão na pasta `src/assets/`
- Verifique se os imports estão corretos

---

🎉 **Parabéns!** Seu site Casa Linux estará online e acessível para o mundo todo!

