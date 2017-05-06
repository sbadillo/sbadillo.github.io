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

# Pure theme configs:
# COVER_IMG_URL - Set the sidebar image for homepage.
# PROFILE_IMAGE_URL - Set the image/logo for the top circle cutout on sidebar.
TAGLINE = 'Tagline. Used for the page titles and some meta tags' # Used for the page titles and some meta tags.
# DISQUS_SITENAME - Set this to enable disqus comments in articles.