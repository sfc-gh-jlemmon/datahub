# Defining environment
ARG APP_ENV=prod

FROM golang:1-alpine3.17 AS binary

ENV DOCKERIZE_VERSION v0.6.1
WORKDIR /go/src/github.com/jwilder

RUN apk --no-cache --update add openssl git tar curl

WORKDIR /go/src/github.com/jwilder/dockerize

RUN go install github.com/jwilder/dockerize@$DOCKERIZE_VERSION

FROM alpine:3 AS base

# Upgrade Alpine and base packages
ENV JMX_VERSION=0.18.0
# PFP-260: Upgrade Sqlite to >=3.28.0-r0 to fix https://security.snyk.io/vuln/SNYK-ALPINE39-SQLITE-449762
RUN apk --no-cache --update-cache --available upgrade \
    && apk --no-cache add curl bash coreutils gcompat sqlite \
    && apk --no-cache add openjdk11-jre --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community \
    && curl -sS https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-runner/9.4.46.v20220331/jetty-runner-9.4.46.v20220331.jar --output jetty-runner.jar \
    && curl -sS https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-jmx/9.4.46.v20220331/jetty-jmx-9.4.46.v20220331.jar --output jetty-jmx.jar \
    && curl -sS https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-util/9.4.46.v20220331/jetty-util-9.4.46.v20220331.jar --output jetty-util.jar \
    && wget --no-verbose https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.24.0/opentelemetry-javaagent.jar \
    && wget --no-verbose https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/${JMX_VERSION}/jmx_prometheus_javaagent-${JMX_VERSION}.jar -O jmx_prometheus_javaagent.jar \
    && cp /usr/lib/jvm/java-11-openjdk/jre/lib/security/cacerts /tmp/kafka.client.truststore.jks
COPY --from=binary /go/bin/dockerize /usr/local/bin

FROM base as prod-install
COPY war.war /datahub/datahub-gms/bin/war.war
COPY metadata-models/src/main/resources/entity-registry.yml /datahub/datahub-gms/resources/entity-registry.yml
COPY docker/datahub-gms/start.sh /datahub/datahub-gms/scripts/start.sh
COPY docker/datahub-gms/jetty.xml /datahub/datahub-gms/scripts/jetty.xml
COPY docker/monitoring/client-prometheus-config.yaml /datahub/datahub-gms/scripts/prometheus-config.yaml
RUN chmod +x /datahub/datahub-gms/scripts/start.sh

FROM base as dev-install
# Dummy stage for development. Assumes code is built on your machine and mounted to this image.
# See this excellent thread https://github.com/docker/cli/issues/1134

FROM ${APP_ENV}-install as final

RUN mkdir -p /etc/datahub/plugins/auth/resources

RUN addgroup -S datahub && adduser -S datahub -G datahub
RUN chown -R datahub:datahub /etc/datahub
USER datahub

ENV JMX_OPTS=""
ENV JAVA_OPTS=""

EXPOSE 8080

HEALTHCHECK --start-period=2m --retries=4 CMD curl --fail http://localhost:8080/health || exit 1

CMD /datahub/datahub-gms/scripts/start.sh
