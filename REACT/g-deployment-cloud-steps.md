:beginner: _**Steps for building and deploying app to cloud.**_  

:one: _Sign into aws as root or IAM user with S3 bucket privileges_  
:two: _crate the latest version of react project with redux template_  
```sh
 npx create-react-app deploy-aws-react-redux --template redux
```

:three: _build the project for deployment on production_  

:four: _create new bucket_
:point_right: bucket-name   `deploy-aws-react-redux-bucket`
:point_right: Block Public Access settings for this bucket : Uncheck all te boxes  
:point_right: create the bucket  

:four: _configure the bucket_  
:point_right: Properties : Static website hosting : Enable
```
Index document
Specify the home or default page of the website.
index.html
Error document - optional
This is returned when an error occurs.
index.html
```

:four: _configure the permission on s3 bucket_  
:point_right: Edit bucket policy  > Policy Generator
`
Select Type of Policy > S3 bucket policy > Principal *
> Actions : GetObject
> ARN : arn:aws:s3:::arn:aws:s3:::deploy-aws-react-redux-bucket
> Click Add statement
`

:point_right: Generate policy  

```js
{
  "Id": "Policy1684155606913",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1684155556058",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::deploy-aws-react-redux-bucket/*",
      "Principal": "*"
    }
  ]
}
```
:five: _upload the project contents inside build folder_  
:six: _Access the site_
`Bucket>Properties>Static website hosting : <<Url for the app>>  `
