# nestjs monorepo boilerplate

nestjs monorepo 생성

```
// nest-cli로 프로젝트 생성
nest new monorepo-nestjs

// service component 생성
nest g app auth-service
nest g app event-service

// app에서 공통 사용될 lib생성
nest g lib core
nest g lib modules
nest g lib utils

// 기존 기본 프로젝트는 삭제
rm -rf app/monorepo-nestjs

```

### nest-cli.json 수정

위에서 apps, libs cli로 생성한 projects에 자동으로 추가되어있음
기존에 monorepo로 안되있는 설정인 최상위 키에서 sourceRoot, root, compilerOptions, monorepo-nestjs삭제
```
{
  // "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  // "sourceRoot": "apps/monorepo-nestjs/src",
  "monorepo": true,
  // "root": "apps/monorepo-nestjs",
  // "compilerOptions": {
  //  "webpack": true,
  //  "tsConfigPath": "apps/monorepo-nestjs/tsconfig.app.json"
  // },
  "projects": {
    "entity": {
      "type": "library",
      "root": "libs/entity",
      "entryFile": "index",
      "sourceRoot": "libs/entity/src",
      "compilerOptions": {
        "tsConfigPath": "libs/entity/tsconfig.lib.json"
      }
    },
    "repository": {
      "type": "library",
      "root": "libs/repository",
      "entryFile": "index",
      "sourceRoot": "libs/repository/src",
      "compilerOptions": {
        "tsConfigPath": "libs/repository/tsconfig.lib.json"
      }
    },
    "event-service": {
      "type": "application",
      "root": "apps/event-service",
      "entryFile": "main",
      "sourceRoot": "apps/event-service/src",
      "compilerOptions": {
        "tsConfigPath": "apps/event-service/tsconfig.app.json"
      }
    },
    "auth-service": {
      "type": "application",
      "root": "apps/auth-service",
      "entryFile": "main",
      "sourceRoot": "apps/auth-service/src",
      "compilerOptions": {
        "tsConfigPath": "apps/auth-service/tsconfig.app.json"
      }
    }
  }
}


```