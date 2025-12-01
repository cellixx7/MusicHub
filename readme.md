# 🎧 MusicHub — Plataforma Musical, Análises e Rede Social

O **MusicHub** é uma plataforma que combina:

- Integração com Spotify  
- Análises musicais avançadas  
- Ferramentas para playlists  
- Recursos sociais  
- Perfis personalizáveis  
- Webhooks para ouvir músicas sincronizadas  
- Recomendador musical com IA  

Criado para ser um hub completo para amantes de música, com visual moderno, interações sociais e ferramentas inteligentes.

---

## 🔥 Funcionalidades Principais

### 🎵 1. **Análise de Playlists do Spotify**
- Login via OAuth  
- Leitura de playlists  
- Métricas avançadas:
  - BPM  
  - Energia  
  - Valência  
  - Danceability  
  - Popularidade  
- Gráficos interativos  
- Exportar CSV/Excel  
- Recomendações baseadas na análise  

---

### 🔀 2. **Conversor de Playlists**
- Spotify → YouTube  
- YouTube → Spotify  
- Deezer → Spotify  
- Matching inteligente entre faixas  
- Sem download de áudio (100% permitido)  

---

### 🤖 3. **Recomendador Musical Inteligente**
- Analisa padrões de escuta  
- Cria playlists personalizadas  
- Sugere artistas novos  
- Baseado nos serviços Python  

---

### 📊 4. **Histórico Musical Avançado**
- Artistas mais ouvidos  
- Evolução do gosto musical  
- Dashboards interativos  
- Análises estilo "Spotify Wrapped"  

---

### 👥 5. **Recursos de Rede Social**
- Perfis personalizáveis  
- Seguir outros usuários  
- Timeline musical  
- Atividades públicas  
- Futura personalização paga (temas, badges, banners...)  

---

### 🔗 6. **Sincronização Musical (Webhooks)**
- Criar salas para ouvir música sincronizada  
- Links de convite  
- Suporte para Spotify / YouTube  

---

# 🏗️ Arquitetura do Projeto

## **Frontend (React + TypeScript + TailwindCSS)**
- Interface principal  
- Login (Google + Spotify)  
- Dashboard, análise musical, social  
- Comunicação via REST / WebSocket  

## **Backend TS (API principal)**
Responsável por:
- Autenticação OAuth  
- Usuários, perfis e redes sociais  
- Regras de negócio  
- Integração com APIs externas  
- Controle de sessões  

## **Backend Python (Serviços avançados)**
Responsável por:
- Análises matemáticas  
- Recomendações  
- Conversor de playlists  
- Extração de métricas musicais  
- Geração de relatórios  

## **Banco de Dados**
- PostgreSQL (principal)  
- Redis (cache e sessões)  
- MongoDB (opcional para históricos complexos)  

---

# 🛠️ Tecnologias Utilizadas

### **Frontend**
- React  
- TypeScript  
- Vite  
- TailwindCSS  
- React Query  
- Zustand ou Redux (opcional)  

### **Backend TS**
- Node.js  
- Express  
- Prisma  
- JWT / OAuth  
- Zod  

### **Backend Python**
- FastAPI  
- Pandas  
- NumPy  
- Scikit-Learn  
- Spotipy  

---

# 💻 Como Rodar o Projeto Localmente

**1. Clonar repositório**
```bash
git clone https://github.com/SEU_USUARIO/musichub.git
cd musichub
```

### - 🎨 Front 
**📁2. Instale as dependências**

no terminal use o comando:
```bash
cd frontend
npm install
```
**3. Inicie a host:**

no terminal rode o comando:
```bash
npm run dev
```

**4. Entre no site: http://localhost:5173**


### - 🔧 Back


**📁5. Instale as dependências**
```bash
cd back
npm install
```

**5. Crie uma .env**

Dentro da pasta *back* e insira:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/musichub"
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

**6. Migrations**

faça uma migração do prisma
```bash
npx prisma migrate dev
```

7. **Rodar servidor**
```bash
npm run dev
```
## 🟧 Backend Python (Análises)

Esta parte do projeto é responsável por:

- Processamento matemático das playlists  
- Análises avançadas (BPM, energia, valência etc.)  
- Recomendação musical  
- Conversão de playlists  
- Integração com APIs externas  

---



## 🗺️ Roadmap Oficial

### 🟢 MVP (Versão Inicial)

- Login com Google e Spotify  
- Importar playlists  
- Análises básicas  
- Gráficos  
- Exportação CSV  


### 🟡 Versão Social

- Perfil de usuário  
- Seguir outros usuários  
- Timeline  
- Comentários e likes  
- Webhooks  
- Música sincronizada  


### 🔵 Versão Premium

- Temas customizados  
- Banners  
- Perfis avançados  
- Estatísticas exclusivas  
- Paletas pagas  
- Backgrounds especiais  


---

# ✨ Objetivo Final

Criar a plataforma musical mais completa possível:

- Analisador musical  
- Rede social musical  
- Hub de playlists  
- Ferramentas inteligentes  
- Sincronização entre usuários  
- Tecnologia moderna, escalável e visualmente atraente  
