pipeline {
    agent any

    environment {
        dockerRegistry = 'https://index.docker.io/v1/'
        dockerCreds = credentials('dockerhub-credentials')
        backendImage = 'auth-backend'
        frontendImage = 'auth-frontend'
    }

    stages {
        stage('Build Backend') {
            steps {
                script {
                    def backendPath = 'backend'
                    if(fileExists(backendPath)){
                        //bat-windows linux/macos - sh
                        bat "docker build -t ${backendImage}:latest ${backendPath}" //build the img
                        bat "docker tag ${backendImage} thepurpleaxe/auth-backend:auth-backend" // tag image
                    }
                    else{
                        error "Backend directory not found"
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    def frontendPath = 'frontend'
                    if(fileExists(frontendPath)){
                        //bat-windows linux/macos - sh
                        bat "docker build -t ${frontendImage}:latest ${frontendPath}" //build the img
                        bat "docker tag ${frontendImage} thepurpleaxe/auth-frontend:auth-frontend" // tag image
                    }
                    else{
                        error "Frontend directory not found"
                    }
                }
            }
        }


        stage('Push Backend'){
            steps{
                script{
                    docker.withRegistry(dockerRegistry,"dockerhub-credentials")
                    echo "Pushing backend image to docker hub"
                    bat "docker push thepurpleaxe/auth-backend:${backendImage}"
                }
            }
        }
        stage('Push Frontend'){
            steps{
                script{
                    docker.withRegistry(dockerRegistry, "dockerhub-credentials")
                    echo "Pushing frontend image to docker hub"
                    bat "docker push thepurpleaxe/auth-frontend:${frontendImage}"
                }
            }
        }

    }
     post{
        always {
            echo "Pipeline finished"
        }
        failure{
            echo "Pipeline failed"
        }
    }

}
