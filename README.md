# Automated Attendance Checker


### College Attendance with AWS Rekognition and Cloud Computing
#### Demo video 
https://github.com/Denison-Library-Mandulo/Denison-Lib-Mandulo/assets/106914387/1bcee40d-54b4-4e60-9afd-48e6c3d127c8


### Description
Manage your attendance easily and efficiently with AWS{S3, DynamoDB, API Gateway, Lambda}, a python-based tool for automated deployment, and node-js. 

### AWS Rekognition
An AWS service that allows for image and video analysis. Using deep learning technology, Rekognition can idntify objects, people, text, scenes, and activities, as well as detect any inappropriate content. It also provides features for facial recognition and analysis, making it a versatile tool for various applications, including our attendance system where it assists in recognizing and verifying student faces for attendance tracking. 

rekognition Api is accessible through python. https://docs.aws.amazon.com/managedservices/latest/userguide/rekognition.html 

### Features
* Automated Deployment: Deploy AWS S3 buckets, DynamoDB, and Lambda by sending images from 'app.js' using interface via AWS Gateway. 
* Monitoring: Keep an eye on your resources and operations with AWS CloudWatch integration.

Navigate to the project directory:
```
cd Denison-Lib-Mandulo
```

### Frontend Pipeline
#### Initialization
* School admin needs a web service to upload the photo for a review and get a result back.


#### Introduction
* A Front-end pipeline for uploading images, processing them using AWS services, and displaying the updated results. The pipeline utilizes Express.js as the web framework, Amazon S3 for image storage, and AWS for image processing.


#### Prerequisites

* Node.js and npm installed on your local machine.
* AWS account with S3 bucket and relevant IAM permissions.
* AWS services set up for image processing (e.g., AWS Lambda and Amazon Rekognition).
* Express.js installed globally or as a project dependency.

Make sure to install these dependencies:
* express
* path
* method-override
* aws-sdk
* @aws-sdk/lib-dynamodb
* aws-sdk/client-dynamodb
* multer
* multer-s3

#### Features
* Image Upload: User can upload an image to the web application for attendance check.

* AWS Integration: Uploaded images are sent to an AWS S3 bucket named 'visitor-student-image-storage' for storage.

* Image Processing: AWS Lambda is used to process the uploaded images.
  
* Display: Our web application is connected with AWS DynamoDB and gets the daily attendance record table, named 'student-record' processed data is displayed to the users.

### Backend Pipeline
#### Initialization
* School admin needs to connect student registration photo server data with the Automated Attendance Checker.

#### Processing Image
* Uploaded photo data will be connected with student registration server and find each students in the photo from student registration server data using Amazon Rekognition.

#### Storing data
* Student attendance information need to be stored and updated in the server database.
###### Note: We used Dynomo DB provided by AWS 

### Authentication
* Pictures will be uploaded through Web Application built on Express.js, to AWS S3 bucket, named 'visitor-student-image-storage'. Once this bucket detects a new change, student_authorization, is triggered and the authetication starts. The metadata of each face would be detected and compared with the metadata of the pictures from another S3 butcket, named 'student-image-storage'. If the confidence parameter for a student is higher than the threshold value, then those students are approved for that day's attendance. This information would be updated to the daily attendance record table, named 'student-record', from DynamoDB changing the 'attendance' value with the matching rekognitionId(primary Id) the most would be modified to 'Yes' from 'No'. Otherwise, it does not change. After the table is updated, our Web Application will get updated table and display it to user.



###### Note: Required configurations or integrations are handled via API Gateway.

### Configuration
1. Ensure your AWS CLI is configured with the appropriate credentials
```
aws configure
```




