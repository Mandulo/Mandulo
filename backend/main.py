import boto3



def main():
    s3 = boto3.client(s3)
    rekognition = boto3.client('rekognition', region_name = 'us-eat-1')
    dynamodbTableName = 'student-record'
    dynamodb = boto3.client('dynamodb', region_name = 'us-east-1')
    studentTable = dynamodb.Table(dynamodbTableName)

def lambda_handler(event, context):
    print(event)
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    try:
        response = index_student_image(bucket,key)
        print(response)
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            faceId = response['FaceRecords'][0]['Face']['FaceId']
            name = key.split('.')[0].split('_')
            firstName = name[0]
            lastName = name[1]
            #register_student = 



    except Exception as e:
        print(e)
        print('Error processing object {} from bucket {}. '.format(key, bucket))
        raise e

if __name__ == "__main__":
    main()