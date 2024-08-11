
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
                    echo "Build EZPZOS.Core success"
                }
            }
        }

        stage('Build EZPZOS.Web') {
            steps {
                dir('EZPZOS.Web') { 
                    sh "npm install Buffer"
                    sh 'npm install'
                    sh 'npm run build'
                     echo "Build EZPZOS.Web success"
                }
            }
        }

        stage('Frontend Unit Tests') {
             steps {
                 dir('EZPZOS.Web') { 
                 sh 'npm run test'  // 执行单元测试
        }

        







    }
}



        // Uncomment if needed
        // stage('Build EZPZOS.Express') {
        //     steps {
        //         dir('EZPZOS.Express') { 
        //             sh 'npm install'
        //             sh 'npm run build'
        //         }
        //     }
        // }
    }
}


