# 🚀 Astro × Sass Starter Template

## Features

- Sass
- ESLint（JavaScript解析）
- StyleLint（CSS解析・整形）
- Prettier（コード整形）
- Husky（コミット時にESLint・Stylelint・Prettierを実行する）

## Requirements

- Node.js 18

## Getting started

ローカル環境で次のコマンドを実行します。

```shell
git clone https://github.com/H-ymt/astro-sass-starter-pack.git my-app
cd my-app
pnpm install
```

次のコマンドで開発環境を立ち上げます

```shell
pnpm dev
```

http://localhost:4321を開いて、プロジェクトを表示します。

## Commands

各種コマンド

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | パッケージのインストール                         |
| `pnpm run dev`             | `localhost:4321`で開発環境を立ち上げる 　 　　　 |
| `pnpm run build`           | `dist/`にファイルをビルドする 　                 |
| `pnpm run preview`         | ローカルでビルドをプレビューする 　　　　　      |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm prettier`            | Get help using the Astro CLI                     |
| `pnpm eslint`              | Get help using the Astro CLI                     |
