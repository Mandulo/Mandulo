# Automated Attendance Checker



### College Attendance with AWS Rekognition and Cloud Computing
#### Demo video 
https://github.com/Denison-Library-Mandulo/Denison-Lib-Mandulo/assets/106914387/81704e7e-faf6-4233-8a58-af152800bf65

### Description
Manage your attendance easily and efficiently with AWS{S3, DynamoDB, API Gateway, Lambda}, a python-based tool for automated deployment, and node-js. 

### AWS Rekognition
An AWS service that allows for image and video analysis. Using deep learning technology, Rekognition can idntify objects, people, text, scenes, and activities, as well as detect any inappropriate content. It also provides features for facial recognition and analysis, making it a versatile tool for various applications, including our attendance system where it assists in recognizing and verifying student faces for attendance tracking. 

rekognition Api is accessible through python. https://docs.aws.amazon.com/managedservices/latest/userguide/rekognition.html 

### Workflow overview
![KakaoTalk_Photo_2023-10-29-10-41-29](https://github.com/Denison-Library-Mandulo/Denison-Lib-Mandulo/assets/108073642/afce95e8-97fc-411d-8dd6-e357867667d8)

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

### Authentication
* Authentication to check attendance of students, user may take full class picture and upload via our web-app.

* Image will be send to appropriate AWS S3 bucket through API Gateway we built. Whenever there is a change occur in S3 bucket, it triggers our lambda function to be executed.

* Our authentification lambda function will then detect each of faces that can be found in given picture, sort them with unique faceIDs. AWS Rekognition ML model will then compare each faces with the collection of faces - user's pre-initialized student face database. If machine finds similar face as much as they can be stated as same person, it will update attendance status in the DynamoDB  




