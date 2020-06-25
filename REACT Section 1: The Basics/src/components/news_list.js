import React from 'react';
import NewsListItem from './news_list_item';

// props: allows the passing of information from parent component to child component/function
// If you only want to access a part of it, see below
// const NewsList = (props) =>
// {
// console.log(props.news.name)    

// ES6 Trick: Destructuring
// const NewsList = ({news, hello}) =>
// {
//     console.log(news.name)
//     console.log(hello)
const NewsList = (props) => {
    console.log(props.news.name)
    // Rendering all items from singular function
    // const news = props.news.map((item) => (
    //     <div>
    //         <h3>{ item.title }</h3>
    //         <div>
    //             {item.feed}
    //         </div>
    //     </div>
    // )) 

    //Fix to the unique key error: add key value like so:
    const news = props.news.map((item, i) => (
        <NewsListItem item={item} key={item.id}/>
        ))
    return (
        <>
            { news }
            {/* Access to the child component */}
            {/* { props.children } */}
        </>
        // <div>
        //     Hello, I am the news component
        //     <NewsListItem/>
        // </div>
    )
}

export default NewsList;