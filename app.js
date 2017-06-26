$(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    var searchTerm = $('.searchTerm').val();
    var url = 'https://www.googleapis.com/youtube/v3/search?';
    var params =  { part: 'snippet',
      key: 'AIzaSyDpj2ZQ1vZjLZqEv-suH_lHtVogwx7naw0',
        type: 'video',
        q: searchTerm
    }
    

     $.getJSON(url, params, showData);
    
     function showData (results) {
       console.log(results);
       //console.log('new results ', results);
       $.each(results.items, function (i, value) {
         console.log(value);
         $('.results').append('<p>' + value.snippet.thumbnails.medium.url + '</p>' );
       });
     }
    
    
  });
  
 
  
  
});

