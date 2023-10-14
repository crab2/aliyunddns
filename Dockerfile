# 使用 Node.js 14 作为基础镜像
FROM node:alpine


ENV KEY_ID="输入你的阿里云key_id"
ENV KEY_SECRET="输入你的阿里云KEY_SECRET"
ENV DOMAIN="输入你的主域名"
ENV SUB_DOMAIN="输入你的二级域名"
ENV CHECK_CYCLE="输入你的检查周期，单位为秒"


# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将 TypeScript 代码复制到工作目录
COPY . .

# 编译 TypeScript 代码
RUN npm run build

RUN rm -rf src

# 暴露端口
EXPOSE 3000

# 启动应用程序
CMD [ "npm", "start" ]