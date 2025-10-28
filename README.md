# Tour Sé de Braga - Guia Turístico Offline

Aplicação web Progressive Web App (PWA) para explorar a Sé de Braga com guia completo de 8 etapas.

## 🎯 Funcionalidades

- ✅ **PWA Instalável** - Instale no telemóvel como app nativa
- ✅ **Funciona Offline** - Use sem ligação à internet
- ✅ Tela de entrada inicial
- ✅ 8 etapas guiadas pela catedral
- ✅ Marcação de progresso
- ✅ Botão para reiniciar o tour
- ✅ Modo escuro/claro
- ✅ Design responsivo

## 📱 Instalar como Aplicação (PWA)

Esta aplicação pode ser instalada no seu telemóvel ou computador como se fosse uma app nativa!

**📖 Consulte o guia completo:** [INSTALAR_PWA.md](./INSTALAR_PWA.md)

### Instalação Rápida:

**Android/Chrome:**
1. Abra a app no navegador
2. Toque em "Adicionar ao ecrã inicial"
3. Pronto! Use como qualquer app

**iPhone/Safari:**
1. Toque no botão Partilhar
2. Seleccione "Adicionar ao Ecrã Principal"
3. Confirme

**Vantagens:**
- 📶 Funciona sem internet
- 🚀 Carrega mais rápido
- 📱 Ecrã completo (sem barra do navegador)
- ✨ Ícone no ecrã inicial

## 📋 Pré-requisitos

Para executar este projecto localmente, necessita de:

- **Node.js** versão 18 ou superior
- **npm** (vem incluído com Node.js)

### Instalar Node.js

Se ainda não tem Node.js instalado:

1. Aceda a [nodejs.org](https://nodejs.org/)
2. Descarregue a versão LTS (recomendada)
3. Execute o instalador e siga as instruções

Para verificar se está instalado, abra o terminal e execute:
```bash
node --version
npm --version
```

## 🚀 Como Executar

### 1. Descarregar o Projecto

Descarregue o projecto como ZIP do Replit ou faça clone se estiver no GitHub.

### 2. Abrir o Terminal

- **Windows**: Abra a pasta do projecto, clique com botão direito e seleccione "Abrir no Terminal" ou use o Command Prompt
- **Mac/Linux**: Abra o Terminal e navegue até à pasta do projecto usando `cd`

### 3. Instalar Dependências

No terminal, dentro da pasta do projecto, execute:

```bash
npm install
```

Este comando irá instalar todas as bibliotecas necessárias. Pode demorar alguns minutos.

### 4. Iniciar a Aplicação

Após a instalação estar completa, execute:

```bash
npm run dev
```

### 5. Abrir no Navegador

A aplicação irá iniciar e verá uma mensagem como:

```
serving on port 5000
```

Abra o navegador e aceda a:

```
http://localhost:5000
```

## 🛑 Para Parar a Aplicação

No terminal onde a aplicação está a correr, pressione:

```
Ctrl + C
```

## 📁 Estrutura do Projecto

```
tour-se-braga/
├── client/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── components/  # Componentes reutilizáveis
│   │   └── ...
├── server/              # Backend (Express)
├── shared/              # Código partilhado
├── attached_assets/     # Imagens da aplicação
├── package.json         # Dependências do projecto
└── README.md           # Este ficheiro
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria versão de produção
- `npm start` - Executa a versão de produção
- `npm run check` - Verifica erros de TypeScript

## 🌐 Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Build**: Vite
- **State Management**: React Hooks
- **Routing**: Wouter

## 📱 PWA (Aplicação Web Progressiva)

Esta aplicação está preparada para funcionar offline. Quando aceder através de um navegador compatível, poderá instalar a aplicação no dispositivo para uso offline.

## ⚠️ Resolução de Problemas

### Porta 5000 já está em uso

Se vir um erro sobre a porta 5000:

1. Pare qualquer outra aplicação que esteja a usar a porta 5000
2. Ou edite o ficheiro `server/index.ts` e altere o número da porta

### Erros ao instalar dependências

Se encontrar erros durante `npm install`:

1. Apague a pasta `node_modules` e o ficheiro `package-lock.json`
2. Execute `npm install` novamente
3. Se persistir, tente `npm install --legacy-peer-deps`

### Página em branco

Se a aplicação abrir mas mostrar página em branco:

1. Verifique a consola do navegador (F12) para erros
2. Certifique-se que executou `npm install` primeiro
3. Tente reinicar a aplicação (Ctrl+C e depois `npm run dev` novamente)

## 📞 Suporte

Para problemas ou questões, consulte a documentação das tecnologias utilizadas ou abra um issue no repositório do projecto.

---

**Desenvolvido com ❤️ para explorar o património histórico português**
