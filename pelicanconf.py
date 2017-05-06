#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Sergio Badillo'
SITENAME = 'SergioBadillo'
SITEURL = ''

THEME = 'themes/pure'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'English'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

STATIC_PATHS = [
    'images', 
    'extra/favicon.ico'
]
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'}
}

# Markup
TYPOGRIFY = True

# ****************************************************************************
# *                            Pure theme configs:                           *
# ****************************************************************************

# COVER_IMG_URL - Set the sidebar image for homepage.
# PROFILE_IMAGE_URL - Set the image/logo for the top circle cutout on sidebar.
TAGLINE = 'Tagline. Used for the page titles and some meta tags' # Used for the page titles and some meta tags.
# DISQUS_ON_PAGES - Set this to True to enable disqus comments in pages.
# DISQUS_SITENAME - Set this to enable disqus comments in articles.

FAVICON = 'favicon.ico'

# GOOGLE_ANALYTICS - Set the Google Analytics code (eg. "UA-000000-00")
# PIWIK_URL and PIWIK_SITE_ID - Set the URL and site-id for Piwik tracking. (Without 'http://')

# Social links syntax: (icon, link).
# see icons here: http://fontawesome.io/cheatsheet/ (remove fa- from name)
SOCIAL = (
    # ('github', 'https://github.com/sbadillo/'),
    # ('address-card', 'https://doyoubuzz.com/sergio-badillo'),
    # ('linkedin-square', 'https://www.linkedin.com/in/sergiobadillo'),
)