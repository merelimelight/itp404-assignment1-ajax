$('#search-form').submit(function(event) 
{   
    event.preventDefault();
    $('#results').html('<div class = "loader"> Loading... </div>');

    let searchInput = document.querySelector("#search").value.trim();

    let promise = $.ajax({
        type: 'GET',
        url: 'https://www.reddit.com/r/' + searchInput + '.json',
    });

    promise.then(function(posts)
    {
        let fragment = document.createDocumentFragment();
        
        posts.data.children.forEach(function(post)
        {
            let br = document.createElement('br');
            let a = document.createElement('a');
            let p = document.createElement('p');
            let h5 = document.createElement('h5');
            let h1 = document.createElement('h1');

            a.innerText = post.data.title;
            a.href = post.data.url;
            a.target = "_blank";
            p.innerText = post.data.score;
            h5.innerText = post.data.author;
            h1.innerText = "________________________________________";

            fragment.append(br);
            fragment.append(a);
            fragment.append(p);
            fragment.append(h5);
            fragment.append(h1);
        });

        $('#results').html(fragment);
    });
});