#!/bin/bash
cd /Users/blake/Desktop/MVP/PopCorn
echo "pushed to feature branch: $(date)"
chmod 777 log.txt
chmod 777 AutoPush.sh


echo "pushed to feature branch: $(date)" >> log.txt
git checkout feature
git push origin feature

#55 11 * * 1-5 /bin/bash//Users/blake/Desktop/MVP/PopCorn/AutoPush.sh

# launchctl unload /Library/LaunchDaemons/com.auto-push.plist
# launchctl load /Library/LaunchDaemons/com.auto-push.plist