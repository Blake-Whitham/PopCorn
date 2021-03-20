#!/bin/bash
cd /Users/blake/Desktop/MVP/PopCorn
echo "pushing to native branch: $(date)"
chmod 777 log.txt

echo "pushing to native branch: $(date)" >> log.txt
git push origin native

#55 11 * * 1-5 /bin/bash//Users/blake/Desktop/MVP/PopCorn/AutoPush.sh