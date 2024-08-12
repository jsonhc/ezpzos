pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = '897244716306'
        AWS_REGION = 'ap-southeast-2'
        ECR_REPO_NAME = 'ezpzos'
        IMAGE_TAG = '1.0'
    }

    tools {
        nodejs "NodeJS22.6"
    }

    stages {
        stage('Checkout EZPZOS.Core') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                git credentialsId: 'Github-ssh-key', branch: 'main', url: 'git@github.com:yeye-git/ezpzos.git'
            }
        }

        stage('Build EZPZOS.Core') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                dir('EZPZOS.Core') { 
                    sh 'npm install'
                    sh 'npm run build'
                    echo "Build core success"
                }
            }
        }

        stage('Build EZPZOS.Web') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
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
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                echo 'Building Docker Image...'
                script {
                    sh 'docker --version'
                    sh "docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} ."
                    echo "Build docker success"
                   
                }
            }
        }

        stage('Login to ECR') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                script {
                   
                        sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com'
                    
                }
            }
        }

        stage('Tag Docker Image') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                script {
                    sh 'docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Push Docker Image to ECR') {
            agent {
                label 'slave' // 指定运行此 stage 的 agent 标签
            }
            steps {
                script {
                    sh 'docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}'
                }
            }
        }

    } // 关闭 stages 块
} // 关闭 pipeline 块
