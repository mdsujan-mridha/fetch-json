const posts=[
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
    {
        title:'i m a card',
        body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur.',
    },
];

/*
<div class="card--1"> 
            <div class="card--header"> 
                 <h1 class="card--title"> i'm card -1 </h1>
            </div>
                 <div class="card--post"> 
                         <p class="post"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis est, suscipit architecto porro dolore distinctio nobis totam perspiciatis tenetur. </p>
             </div>
    </div>

*/


const loadAllData=document.querySelector('.card--area');
 const loadData=()=>{
    posts.map((card)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("card--1");
        postElement.innerHTML=`
                        <h1 class="card--title"> ${card.title} </h1>
                         <p class="post">
                          ${card.body}
                        </p> 
        `;
         loadAllData.appendChild(postElement);
    });
    };
    loadData();