#!/bin/bash

# Load environment variables
source ../.env

# Set backup file name with timestamp
BACKUP_FILE="backup_$(date +"%Y%m%d_%H%M%S").sql"

# Perform database backup
mysqldump -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_FILE

# Check if backup was successful
if [ $? -eq 0 ]; then
    echo "Database backup created successfully: $BACKUP_FILE"
else
    echo "Error creating database backup"
    exit 1
fi