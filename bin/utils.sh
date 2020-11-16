#! /bin/bash

PROJECT_ROOT="/home/seb/Documents/pauavelo.fr_source"
cd "$PROJECT_ROOT/content"

# créer des liens ou copier à la racine du répertoire "static"
find  -type f \
      -regextype posix-extended -iregex '.*\.(gif|html|gpx|mov|mp3|mp4|pdf|svg|ts|webm|xcf)$' \
      -exec ln -f -s -r "{}" "$PROJECT_ROOT/static/" \;
      # créer des liens

#      -exec git mv "{}" "$PROJECT_ROOT/static/" \;
      # déplacer

#      -exec cp "{}" "$PROJECT_ROOT/static/" \;
      # copier
