#!/bin/bash

info="Committed: $(date)"
cd /Users/blake/Desktop/MVP/PopCorn
chmod 777 RD.sh
chmod 777 log.txt
echo "$info" >> log.txt

# Ship it

git add log.txt
git commit -m "$info"

#launchctl unload /Library/LaunchDaemons/com.auto-commit.plist
# launchctl load /Library/LaunchDaemons/com.auto-commit.plist