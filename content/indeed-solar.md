title: Indeed, jobs and ideas
date: 2017-07-19
status: draft

Summary: A web app that displays keywords based on Indeed.fr job listings.

Specifics: 

* Topic of job search: Renewable energy -> Solar Energy.
* Indeed API (waiting for authorization mail... ) 
* Client for job search API is available at https://github.com/indeedlabs/indeed-js.
* Process:
	* Get initial search results from API.
	* Process data options:
		* Incidence of keywords in text, based on a defined word list.
		* Unattended word clustering (put machine learning into practice!).		
	* Merge data into a main database.
	* Display using a nice graphing library check example deployment: https://indeed.meowsergirl.com/
		* chartjs
		* d3.js
		* highcharts?



Further malefic ideas:

check out https://github.com/jmopr/job-hunter