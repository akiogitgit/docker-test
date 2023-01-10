## Dockerの勉強リポジトリ

`docker compose up`

`localhost:3000`

### prismaの設定
- .envファイル作成 DATABASE_URL=mysql://root:password@db:3306/sample
  - mysql://ROOT:PASSWORD@HOST:PORT/DATABASE
- yarn prisma generate
- yarn prisma db push

## コマンド
docker compose up -d
docker compose up -d --build
docker compose down

docker compose exec コンテナ名 ○○
- コンテナに入って、○○を実行する
docker compose exec コンテナ名 bash
- コンテナにターミナルで入る

mysql
docker compose exec db bash
mysql -u root -ppassword
show databases;
show tables from データベース名;
use データベース名;
- データベースに入る
select * from テーブル名;


### フロントが立ち上がらない時
yarnが実行されなかったので、docker-compose.ymlのentrypoint: "yarn dev"を消す。
appのコンテナが立ち上がるので、attached vscodeしてターミナルで `yarn`する
すると、localhost:3000が立ち上がる

### データが取得できない時
- DBが作られてない
  - .envを更新した可能性があれば、再起動する
