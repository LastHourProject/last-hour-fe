FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --ignore-engines

COPY . .

ENV NEXT_PUBLIC_API_BASE_URL=https://lasthour.com

RUN yarn build

FROM node:19-alpine AS production-stage

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --ignore-engines

COPY --from=build-stage /app/next.config.mjs ./
COPY --from=build-stage --chown=node:node /app/.next ./.next
COPY --from=build-stage /app/public ./public

EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
