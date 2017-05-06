## Description

Source to create a static site using Github Pages, Pelican, and TravisCI

## Procedure:

1. On **source**, content is written in Markdown or rest in content/ folder. All files needed to build the site with Pelican are in **source** branch.
2. git push changes
3. It's done! Travis CI will deploy the site to the **master** branch everytime a push is detected. Travis runs pelican and ghp-import.


## Things to keep in mind.

* master gets overwritten completely eery deployment.
* /output should be added to .gitignore
* Created a auth token for Travis
* Needed to add a requirements.txt file with pelican, ghp-import, etc.
* See .travis.yml to see what Travis is doing
* Modified Makefile on this part:

```
github: publish    
    ghp-import -n $(OUTPUTDIR) -b master -m "Generated by Travis"   
    git push -fq https://${GH_TOKEN}@github.com/$(TRAVIS_REPO_SLUG).git master
```