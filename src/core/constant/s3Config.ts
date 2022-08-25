import axios from 'axios'

export const getS3Config: any = async () => {
  const { data } = await axios.get('http://localhost:4000/config/s3')

  const config = {
    bucketName: 'gram-img',
    dirName: 'upload-img',
    region: 'ap-northeast-2',
    accessKeyId: data.accessKeyId,
    secretAccessKey: data.secretAccessKey,
  }
  return config
}
