pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = '897244716306'
        AWS_REGION = 'ap-southeast-2' // 修正这里的区域名称
        ECR_REPO_NAME = 'ezpzos'
        IMAGE_TAG = '1.0'
    }

    tools {
        nodejs "NodeJS22.6"
    }

    stages {
        stage('Checkout EZPZOS.Core') {
            steps {
                git credentialsId: 'Github-ssh-key', branch: 'main', url: 'git@github.com:yeye-git/ezpzos.git'
            }
        }

        stage('Build EZPZOS.Core') {
            steps {
                dir('EZPZOS.Core') { 
                    sh 'npm install'
                    sh 'npm run build'
                    echo "Build core success"
                }
            }
        }

        stage('Build EZPZOS.Web') {
            steps {
                dir('EZPZOS.Web') { 
                    sh 'npm install'
                    sh 'npm install Buffer'
                    sh 'npm run build'
                    echo "Build web success"
                    sh 'ls -la dist/'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                script {
                    sh 'docker --version'
                    dockerImage = docker.build("${ECR_REPO_NAME}:${IMAGE_TAG}")
                }
            }
        }

       stage('Login to ECR') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AWS']]) {
                        sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com'
                    }
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                script {
                    sh 'docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                script {
                    sh 'docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}'
                }
            }
        }

    } // 关闭 stages 块
} // 关闭 pipeline 块
