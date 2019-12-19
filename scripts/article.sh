#!/usr/bin/env bash
set -e

read -p "Enter your title: " TITLE

if [[ -z ${TITLE} ]]; then
    echo "Title should not be empty"
    exit 1
fi

ARTICLE_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
FORMATTED_DATE=$(date +%F)

ARTICLE_DIR=src/pages/articles
TEMPALTE_PATH=temp---template/
NEW_PATH="${FORMATTED_DATE}---$TITLE"

## Go to the directory first
cd $ARTICLE_DIR

mkdir $NEW_PATH
cp -r $TEMPALTE_PATH $NEW_PATH

TARGET=${NEW_PATH}/index
sed "s/{{DATE}}/$ARTICLE_DATE/g" $TARGET > $TARGET

echo "Your new article is ready!"



