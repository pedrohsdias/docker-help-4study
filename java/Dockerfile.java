FROM openjdk:19-alpine3.15

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
CMD ["./mvnw", "spring-boot:run"]
# CMD ["./mvnw", "spring-boot:run", "-Dspring-boot.run.profiles=mysql"]