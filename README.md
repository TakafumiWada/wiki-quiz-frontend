# Welcome to QuizWiki 

![logo (1)](https://user-images.githubusercontent.com/54055746/128136181-dabc5b10-c902-4b55-a653-2f16a6610651.png)


## 概要

QuizWiki は 
`「当たり前の毎日を過ごしている大人たちに新しい発見を提供することで、子供の頃のようなワクワクを呼び覚まし、社会に活力を与える」`
というコンセプトのもと、人生に飽き飽きしている人たちに新しい発見を届けるサービスです。

作品の紹介記事は[こちら](https://note.com/wadeee/n/n2d045697a859)

## アーキテクチャ 

![QuizWiki_アーキテクチャ](https://user-images.githubusercontent.com/54055746/128136366-94dcb35c-697d-415b-98b4-6af5beb5f791.png)

### 各種リポジトリ

- フロントエンド: ここ
- バックエンド: https://github.com/TakafumiWada/wiki-quiz-backend
- フロントエンド(インフラ): https://github.com/TakafumiWada/terraform-wiki-quiz-frontend
- バックエンド(インフラ): https://github.com/TakafumiWada/terraform-wiki-quiz-backend
- API設計書: https://github.com/TakafumiWada/wiki-quiz-api-spec


## wiki-quiz-frontend

### 説明

QuizWikiのフロントエンドです。
記事データを取得APIの取得からゲームのプレイまでを処理します。

### バージョン

```txt
vue : ^2.6.11
vue-router : ^3.2.0
vuex : ^3.4.0
```
