#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Sergio Badillo'
SITENAME = 'not a portfolio'
SITEURL = '' 
SITESUBTITLE = ""

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'English'

THEME = 'themes/sb-boot'

PLUGIN_PATHS = ['./pelican-plugins/']
PLUGINS = ["render_math"] 

TYPOGRIFY = True

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


# a Dummy menu
MENUITEMS = (('Blog', '/blog.html'),
	('Categories', '/categories.html'))

# workaround to have a blog kept separatelly:

# 	home.html will be  -->  output/index.html
# 	index.html will be -->  output/blog.html
TEMPLATE_PAGES = {'home.html': 'index.html',}
INDEX_SAVE_AS = "blog.html"


