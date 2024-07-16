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
                    if (fileExists(backendPath)) {
                        bat "docker build -t ${backendImage}:latest ${backendPath}" // Build the image
                        bat "docker tag ${backendImage} thepurpleaxe/auth-backend:${backendImage}" // Tag image
                    } else {
                        error "Backend directory not found"
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    def frontendPath = 'frontend'
                    if (fileExists(frontendPath)) {
                        bat "docker build -t ${frontendImage}:latest ${frontendPath}" // Build the image
                        bat "docker tag ${frontendImage} thepurpleaxe/auth-frontend:${frontendImage}" // Tag image
                    } else {
                        error "Frontend directory not found"
                    }
                }
            }
        }

        stage('Push Backend') {
            steps {
                script {
                    docker.withRegistry(dockerRegistry, dockerCreds) {
                        echo "Pushing backend image to Docker Hub"
                        bat "docker push thepurpleaxe/auth-backend:${backendImage}"
                    }
                }
            }
        }

        stage('Push Frontend') {
            steps {
                script {
                    docker.withRegistry(dockerRegistry, dockerCreds) {
                        echo "Pushing frontend image to Docker Hub"
                        bat "docker push thepurpleaxe/auth-frontend:${frontendImage}"
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
