pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo mkdir -p /var/www/portfolio
                sudo rsync -av --delete ./ /var/www/portfolio/
                sudo systemctl reload nginx
                '''
            }
        }
    }
}
