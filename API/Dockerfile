FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
EXPOSE 8080

# copy csproj and Restore as distinct layers
COPY *.csproj ./
RUN dotnet restore
# copy everything else and Build and publish a release
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]