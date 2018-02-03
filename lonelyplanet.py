import requests
import re
from bs4 import BeautifulSoup

def getHtml():
    proxies = {
        'https': 'socks5://127.0.0.1:1080',
        'http': 'socks5://127.0.0.1:1080'
    }
    headers = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/'
    }

    url = 'https://www.lonelyplanet.com/video/'
    # url = 'https://www.google.com'
    response = requests.get(url, proxies=proxies, headers=headers)
    return response.text
    # print response.text

def parseHtml(html):
    # # classifyTitle = re.findall('<h2 class=".* Heading".*>(.*?)</h2>', html, re.S)
    # classifyUrl = re.findall('<header style.*data-reactid=".*"><a href="(.*?)"', html, re.S)

    # videoUrl = re.findall('<div class="Card-image".*><a.*href="(.*?).*>"', html, re.S)
    # bgImages = re.findall('style=".*background-image:(.*?);.*"', html, re.S)
    # classifyName = re.findall('<h3 class=".* Heading".*>(.*?)</h3>', html, re.S)

# {"id":"534","url":"/video/street-art-in-valparaiso/v/vid/534","tags":["best in travel 2018","bit18","valparaíso","chile","street art"],"atlas_ids":["363303"],"modify_date":"2018-01-26T06:28:53.506674Z","create_date":"2017-10-18T02:48:07.980326Z","name":"Street art in Valparaíso","slug":"street-art-in-valparaiso","live":true,"reference_id":null,"short_description":"Lonely Planet writer Mark Johanson explores Valparaiso, Chile's capital of street art.","description":"The Chilean port of <a href=\"https://www.lonelyplanet.com/chile/valparaiso\"target=\"_blank\">Valparaíso</a> is one of the most colourful in <a href=\"https://www.lonelyplanet.com/south-america\"target=\"_blank\">South America</a>, which is not surprising as it’s also Chile's capital of street art. Lonely Planet writer Mark Johanson joins Al Ramirez from <a href=\"http://www.valpostreetart.com/\"target=\"_blank\">Valpo Street Art Tours</a> to explore the city’s murals and even pick up a spray can himself. Presented by GoPro.<br><br><i>For the best trends, destinations, journeys and experiences for the year ahead, check out <a href=\"http://shop.lonelyplanet.com/world/lonely-planets-best-in-travel-us-2018/?utm_source=lp+video&utm_medium=video&utm_campaign=best+in+travel+2018\"target=\"_blank\">Lonely Planet's Best in Travel 2018</a>.</i>","duration":153300,"is_360":false,"episode":3,"season":5,"format":null,"host":"Mark Johanson","director":null,"year":"2017","featured_order":null,"featured_priority":false,"spotlight":false,"hub":true,"thumbnail_url":"https://s3.amazonaws.com/static-asset/op-video-sync/images/production/t-5615417035001-brightcove-street-art-in-valparaiso-20171026-052119.jpg","poster_url":"https://s3.amazonaws.com/static-asset/op-video-sync/images/production/p-5615417035001-brightcove-street-art-in-valparaiso-20171026-052120.jpg","hero_url":null,"graphic_url":null,"provider_id":"5615417035001","provider_name":"brightcove","start_date":"2017-10-18T02:45:47Z","end_date":null,"card_url":"https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615417035001-brightcove-street-art-in-valparaiso-20171026-052120.jpg?w=430&h=250&fit=crop"}
    # classify = re.findall('<a class="sub-navigation__link" href="(.*?)">(.*?)</a>', html, re.S)

    # # videoUrl = re.findall('')
    # # bgImages = re.findall('')
    # # classifyName = re.findall('')

    # # print bgImages
    # # print classifyUrl, videoUrl, bgImages, classifyName
    # print classify, len(classify)

    # a = re.findall('"channels":[{.*"name":"(.*?)"].*"image_url":"(.*?)".*"url":"(.*?),"videos":[{.*"url":"(.*?)".*"name":"(.*?)"}]', html, re.S)
    # print a

    soup = BeautifulSoup(html, 'html.parser')
    # print soup.prettify()
    classifyTitles = soup.select('header a h2.Heading')

    classifyNames = soup.select('h3.Heading')
    name = soup.select('h3.rmq-a7867e6.Heading')

    # bgImages = soup.select('.CoverPhoto')

    for title, name, a in zip(classifyTitles, classifyNames, name):
        # print "title: %s, name: %s" % (title.text, name.text)
        print a.text



if __name__ == "__main__":
    html = getHtml()
    # print html
    parseHtml(html)