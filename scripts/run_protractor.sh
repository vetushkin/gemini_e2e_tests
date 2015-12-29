#!/bin/bash
#/usr/bin/Xvfb :1 -screen 0 1024x768x24 &
#export DISPLAY=:1
#echo 'display is set'


# Default to working directory
HOME_DIR=${PWD}
LOCAL_REPO="$HOME_DIR/protractor_e2e_tests"
# Default to git pull with FF merge in quiet mode
GIT_COMMAND="git pull --quiet"
ES5_DIR="$LOCAL_REPO/es5"
# User messages
GU_ERROR_FETCH_FAIL="Unable to fetch the remote repository."
GU_ERROR_UPDATE_FAIL="Unable to update the local repository."
GU_ERROR_NO_GIT="This directory has not been initialized with Git."
GU_INFO_REPOS_EQUAL="The local repository is current. No update is needed."
GU_SUCCESS_REPORT="Update complete."

#Check Gulp status
#pgrep gulp > /dev/null && gulp_status=1
#if [ $gulp_status -eq 1 ]
#    then
#    echo "Gulp is Running"
#else
#    echo "Starting gulp"
#    cd $LOCAL_REPO && gulp babel & > /dev/null
#fi


#if [ $# -eq 1 ]; then
#  LOCAL_REPO="$1"
 cd "$LOCAL_REPO"
#fi

if [ -d ".git" ]; then
  # update remote tracking branch
  git remote update >&-
  if (( $? )); then
      echo $GU_ERROR_FETCH_FAIL >&2
      exit 1
  else
      LOCAL_SHA=$(git rev-parse --verify HEAD)
      REMOTE_SHA=$(git rev-parse --verify FETCH_HEAD)
      if [ $LOCAL_SHA = $REMOTE_SHA ]; then
          echo $GU_INFO_REPOS_EQUAL
          #exit 0
      else
          echo "Deleting es5 directory"
          rm -rf $ES5_DIR
          $GIT_COMMAND
          cd $LOCAL_REPO && gulp babel > $HOME_DIR/gulp.log
          sleep 10
          if (( $? )); then
              echo $GU_ERROR_UPDATE_FAIL >&2
              exit 1
          else
              echo $GU_SUCCESS_REPORT
          fi
      fi
  fi
else
  echo $GU_ERROR_NO_GIT >&2
  exit 1
fi
#exit 0


echo "Start Selenium server via xvfb"
xvfb-run webdriver-manager start > /dev/null 2>&1 &

# wait until selenium is up
echo "Wait for selenium server"
while ! curl http://localhost:4444/wd/hub/status &>/dev/null; do :; done

usage() { echo "Usage: $0 [-s suitName] [-b browserName] [-t siteName]" 1>&2; exit 1; }

while getopts ":s:b:t:" o; do
    case "${o}" in
        s)
            s=${OPTARG}
            ;;
        b)
            b=${OPTARG}
            ;;
	t)
	    t=${OPTARG}
	    ;;
        *)
            usage
            ;;

    esac
done

if [ z$s == 'z' ]
then
    usage;
fi

if [ z$b == 'z' ]
then
    usage;
fi

if [ z$t == 'z' ]
then
    usage;
fi

echo "s currently is: $s, b currently is: $b and site is: $t"
echo "Running tests............"
protractor $LOCAL_REPO/$t --suite $s --capabilities.browserName $b

echo "Stop the selenium listen mode"
curl -s -L http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer > /dev/null 2>&1
