pipeline {
    agent any

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
    } // 关闭 stages 块
} // 关闭 pipeline 块
