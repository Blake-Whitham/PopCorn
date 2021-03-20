#!/bin/bash
cd /Users/blake/Desktop/MVP/PopCorn
echo "pushing to feature branch: $(date)"
chmod 777 log.txt
chmod 777 AutoPush.sh


echo "pushing to feature branch: $(date)" >> log.txt
git push origin feature

#55 11 * * 1-5 /bin/bash//Users/blake/Desktop/MVP/PopCorn/AutoPush.sh