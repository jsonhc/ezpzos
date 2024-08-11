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
                }
            }
        }

        // Uncomment if needed
        // stage('Checkout EZPZOS.Web') {
        //     steps {
        //         dir('EZPZOS.Web') {
        //             git credentialsId: 'Github-ssh-key', branch: 'main', url: 'git@github.com:yeye-git/ezpzos.git'
        //         }
        //     }
        // }

        // Uncomment if needed
        // stage('Checkout EZPZOS.Express') {
        //     steps {
        //         dir('EZPZOS.Express') {
        //             git credentialsId: 'Github-ssh-key', branch: 'main', url: 'git@github.com:yeye-git/EZPZOS.Express.git'
        //         }
        //     }
        // }

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
