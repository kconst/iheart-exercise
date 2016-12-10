const express = require('express'),
  http = require('http'),
  app = express();

app.get('/search/artist/:query', function (req, res) {
  http.get({
    protocol: 'http:',
    host: 'api-3283.iheart.com',
    path: `/api/v1/catalog/searchAll?keywords=${req.params.query}&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`,
    headers: {
      'Content-type': 'application/json'
    }
  },
    response => {
      let data = '';

      console.log(`STATUS: ${response.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

      response.setEncoding('utf8');

      response.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        data += chunk;
      });

      response.on('end', () => {
        console.log('No more data in response.');
        let json = JSON.parse(data).artists.map( e => { return {
          name: e.artistName,
          image: `http://iscale.iheart.com/catalog/artist/${e.artistId}?ops=fit(250,0)`
        } });

        res.json(json);
      });
    }
  );
});

app.listen(8081, process.env.IP, function () {
  console.log('App listening on 127.0.0.1:8080');
});