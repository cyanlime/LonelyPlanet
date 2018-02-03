import requests
from bs4 import BeautifulSoup

def parseHtml(url, sites, pagenum):
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")

    sitenames = soup.select(".rdetailbox dt a")
    covers = soup.select(".leftimg img")
    scores = soup.select(".score strong")

    for sitename in sitenames:
        print sitename.text
        sites.append(sitename.text)

def compare(url, pagenum):
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")

    disable = soup.select(".nextpage.disabled")
    if len(disable)==0:
        nextpageurl = soup.select(".nextpage")[0].attrs['href']
        # pagenum = soup.select(".pager_v1 a.current")[0].text
        totalnums = soup.select(".numpage")[0].text
        return nextpageurl, totalnums
    else:
        return None, pagenum

def getNexturl(nextpageurl, pagenum, totalnums):
    # if pagenum < totalnums:
    nextUrl = 'http://you.ctrip.com' + nextpageurl
    print pagenum
    # else:
    #     nextUrl = None
    return nextUrl

if __name__ == "__main__":
    sites = []
    # url = 'http://you.ctrip.com/sight/xiamen21.html'
    url = 'http://you.ctrip.com/sight/Suzhou11.html'
    pagenum = 1
    parseHtml(url, sites, pagenum=1)

    nextpageurl, totalnums = compare(url, pagenum)
    while pagenum < totalnums:
        nextpageurl, totalnums = compare(url, pagenum)
        if nextpageurl!=None:
            nextUrl = getNexturl(nextpageurl, pagenum, totalnums)
        # if nextUrl!=None:
            parseHtml(nextUrl, sites, pagenum)
            url = 'http://you.ctrip.com' + nextpageurl
            pagenum +=1
    print sites