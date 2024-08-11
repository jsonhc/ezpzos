
pipeline {
    agent any

    stages {
        stage('git checkout') {
            agent {
                node {
                    label 'slave'
                }
            }
            steps {
               
                dir('EZPZOS.Core') {  // 将代码检出到指定目录
                    git branch: 'main', url: 'https://github.com/EZPZ-OS/EZPZOS.Core.git'
                
            }
        }

         stage('git checkout') {
            agent {
                node {
                    label 'slave'
                }
            }
            steps {
               
                dir('EZPZOS.Web') {  // 将代码检出到指定目录
                    git branch: 'main', url: 'https://github.com/EZPZ-OS/EZPZOS.Web.git'
                
            }
        }

        //  stage('git checkout') {
        //     agent {
        //         node {
        //             label 'slave'
        //         }
        //     }
        //     steps {
               
        //         dir('EZPZOS.Express') {  // 将代码检出到指定目录
        //             git branch: 'main', url: 'https://github.com/EZPZ-OS/EZPZOS.Express.git'
                
        //     }
        // }

        // stage('build') {
        //     agent {
        //         node {
        //             label 'slave'
        //         }
        //     }
        //     steps {
        //         // 
        //         dir() { 
        //             sh "npm run build"
        //         }
        //         dir("https://github.com/EZPZ-OS/EZPZOS.Web.git") { 
        //             sh "npm run build"
        //             stash includes: 'dist/', name: 'dist'
        //         }
        //     }
        
        // }

