Title: Typography Test
Date: 2017-07-19
modified: 2017-07-20
summary: Testing this site typography 

Notes to self on getting the content right. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, ex corporis, maxime tempore eos veniam illo, ducimus quia rem, velit incidunt. Nemo dignissimos dicta repudiandae! Corporis exercitationem accusamus quas excepturi!

## Topic 1

So let's say we are writing an article with subdivisions. I would like to keep things simple so it is important not to use to many headers, as the reader can easily get discouraged by complexity.

A list example:

* Clean, lots white spaces on headers to make them clean
* Minimize number of subdivision. Max 2 header levels
* Use other formats instead of headers, like lists started by bolds.
* Figures managed via bootstrap

## Topic dos

I will try to keep division up to this level. The main division of the article will be in h2 headers.

### 2.1 Subtopic


If more detail is needed. Then I can use another subdivision like this, this is an h3. Id fugiat assumenda consectetur a cupiditate accusantium quibusdam inventore perspiciatis! Maybe we drop a small figure here:

<figure class="figure" style="max-width: 200px;">
	<img class="figure-img img-fluid" src="../images/american-colombo.jpg">
	<div class="figure-caption text-center">American Colombo</div>
</figure>

### 2.2 Subtopic

This is another h3 subdivision. Let's add a quote over here.

<div class="blockquote"> "Quote via bootstrap class. Expedita odit velit incidunt nam quod sit ducimus!"
	<div class="blockquote-footer"> "blockquoute footer "</div>
</div>

## Topic tres

What if we want get geeky and drop some code? 
Still dont know how to get pygments working:

```python
import collections

logfile = open("yourlogfile.log", "r")

clean_log=[]

for line in logfile:
    try:
        # copy the URLS to an empty list.
        # We get the part between GET and HTTP
        clean_log.append(line[line.index("GET")+4:line.index("HTTP")])
    except:
        pass
```

Hey what about putting something in that whitespace to the right. Is it possible?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo laudantium, tempore earum incidunt temporibus eum, blanditiis quisquam dolorem maxime aperiam suscipit illum! Dolorum, officiis, possimus. Maxime repellendus ex debitis!


