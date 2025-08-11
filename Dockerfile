FROM node:20-bookworm-slim

COPY . /app
WORKDIR /app

RUN set -x \
    && yarn install

ENV VITE_API_URL="http://localhost:8000"
ENTRYPOINT ["yarn"]
CMD ["dev", "--host", "0.0.0.0"]

# FROM nginx:1.25-bookworm

# COPY /rootfs/ /
# COPY --from=build /app/dist /app
