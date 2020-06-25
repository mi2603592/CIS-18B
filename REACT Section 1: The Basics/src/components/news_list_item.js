import React from 'react';
// import { css } from 'glamor';

const NewsListItem = ({item}) =>
{
    // Adding glamor styles as a data attribute
    // let news_item = css({
    //     padding:'20px',
    //     boxSizing:'border-box',
    //     borderBottom:'1px solid grey',
    //     ':hover':{
    //         color:'blue'
    //     }
    // })

    // let item_back = css({
    //     background:'green'
    // })
    return (
        // Adding glamor styles as a data attribute
        // <div {...news_item}>
        
        // Adding glamor styles as a class; using template strings
        //<div className={`${news_item} ${item_back}`}>

        <div className='news_item'>
            <h3>{ item.title}</h3>
            <div>
                { item.feed }
            </div>
        </div>
    )
}

// const NewsListItem = () =>
// {
//     return (
//         <div>
//             Hello, I am the news list item.
//         </div>
//     )
// }

export default NewsListItem;