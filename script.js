let news = document.querySelector('.news')
 function getData()
 {
let url='data.json';
fetch(url).then((response)=>{
    return response.json()

}).then((data)=>{
  console.log(data)
  data.map((item)=>{
      let a = document.createElement('a')
      let p = document.createElement('p')
      p.className='news-date'
      p.textContent=item['date']
      a.className='news-head'
      a.setAttribute('href', item['link'])
      a.setAttribute('target','_blank')
      a.textContent= item['title']
     
      news.append(a)
      news.append(p)
      
     
  })
})

}


getData()
console.log(data)
console.log("hi")