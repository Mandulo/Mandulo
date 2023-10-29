# Automated Attendance


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



### Backend Pipeline
#### Initialization
* School admin needs to connect with student registration photo server data with the attendance tracker.

#### Processing Image
* Uploaded photo data will be connected with student registration server and find each students in the photo from student registration server data using Amazon Rekognition.

#### Storing data
* Student attendance information need to be stored and updated in the server database.
###### Note: We used Dynomo DB provided by AWS 

### Authentication
* Pictures for students will be updated through app.js to AWS S3 bucket, named 'visitor-student-image-storage'. Once this bucket get a new transaction, student_authorization is triggered and the authetication starts. Each faces would be detected and compared with the given the faces from another S3 butcket, named 'student-image-storage'. If Confidence parameter for a student is higher than the threshold = 80, then the students are approved for that day's attendance. This information would be updated to the database, DynamoDB changing the 'attendance' parameter's value of with the matching rekognitionId(primary Id) the most would be modified to 'Yes' from 'No'. Otherwise, it does not change. 



###### Note: Required configurations or integrations are handled via API Gateway.

### Configuration
1. Ensure your AWS CLI is configured with the appropriate credentials
```
aws configure
```




