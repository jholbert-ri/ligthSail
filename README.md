# ☁️ App Node.js para Pruebas en AWS Lightsail con CodeDeploy

Este proyecto tiene como objetivo probar el despliegue automático de aplicaciones Node.js en una instancia **Lightsail**, utilizando **AWS CodeDeploy** como mecanismo de entrega continua.

---

## 🚀 Tecnologías utilizadas

- **Node.js + Express**
- **PM2** para gestión del proceso en segundo plano
- **AWS CodeDeploy**
- **AWS S3 (para almacenar el bundle .zip)**
- **AWS IAM & Tags (para enlazar la instancia)**

---

## 📦 Instalación local

```bash
npm install
node index.js
