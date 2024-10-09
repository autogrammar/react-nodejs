#!/bin/bash

# Load environment variables
source ../.env

# Check if a backup file is provided
if [ $# -eq 0 ]; then
    echo "Please provide a backup file to restore"
    exit 1
fi

BACKUP_FILE=$1

# Check if the backup file exists
if [ ! -f $BACKUP_FILE ]; then
    echo "Backup file does not exist: $BACKUP_FILE"
    exit 1
fi

# Perform database restore
mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME < $BACKUP_FILE

# Check if restore was successful
if [ $? -eq 0 ]; then
    echo "Database restored successfully from: $BACKUP_FILE"
else
    echo "Error restoring database"
    exit 1
fi