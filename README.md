# Overview
Serverless Frameworkを用いて、以下のことを行います。

* S3でホストされた静的Webサイトの作成
* CloudFrontを使用してWebサイトのページを公開
* 「index.html」をLambdaでS3に保存

これによりWebサイトが構築されます。

CloudFormationで出力されたURLを開くとWebサイトにアクセスできます。

# Process
## STEP 1
```
serverless install -u https://github.com/5hintaro/sample-website-sls.git -n sample-website-sls  
cd sample-website-sls
```

## STEP 2
```
sls deploy -v
```

## STEP 3
```
sls invoke -f s3put -l
```

## STEP 4
```
aws cloudformation describe-stacks --stack-name sample-website-sls-dev
```

コマンド入力後、"Outputs"にある以下の値を確認します。

- "OutputKey": "WebsiteURL"
- "OutputKey": "CloudFrontURL"

上記2つの"OutputValue"にあるURLをブラウザで開きます。  
両方とも「Welcome!」と表示されたら確認完了です。

## Clean up
```
aws s3api delete-object --bucket sample-website-sls --key index.html  
sls remove
```