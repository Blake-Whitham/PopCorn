#!/bin/bash

info="Commit: $(date)"
cd /Users/blake/Desktop/MVP/PopCorn
chmod 777 log.txt
chmod 777 RD.sh
echo "$info" >> log.txt

# Ship it
git add log.txt
git commit -m "$info"
