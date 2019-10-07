#!/bin/bash
CORDOVA_DIR="../Allianz_S-D_codova_WK"
if [ ! -d "$CORDOVA_DIR" ]; then
    echo "no file"
    CORDOVA_DIR="../Allianz-SND_cordova"
    echo "$CORDOVA_DIR"
fi

while test $# -gt 0; do
    case "$1" in
    -p | --prod)
        echo -e "\033[94mBuild with Production Mode, build to ipa cordova folder!\033[0m"
        CORDOVA_DIR="../Allianz-SND_cordova"
        exit 0
        ;;
    *)
        break
        ;;
    esac
done

if [ -d "$CORDOVA_DIR" ]; then
    echo -e "\033[94mStart building Angular...\033[0m"
    # npm run build-all
    ng build --prod
    # ng build
    echo -e "\033[94mFinish Angular build! Start building Cordova\033[0m"
    rm -r $CORDOVA_DIR/www && mkdir -p $CORDOVA_DIR/www && cp -R ./dist/Allianz-SND/. $CORDOVA_DIR/www
    cd $CORDOVA_DIR
    echo -e "\033[92mBuild Complete!\033[0m"
else
    echo -e "\033[91mBuild error:cordova pjoject folder doesn't exist in '$CORDOVA_DIR'\033[0m"
fi
