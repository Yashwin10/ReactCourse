import React from 'react'


// in this Cards function, sabhi parameters ko default values de rhe hain 

function Cards({username = "Yash" , post = "SDE Intern", img_url = "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, myArray) {

    // console.log(props)

    return (
    <div>
     <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={img_url} alt="" width="384" height="512" />
        
        <div className="pt-6 text-center space-y-4">
        
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It's easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>

            </blockquote>

            <figcaption className="font-medium">

                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>

                <div className="text-slate-700 dark:text-slate-500">
                    {post}
                </div>
            
            </figcaption>
        </div> 
    </figure>
    </div>
  )
}

export default Cards
