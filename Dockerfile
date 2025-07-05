# Imagen base
FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json ./
COPY app.js ./

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]
