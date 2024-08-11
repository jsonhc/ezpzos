pipeline {
    agent any

    stages {
        stage('git checkout Core') {
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
        } // 关闭 stage('git checkout Core')

        stage('git checkout Web') { 
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
        } // 关闭 stage('git checkout Web')

        // 如果你要加入更多的 stage，请确保它们被正确关闭

        // Uncomment if needed
        // stage('git checkout Express') {
        //     agent {
        //         node {
        //             label 'slave'
        //         }
        //     }
        //     steps {
        //         dir('EZPZOS.Express') {  // 将代码检出到指定目录
        //             git branch: 'main', url: 'https://github.com/EZPZ-OS/EZPZOS.Express.git'
        //         }
        //     }
        // } // 关闭 stage('git checkout Express')

        // Uncomment if needed
        // stage('build') {
        //     agent {
        //         node {
        //             label 'slave'
        //         }
        //     }
        //     steps {
        //         dir('EZPZOS.Core') { 
        //             sh "npm run build"
        //         }
        //         dir('EZPZOS.Web') { 
        //             sh "npm run build"
        //             stash includes: 'dist/', name: 'dist'
        //         }
        //     }
        // } // 关闭 stage('build')
    } // 关闭 stages
} // 关闭 pipeline
