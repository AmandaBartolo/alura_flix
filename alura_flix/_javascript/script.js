var series = []

//cadastro de séries
series.push("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRB4WfpxkCR1_dW_uEvxW396fpSFCkmxwbmr6xw_nXg9U2HcWd1") //The 100
series.push("https://resenhandopormarina.com/wp-content/uploads/2017/03/shadowhunters-the-mortal-instruments.40364.jpg") //Shadowhunters
series.push("https://upload.wikimedia.org/wikipedia/pt/9/9f/3%25-poster-temporada-2.jpg") //3%
series.push("https://image.tmdb.org/t/p/original/5314qmiuxOkgf3ZM9WjyZKs4RyK.jpg") //Motherland
series.push("https://br.web.img2.acsta.net/pictures/20/12/07/16/35/0566338.jpg") //Alice
series.push("https://m.media-amazon.com/images/I/41jLjr77v2L.jpg") //The witcher
series.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/WoaHduHBctOUUjLeVwjgk1m8Oc.jpg") //The wheel of time
series.push("https://images-na.ssl-images-amazon.com/images/I/71KYUij-xIL.jpg") //Shadow and bone
series.push("http://bancodeseries.tv.br/images/posters/19897.jpg") //Warrior nun
series.push("https://pbs.twimg.com/media/EsbB2bZXUAYb4zC.jpg") //Winx
series.push("https://br.web.img3.acsta.net/pictures/21/05/26/10/40/5580954.jpg") //Feel good
series.push("https://realnerd.com.br/wp-content/uploads/2021/03/Cursed_Teaser_Poster.jpg") //Cursed
series.push("https://media.fstatic.com/1Alvr2jSvPTo6BZ5XNcjmP4DtEA=/290x478/smart/media/movies/covers/2020/03/siren-season-3-key-art.jpg") //Siren
series.push("https://br.web.img2.acsta.net/pictures/19/09/11/14/46/0334747.jpg") //The purge

//lista de séries
for (var i = 0; i < series.length; i++)
{
    document.write("<img src=" + series[i] + ">")
}