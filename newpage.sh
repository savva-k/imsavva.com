#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "The utility creates a new markdown post empty template."
    echo ""
    echo "Usage:"
    echo "./newpage.sh page_name_aka_slug"
    exit 1
fi

TARGET_FOLDER="src/markdown-posts"
FOLDER="$TARGET_FOLDER/$1"
INDEX_FILE="$FOLDER/index.md"

echo "Creating page $INDEX_FILE"
mkdir -p "$FOLDER/images"

echo "---" > $INDEX_FILE
echo "title: \"Title\"" >> $INDEX_FILE
echo "date: \"$(date +'%Y-%m-%d')\"" >> $INDEX_FILE
echo "categories: [ \"Any String\" ]" >> $INDEX_FILE
echo "tags: [ \"any string\" ]" >> $INDEX_FILE
echo "image: images/main.png" >> $INDEX_FILE
echo "---" >> $INDEX_FILE
echo "" >> $INDEX_FILE
echo "Markdown goes here" >> $INDEX_FILE

echo "Done."
