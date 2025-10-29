# ----------------------------
# 1️⃣ Etapa de Build (Vite)
# ----------------------------
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências primeiro (para usar cache)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build do projeto React (gera a pasta /app/dist)
RUN npm run build


# ----------------------------
# 2️⃣ Etapa de Produção (Nginx)
# ----------------------------
FROM nginx:stable-alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o resultado do build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# (Opcional) adiciona configuração customizada para SPA
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão HTTP
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
